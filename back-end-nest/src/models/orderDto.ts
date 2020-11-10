import { Product } from "./productDto";

export class Order{
    orderNumber : number;
    userName : string;
    description: string;
    hour : string;
    total : number;
    // products : Product[];

    constructor(_orderNumber: number, _userName: string, _description : string, _hour: string, _total: number) {
        this.orderNumber = _orderNumber;
        this.userName = _userName;
        this.description = _description;
        this.hour = _hour;
        this.total = _total;
      }
  
      static void():Order{
          return new Order(0,'','','',0);
      } 
}