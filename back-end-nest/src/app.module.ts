import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './controllers/login/login.controller';
import { OrderController } from './controllers/order/order.controller';
import { ProductController } from './controllers/product/product.controller';
import { SaleController } from './controllers/sale/sale.controller';
import { LoginService } from './services/login/login.service';
import { OrderService } from './services/order/order.service';
import { ProductService } from './services/product/product.service';
import { SaleService } from './services/sale/sale.service';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..'),
    }),
  ],
  controllers: [AppController,ProductController,OrderController,LoginController,SaleController],
  providers: [AppService, ProductService,OrderService,LoginService,SaleService],
})
export class AppModule {}
