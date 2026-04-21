import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class RidersService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.rider.findMany();
  }

  updateLocation(data: { riderId: string; lat: number; lng: number }) {
    return this.prisma.rider.update({
      where: { id: data.riderId },
      data: { locationLat: data.lat, locationLng: data.lng },
    });
  }

  assign(orderId: string, riderId: string) {
    return this.prisma.order.update({ where: { id: orderId }, data: { riderId, status: 'PICKUP_ASSIGNED' as any } });
  }
}
