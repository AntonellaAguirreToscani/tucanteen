import { Observable, of } from "rxjs";
import { DRINKS } from "../mocks/drinks-mock";
import { Product } from "../models.ts/product.model";

export class DrinkServices{

    private static _instance: DrinkServices;
  
    getDrinks(): Observable <Product[]> {
      return of(DRINKS);
    }
    //Utiliza el patron Singleton. Se intancia una única vez!
    public static get Instance(): DrinkServices {
        return this._instance || (this._instance = new this());
    }
  }