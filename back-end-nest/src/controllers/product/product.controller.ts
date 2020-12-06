import { Controller, Get, Param } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductService } from 'src/services/product/product.service';

@Controller('products')
export class ProductController {

    constructor(private productService : ProductService){}

    @Get(':category')
    public getByCategory(@Param('category') category: number):Promise<Product[]>{
        return this.productService.getByCategory(category);
    }
   

}
