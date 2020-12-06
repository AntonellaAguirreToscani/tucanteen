import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from 'src/controllers/order/order.controller';
import { ProductController } from 'src/controllers/product/product.controller';
import { Order } from 'src/entities/order.entity';
import { Product } from 'src/entities/product.entity';

import { OrderService } from 'src/services/order/order.service';
import { ProductService } from 'src/services/product/product.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
        Order,
        Product
        ])
        ],
    controllers: [OrderController,ProductController],
    providers: [OrderService,ProductService]
})
export class OrderModule {}
