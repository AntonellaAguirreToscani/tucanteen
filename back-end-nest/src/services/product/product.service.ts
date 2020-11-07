import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/productDto';
import * as fs from 'fs';

@Injectable()
export class ProductService {
    private products : Product[];
    
    private loadProducts(): void {
        let document = fs.readFileSync('../back-end-nest/config/products.csv', 'utf8');
        const elements: string[][] =
            document.split('\n').map(item => item.replace('\r', '')).map(item => item.split(','));
    
        //Para que se mantenga actualizado el listado de productos, se inicializa acá!!
        this.products = [];
        for (let i = 0; i < elements.length; i++) {
            let product : Product = new Product(elements[i][0],parseInt(elements[i][1]),elements[i][2],elements[i][3],parseInt(elements[i][4]));
            this.products.push(product);
        }
    }
    public getProducts(): Product[]{
        this.loadProducts();
        return this.products;
    }

    // public getProductsByCategory(category:string): Product[]{
    //     return this.getProducts().filter(product=> product.category === category);
    // }

    // public GetDesserts(): Product[]{
    //    return this.getProductsByCategory('postres');
    // }

    // public getMenu(): Product[]{
    //     return this.getProductsByCategory('menu');
    // }

    // public getDrinks(): Product[]{
    //     return this.getProductsByCategory('bebidas');
    // }

    // public getPlatesFood(): Product[]{
    //     return this.getProductsByCategory('plato');
    // }

    // public getSandwiches(): Product[]{
    //     return this.getProductsByCategory('sandwiches');
    // }
}
