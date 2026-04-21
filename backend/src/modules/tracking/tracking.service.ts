import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class TrackingService {
  constructor(private readonly prisma: PrismaService) {}

  update(data: { orderId: string; stage: string; updatedBy: string }) {
    return this.prisma.orderTracking.create({ data });
  }

  byOrder(orderId: string) {
    return this.prisma.orderTracking.findMany({ where: { orderId }, orderBy: { timestamp: 'asc' } });
  }
}
