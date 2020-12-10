import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomapperModule } from 'nestjsx-automapper';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './controllers/login/login.controller';
import { OrderController } from './controllers/order/order.controller';
import { ProductController } from './controllers/product/product.controller';
import { SaleController } from './controllers/sale/sale.controller';
import { OrderModule } from './modules/order/order.module';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { LoginService } from './services/login/login.service';
import { OrderService } from './services/order/order.service';
import { ProductService } from './services/product/product.service';
import { SaleService } from './services/sale/sale.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    OrderModule,
    ProductModule,
    UserModule,
    AutomapperModule.withMapper()
  
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..'),
      
    // }),
  ],
  controllers: [AppController,SaleController],
  providers: [AppService,SaleService],
})
export class AppModule {}
