import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: { name: string; phone: string; address: string }) {
    return this.prisma.customer.create({ data });
  }

  list() {
    return this.prisma.customer.findMany({ orderBy: { createdAt: 'desc' } });
  }
}
