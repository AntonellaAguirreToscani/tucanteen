import { Observable, of } from "rxjs";
import{DESSERTS} from "../mocks/client-deserts";
import { Product } from "../models.ts/product.model";

export class Dessertsservices{
    private static _Instance:Dessertsservices;

  getDesserts():Observable <Product[]>{
      return of(DESSERTS);
  }
  public static get Instance():Dessertsservices{
      return this._Instance ||(this._Instance= new this());
  }

}