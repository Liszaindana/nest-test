import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BooksModule } from './books/books.module.js';
import { AuthModule } from './auth/auth.module.js';
import { LogMiddlewareMiddleware } from './middleware/log-middleware/log-middleware.middleware.js';
import { UsersModule } from './users/users.module.js';
import { CategoriesModule } from './categories/categories.module.js';
import { PublishersModule } from './publishers/publishers.module.js';
import { AuthorsModule } from './authors/authors.module.js';
import { CustomersModule } from './customers/customers.module.js';
import { OrdersModule } from './orders/orders.module.js';
import { PaymentsModule } from './payments/payments.module.js';
import { ShipmentsModule } from './shipments/shipments.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres' as const,
        host: config.get<string>('DB_HOST', 'localhost'),
        port: Number(config.get<string>('DB_PORT', '5433')),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: config.get<string>('NODE_ENV') === 'development',
      }),
    }),
    BooksModule,
    CategoriesModule,
    PublishersModule,
    AuthorsModule,
    CustomersModule,
    OrdersModule,
    PaymentsModule,
    ShipmentsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddlewareMiddleware).forRoutes('*');
  }
}
