import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { OrderStatus } from '@prisma/client';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Post()
  create(
    @Body()
    body: {
      customerId: string;
      totalAmount: number;
      items: Array<{ productId: string; name: string; qty: number; price: number }>;
    },
  ) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() body: { status: OrderStatus }) {
    return this.service.updateStatus(id, body.status);
  }
}
