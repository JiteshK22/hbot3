import { Injectable } from '@nestjs/common';
import { OrderStatus } from '@prisma/client';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: {
    customerId: string;
    totalAmount: number;
    items: Array<{ productId: string; name: string; qty: number; price: number }>;
  }) {
    return this.prisma.order.create({
      data: {
        customerId: data.customerId,
        totalAmount: data.totalAmount,
        status: OrderStatus.PENDING,
        items: {
          create: data.items,
        },
      },
      include: { items: true },
    });
  }

  findAll() {
    return this.prisma.order.findMany({ include: { items: true, customer: true, rider: true } });
  }

  updateStatus(id: string, status: OrderStatus) {
    return this.prisma.order.update({ where: { id }, data: { status } });
  }
}
