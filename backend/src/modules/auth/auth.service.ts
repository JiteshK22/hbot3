import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class AuthService {
  private readonly jwtService = new JwtService({
    secret: process.env.JWT_SECRET || 'supersecret',
  });

  constructor(private readonly prisma: PrismaService) {}

  async register(payload: { name: string; phone: string; password: string; role: string }) {
    const passwordHash = await bcrypt.hash(payload.password, 10);
    return this.prisma.user.create({
      data: {
        name: payload.name,
        phone: payload.phone,
        role: payload.role as any,
        passwordHash,
      },
    });
  }

  async login(payload: { phone: string; password: string }) {
    const user = await this.prisma.user.findUnique({ where: { phone: payload.phone } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const valid = await bcrypt.compare(payload.password, user.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return {
      access_token: this.jwtService.sign({ sub: user.id, role: user.role }),
    };
  }
}
