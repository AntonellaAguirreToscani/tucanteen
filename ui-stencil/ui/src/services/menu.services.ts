import { Observable, of } from "rxjs";
import { MENU } from "../mocks/menu.mock";
import { Product } from "../models.ts/product.model";

export class MenuServices{

    private static _instance: MenuServices;
  
  
    getMenu(): Observable <Product[]> {
      return of(MENU);
    }
    //Utiliza el patron Singleton. Se intancia una única vez!
    public static get Instance(): MenuServices {
        return this._instance || (this._instance = new this());
    }
  }