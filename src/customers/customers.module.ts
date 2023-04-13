import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';

import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { VlidateCustomerMiddleware } from './middlewares/vlidate-customer.middleware';
import { VlidateCustomerAccountMiddleware } from './middlewares/vlidate-customer-account.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VlidateCustomerMiddleware, VlidateCustomerAccountMiddleware)
      .forRoutes(
        '*',
        //   {
        //   path: 'customers/:id',
        //   method: RequestMethod.GET,
        // }
      );
  }
}
