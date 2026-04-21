import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async summary() {
    const totalOrders = await this.prisma.order.count();
    const revenue = await this.prisma.order.aggregate({ _sum: { totalAmount: true } });
    const activeRiders = await this.prisma.rider.count({ where: { status: 'ACTIVE' } });
    const delayedOrders = await this.prisma.order.count({ where: { status: 'ISSUE' as any } });

    return {
      totalOrders,
      revenue: revenue._sum.totalAmount || 0,
      activeRiders,
      delayedOrders,
    };
  }

  liveOrders() {
    return this.prisma.order.findMany({
      where: { status: { in: ['PENDING', 'PICKUP_ASSIGNED', 'PICKED', 'PROCESSING', 'OUT_FOR_DELIVERY'] as any } },
      include: { customer: true, rider: true },
    });
  }
}
