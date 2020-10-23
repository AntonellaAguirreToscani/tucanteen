import { Observable, of } from "rxjs";
import{DESSERTS} from "../mocks/client-deserts";
import{desserts} from "../models.ts/desserts.model";

export class Dessertsservices{
    private static _Instance:Dessertsservices;

  getDesserts():Observable <desserts[]>{
      return of(DESSERTS);
  }
  public static get Instance():Dessertsservices{
      return this._Instance ||(this._Instance= new this());
  }

}