import { Body, Controller, Get, Post } from '@nestjs/common';
import { Sale } from 'src/models/saleDto';
import { SaleService } from 'src/services/sale/sale.service';

@Controller('sales')
export class SaleController {
    constructor(private saleService: SaleService){}

    @Get()
    getSales(): Sale[]{
        return this.saleService.getSales();
    }
    @Post('/nueva-venta')
    addSale(@Body() sale : Sale){
        this.saleService.addSale(sale);
    }
}
