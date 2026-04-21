import { Module } from '@nestjs/common';
import { PrismaService } from './common/prisma.service';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { CustomersController } from './modules/customers/customers.controller';
import { CustomersService } from './modules/customers/customers.service';
import { OrdersController } from './modules/orders/orders.controller';
import { OrdersService } from './modules/orders/orders.service';
import { TrackingController } from './modules/tracking/tracking.controller';
import { TrackingService } from './modules/tracking/tracking.service';
import { RidersController } from './modules/riders/riders.controller';
import { RidersService } from './modules/riders/riders.service';
import { PaymentsController } from './modules/payments/payments.controller';
import { PaymentsService } from './modules/payments/payments.service';
import { SubscriptionsController } from './modules/subscriptions/subscriptions.controller';
import { SubscriptionsService } from './modules/subscriptions/subscriptions.service';
import { DashboardController } from './modules/dashboard/dashboard.controller';
import { DashboardService } from './modules/dashboard/dashboard.service';

@Module({
  imports: [],
  controllers: [
    AuthController,
    CustomersController,
    OrdersController,
    TrackingController,
    RidersController,
    PaymentsController,
    SubscriptionsController,
    DashboardController,
  ],
  providers: [
    PrismaService,
    AuthService,
    CustomersService,
    OrdersService,
    TrackingService,
    RidersService,
    PaymentsService,
    SubscriptionsService,
    DashboardService,
  ],
})
export class AppModule {}
