import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly service: CustomersService) {}

  @Post()
  create(@Body() body: { name: string; phone: string; address: string }) {
    return this.service.create(body);
  }

  @Get()
  list() {
    return this.service.list();
  }
}
