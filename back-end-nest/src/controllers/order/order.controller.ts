import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Order } from 'src/models/orderDto';
import { OrderService } from 'src/services/order/order.service';

@Controller('orders')
export class OrderController {

    constructor(private OrderService : OrderService){}

    @Get()
    getOrders(): Order[]{
        return this.OrderService.getOrders();
    }
    @Post()
    addOrder(@Body() order : Order){
        this.OrderService.addOrder(order);
    }
    @Delete(':id')
    public deleteOrder(@Param('id') id: number): void{
        this.OrderService.deleteOrder(id);
    }

}
