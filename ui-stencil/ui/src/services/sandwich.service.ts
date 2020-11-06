import { Observable, of } from "rxjs";
import { SANDWICHES } from "../mocks/sandwiches-mock";
import { Product } from "../models.ts/product.model";


export class SandwichesServices{

    private static _instance: SandwichesServices;
  
    getSandwiches(): Observable <Product[]> {
      return of(SANDWICHES);
    }
    //Utiliza el patron Singleton. Se intancia una única vez!
    public static get Instance(): SandwichesServices {
        return this._instance || (this._instance = new this());
    }
  }