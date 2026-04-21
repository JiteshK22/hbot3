import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: { orderId: string; amount: number; method: string; status: string }) {
    return this.prisma.payment.create({ data });
  }
}
