import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from 'src/services/product/product.service';

@Controller('products')
export class ProductController {

    constructor(private productService : ProductService){}

   

}
