import { Observable, of } from "rxjs";
import { MENU } from "../mocks/menu.mock";
import { Menu } from "../models.ts/menu.model";

export class MenuServices{

    private static _instance: MenuServices;
  
  
    getMenu(): Observable <Menu[]> {
      return of(MENU);
    }
    //Utiliza el patron Singleton. Se intancia una única vez!
    public static get Instance(): MenuServices {
        return this._instance || (this._instance = new this());
    }
  }