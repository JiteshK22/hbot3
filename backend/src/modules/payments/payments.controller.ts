import { Body, Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly service: PaymentsService) {}

  @Post()
  create(@Body() body: { orderId: string; amount: number; method: string; status: string }) {
    return this.service.create(body);
  }
}
