import { Injectable } from '@nestjs/common';
import { Sale } from 'src/models/saleDto';
import * as fs from 'fs';

@Injectable()
export class SaleService {

    private sales : Sale[];
    
    private loadSales(): void {
        let document = fs.readFileSync('../back-end-nest/config/sales.csv', 'utf8');
        const elements: string[][] =
            document.split('\n').map(item => item.replace('\r', '')).map(item => item.split(','));
    
        //Para que se mantenga actualizado el listado de productos, se inicializa acá!!
        this.sales = [];
        for (let i = 0; i < elements.length; i++) {
            let sale : Sale = new Sale(parseInt(elements[i][0]),new Date(elements[i][1]),elements[i][2],parseInt(elements[i][3]));
            this.sales.push(sale);
        }
    }
    public getSales(): Sale[]{
        this.loadSales();
        return this.sales;
    }
    public addSale (sale : Sale){
        fs.appendFileSync('config/sales.csv',
         `${'\n'}${sale.id},${sale.date},${sale.descripcion},${sale.total}`
        );                              
    }

}
