import { Controller, Get, Param } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductDTO } from 'src/models/productDto';
import { ProductService } from 'src/services/product/product.service';

@Controller('products')
export class ProductController {

    constructor(private productService : ProductService){}

    @Get(':category')
    public getByCategory(@Param('category') category: string):Promise<ProductDTO[]>{
        let categoryNumber = parseInt(category);
        return this.productService.getByCategory(categoryNumber);
    }
   

}
