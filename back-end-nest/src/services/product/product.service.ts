import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class ProductService {

    public constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ){}

    public async getByCategory(category: number): Promise<Product[]> {
        try {
           const result: Product[] = await this.productRepository.find({
                where: [{ type_product_id: Equal(category)}],
            });
            return result;

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
