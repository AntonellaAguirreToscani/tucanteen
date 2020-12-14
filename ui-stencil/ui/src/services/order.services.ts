
import { FetchAdapter } from "../adapters/fetch.adapter";
import { CONSTANTS, ENDPOINTS } from "../constants/url.endpoints";
import { Order } from "../models.ts/order.model";

export class OrderService{
    changeOrderStatus(id: number) {
      id;
      throw new Error('Method not implemented.');
    }

    private static _instance: OrderService;
    private baseUrl: string;
    private fetch: FetchAdapter;
    
    constructor() {
      this.baseUrl = CONSTANTS.apiUrl;
      this.fetch = new FetchAdapter(`${this.baseUrl}`);
    }
  
    async getPendingOrders() {
      return await this.fetch.httpRequest(ENDPOINTS.orders,'GET');
    }
    async getSales() {
      return await this.fetch.httpRequest(`${ENDPOINTS.orders}/${ENDPOINTS.sales}`,'GET');
    }
    async postOrder(order: Order){
      this.fetch.httpRequest(`${ENDPOINTS.orders}/${ENDPOINTS.addOrder}`,'POST',order);
    }
    
    async updateOrderState(id:number){
      this.fetch.httpRequest(`${ENDPOINTS.orders}/${id}`,'PUT');
    }

    //Utiliza el patron Singleton. Se intancia una única vez!
    public static get Instance(): OrderService {
        return this._instance || (this._instance = new this());
    }
}    