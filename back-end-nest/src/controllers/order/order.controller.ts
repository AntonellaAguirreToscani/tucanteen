import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Order } from 'src/entities/order.entity';
import { OrderDTO } from 'src/models/orderDtos';

import { OrderService } from 'src/services/order/order.service';
import { UpdateDateColumn } from 'typeorm';

@Controller('orders')
export class OrderController {

    constructor(private OrderService : OrderService){}
    @Put(":id")
    public updateState(@Param('id') id: number){
        this.OrderService.updateOrderState(id);
    }
    @Get()
    public getPendingOrders(): Promise<OrderDTO[]>{
        return this.OrderService.getPendingOrders();
    }
    @Get('sales')
    public getSales(): Promise<OrderDTO[]>{
        return this.OrderService.getSales();
    }
    @Post('add-order')
    public addOrder(@Body() order: OrderDTO){
        this.OrderService.CreateOrder(order);
    }
}