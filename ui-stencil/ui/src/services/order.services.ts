import { Observable, of } from "rxjs";
import { ORDERS } from "../mocks/orders-mock";
import { Order } from "../models.ts/order.model";

export class OrderService{

    private static _instance: OrderService;
  
    getOrders(): Observable <Order[]> {
      return of(ORDERS);
    }
    //Utiliza el patron Singleton. Se intancia una única vez!
    public static get Instance(): OrderService {
        return this._instance || (this._instance = new this());
    }
}    