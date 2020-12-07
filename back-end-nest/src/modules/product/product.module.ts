import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from 'src/controllers/product/product.controller';
import { Product } from 'src/entities/product.entity';
import { ProductService } from 'src/services/product/product.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
        Product
        ])
        ],
    controllers: [ProductController],
    providers: [ProductService]
})

export class ProductModule {}
