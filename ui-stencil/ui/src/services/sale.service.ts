import { FetchAdapter } from "../adapters/fetch.adapter";
import { CONSTANTS, ENDPOINTS } from "../constants/url.endpoints";
import { Sale } from "../models.ts/sale.model";

export class SaleService{

    private static _instance: SaleService;
    private baseUrl: string;
    private fetch: FetchAdapter;
    
    constructor() {
      this.baseUrl = CONSTANTS.apiUrl;
      this.fetch = new FetchAdapter(`${this.baseUrl}${ENDPOINTS.sales}`);
    }
  
    async getSales() {
      return await this.fetch.httpRequest(ENDPOINTS.sales,'GET');
    }
    async postOrder(sale: Sale){
      this.fetch.httpRequest('/nueva-venta','POST',sale);
    }

    //Utiliza el patron Singleton. Se intancia una única vez!
    public static get Instance(): SaleService {
        return this._instance || (this._instance = new this());
    }
}    