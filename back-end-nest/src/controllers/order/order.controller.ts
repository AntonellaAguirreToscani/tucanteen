import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Order } from 'src/entities/order.entity';
import { OrderDTO } from 'src/models/orderDtos';

import { OrderService } from 'src/services/order/order.service';

@Controller('orders')
export class OrderController {

    constructor(private OrderService : OrderService){}

    @Get('pending-orders')
    public getPendingOrders(): Promise<Order[]>{
        return this.OrderService.getPendingOrders();
    }
    @Get('sales')
    public getSales(): Promise<Order[]>{
        return this.OrderService.getSales();
    }
    @Post('add-order')
    public addOrder(@Body() order: OrderDTO){
        this.OrderService.CreateOrder(order);
    }

}
