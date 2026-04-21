import { Body, Controller, Get, Post } from '@nestjs/common';
import { RidersService } from './riders.service';

@Controller('riders')
export class RidersController {
  constructor(private readonly service: RidersService) {}

  @Get()
  list() {
    return this.service.list();
  }

  @Post('location')
  location(@Body() body: { riderId: string; lat: number; lng: number }) {
    return this.service.updateLocation(body);
  }

  @Post('assign')
  assign(@Body() body: { orderId: string; riderId: string }) {
    return this.service.assign(body.orderId, body.riderId);
  }
}
