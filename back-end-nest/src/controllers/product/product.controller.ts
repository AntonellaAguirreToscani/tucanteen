import { Controller, Get } from '@nestjs/common';
import { Product } from 'src/models/productDto';
import { ProductService } from 'src/services/product/product.service';

@Controller('api')
export class ProductController {

    constructor(private productService : ProductService){}

    @Get('products')
    getProducts(): Product[] {
        return this.productService.getProducts();
    }
    // @Get('desserts')
    // getDesserts(): Product[] {
    //     return this.productService.GetDesserts();
    // }
    // @Get('menu')
    // getMenu(): Product[] {
    //     return this.productService.getMenu();
    // }
    // @Get('plate-food')
    // getPlatesFood(): Product[] {
    //     return this.productService.getPlatesFood();
    // }
    // @Get('drinks')
    // getDrinks(): Product[] {
    //     return this.productService.getDrinks();
    // }
    // @Get('desserts')
    // getSandwiches(): Product[] {
    //     return this.productService.getSandwiches();
    // }

}
