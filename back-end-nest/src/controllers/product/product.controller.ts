import { Controller, Get, Param } from '@nestjs/common';
import { Product } from 'src/models/productDto';
import { ProductService } from 'src/services/product/product.service';

@Controller('products')
export class ProductController {

    constructor(private productService : ProductService){}

    @Get(':category')
    getProducts(@Param('category') category): Product[] {
        let selectedCategory : string = category.toLowerCase();
        return this.productService.getProductsByCategory(selectedCategory);
    }

}
