import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('register')
  register(@Body() body: { name: string; phone: string; password: string; role: string }) {
    return this.service.register(body);
  }

  @Post('login')
  login(@Body() body: { phone: string; password: string }) {
    return this.service.login(body);
  }
}
