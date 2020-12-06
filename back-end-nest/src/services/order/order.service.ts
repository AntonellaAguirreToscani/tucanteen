import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { Product } from 'src/entities/product.entity';
import { Order } from 'src/entities/order.entity';
import { OrderDTO } from 'src/models/orderDtos';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product[]>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>
  ) {}

  public async CreateOrder(orderDto: OrderDTO) {
    try {
      //Mapping OrdenDTO a Order
      const order = new Order();
      order.order_date = orderDto.date;
      order.order_time = orderDto.orderTime;
      order.delivery_time = orderDto.deliveryTime;
      order.total = orderDto.total;
      order.state = orderDto.state;
      order.user_id = orderDto.userId;
      order.products = [];

      // Mapping de ProductDTO[] a Product[]
       orderDto.products.map(product=>{
          order.products.push(new Product(
                product.id,
                product.name,
                product.description,
                product.price,
              ));
        });

      //Guarda en la Base de Datos
      await this.orderRepository.save(order);

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'there is an error in the request, ' + error,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
  public async getPendingOrders(): Promise<Order[]> {
    try {
      const result: Order[] = await this.orderRepository.find({
        where: [{ state: Equal('pendiente') }],
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
  public async getSales(): Promise<Order[]> {
    try {
      const result: Order[] = await this.orderRepository.find({
        where: [{ state: Equal('cobrada') }],
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
