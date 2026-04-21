import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class SubscriptionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: { customerId: string; plan: string; credits: number; expiryDate: string }) {
    return this.prisma.subscription.create({
      data: {
        customerId: data.customerId,
        plan: data.plan,
        credits: data.credits,
        expiryDate: new Date(data.expiryDate),
      },
    });
  }
}
