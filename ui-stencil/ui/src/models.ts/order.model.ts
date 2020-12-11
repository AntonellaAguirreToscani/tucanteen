import { Product } from "./product.model";

export class Order{
    public id : number;
    public date : Date;
    public orderTime : Date;
    public deliveryTime : Date;
    public total: number;
    public state: string;
    public userId: number;
    public products:Product[];

    constructor(_date: Date,_orderTime: Date, _deliveryTime: Date, _total:number,_state: string, _userId: number, _products?: Product[] ,_order?:number) {
        this.date = _date
        this.orderTime =_orderTime;
        this.deliveryTime = _deliveryTime;
        this.total=_total;
        this.state= _state;
        this.userId= _userId;
        this.products=_products;
      }
  
      static void():Order{
          return new Order(new Date(''),new Date(''),new Date(''),0,'',0,[]);
      } 
}