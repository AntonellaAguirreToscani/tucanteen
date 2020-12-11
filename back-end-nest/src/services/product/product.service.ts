import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AutoMapper, InjectMapper } from 'nestjsx-automapper';
import { Product } from 'src/entities/product.entity';

import { ProductDTO } from 'src/models/productDto';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class ProductService {

    public constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectMapper() 
        private readonly mapper: AutoMapper
    ){}

    public async getByCategory(category: number): Promise<ProductDTO[]> {
        try {
           const products: Product[] = await this.productRepository.find({
                where: [{ type_product_id: Equal(category)}],
            });
            
            return this.mapper.mapArray(products,ProductDTO);
        } catch (error) {
            throw new HttpException(
                {
                  status: HttpStatus.NOT_FOUND,
                  error: 'there is an error in the request, ' + error,
                },
                HttpStatus.NOT_FOUND,
            );
        }
    }


}
