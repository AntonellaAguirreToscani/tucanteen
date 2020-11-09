// import { Observable, of } from "rxjs";
import { FetchAdapter } from "../adapters/fetch.adapter";
import { CONSTANTS, ENDPOINTS } from "../constants/url.endpoints";
// import{DESSERTS} from "../mocks/client-deserts";
// import { Product } from "../models.ts/product.model";

export class ProductService{
    private static _Instance:ProductService;
    private baseUrl: string;
    private fetch: FetchAdapter;
    
    constructor() {
      this.baseUrl = CONSTANTS.apiUrl;
      this.fetch = new FetchAdapter(`${this.baseUrl}${ENDPOINTS.products}`);
    }
  
    // async getDesserts() {
    //   return await this.fetch.httpRequest('/postres','GET');
    // }
    async getProducts(fetch: string){
      return await this.fetch.httpRequest(fetch,'GET');
    }

    //   getDesserts():Observable <Product[]>{
    //       return of(DESSERTS);
    //   }
  public static get Instance():ProductService{
      return this._Instance ||(this._Instance= new this());
  }
}