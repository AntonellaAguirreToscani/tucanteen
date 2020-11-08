// import { Observable, of } from "rxjs";
import { FetchAdapter } from "../adapters/fetch.adapter";
import { CONSTANTS, ENDPOINTS } from "../constants/url.endpoints";
// import{DESSERTS} from "../mocks/client-deserts";
// import { Product } from "../models.ts/product.model";

export class Dessertsservices{
    private static _Instance:Dessertsservices;
    private baseUrl: string;
    private fetch: FetchAdapter;
    
    constructor() {
      this.baseUrl = CONSTANTS.apiUrl;
      this.fetch = new FetchAdapter(`${this.baseUrl}${ENDPOINTS.products}`);
    }
  
    async getDesserts() {
      return await this.fetch.get('/postres');
    }

    //   getDesserts():Observable <Product[]>{
    //       return of(DESSERTS);
    //   }
  public static get Instance():Dessertsservices{
      return this._Instance ||(this._Instance= new this());
  }
}