
import { FetchAdapter } from "../adapters/fetch.adapter";
import { CONSTANTS, ENDPOINTS } from "../constants/url.endpoints";

export class OrderService{

    private static _instance: OrderService;
    private baseUrl: string;
    private fetch: FetchAdapter;
    
    constructor() {
      this.baseUrl = CONSTANTS.apiUrl;
      this.fetch = new FetchAdapter(`${this.baseUrl}`);
    }
  
    async getOrders() {
      return await this.fetch.get(ENDPOINTS.orders);
    }
    // getOrders(): Observable <Order[]> {
    //   return of(ORDERS);
    // }
    //Utiliza el patron Singleton. Se intancia una única vez!
    public static get Instance(): OrderService {
        return this._instance || (this._instance = new this());
    }
}    