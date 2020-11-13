import { Injectable } from '@nestjs/common';
import { Order } from 'src/models/orderDto';
import * as fs from 'fs';

@Injectable()
export class OrderService {
    private orders : Order [];
    private ordersFilePath: string = 'config/orders.csv';

    private loadOrders(): void {
        let document = fs.readFileSync('../back-end-nest/config/orders.csv', 'utf8');
        const elements: string[][] =
            document.split('\n').map(item => item.replace('\r', '')).map(item => item.split(','));
    
        //Para que se mantenga actualizado el listado de ordenes, se inicializa acá!!
        this.orders = [];
        for (let i = 0; i < elements.length; i++) {
            let order: Order = new Order(parseInt(elements[i][0]),elements[i][1],elements[i][2],elements[i][3],parseInt(elements[i][4]));
            this.orders.push(order);
        }
    }

    public getOrders() : Order[]{
        this.loadOrders();
       return this.orders;
    }
    public addOrder (order : Order){
        fs.appendFileSync(this.ordersFilePath,
            `${'\n'}${order.orderNumber},${order.userName},${order.description},${order.hour},${order.total}`
        );                              
    }

    public searchIndex(id:number): number{
    return this.orders.findIndex(order=> order.orderNumber == id);
    }

    deleteOrder(id: number): void{
        let index : number = this.searchIndex(id);
        this.orders.splice(index,1);
        this.updateFile();
    }

    private updateFile(){
        if(this.orders.length > 0 ){
            fs.writeFileSync(this.ordersFilePath, 
                this.getOrderLine(this.orders[0])
            );
        }else{
            fs.writeFileSync(this.ordersFilePath, '');
        }
       
        for (let i=1; i<this.orders.length; i++){
            fs.appendFileSync(this.ordersFilePath,
                `\n${this.getOrderLine(this.orders[i])}`);
        }
    }

    private getOrderLine(order: Order): string{
        return `${order.orderNumber},${order.userName},${order.description},${order.hour},${order.total}`;
    }
     
}
