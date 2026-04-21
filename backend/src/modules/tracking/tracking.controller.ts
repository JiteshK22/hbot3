import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TrackingService } from './tracking.service';

@Controller('tracking')
export class TrackingController {
  constructor(private readonly service: TrackingService) {}

  @Post('update')
  update(@Body() body: { orderId: string; stage: string; updatedBy: string }) {
    return this.service.update(body);
  }

  @Get(':orderId')
  getByOrder(@Param('orderId') orderId: string) {
    return this.service.byOrder(orderId);
  }
}
