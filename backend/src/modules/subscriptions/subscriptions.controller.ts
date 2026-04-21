import { Body, Controller, Post } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly service: SubscriptionsService) {}

  @Post()
  create(@Body() body: { customerId: string; plan: string; credits: number; expiryDate: string }) {
    return this.service.create(body);
  }
}
