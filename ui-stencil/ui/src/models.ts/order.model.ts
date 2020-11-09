import { Product } from "./product.model";

export class Order{
    orderNumber : number;
    userName : string;
    description: string;
    hour : string;
    total : number;
    products : Product[];

    constructor(_order:number,_hour: string, _total:number, _products?: Product[],_user?:string, _descrition?:string) {
        this.orderNumber =_order;
        this.userName =_user;
        this.userName = _descrition;
        this.hour=_hour;
        this.total=_total;
        this.products=_products;
      }
  
      static void():Order{
          return new Order(0,"",0,[],'','');
      } 
}