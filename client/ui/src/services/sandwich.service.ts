import { Observable, of } from "rxjs";
import { SANDWICHES } from "../mocks/sandwiches-mock";
// import {sandwiches} from"../mocks/sandwiches-mock";
import{Sandwiches} from"../models.ts/sandwiches.model";

export class SandwichesServices{

    private static _instance: SandwichesServices;
  
    getDrinks(): Observable <Sandwiches[]> {
      return of(SANDWICHES);
    }
    //Utiliza el patron Singleton. Se intancia una única vez!
    public static get Instance(): SandwichesServices {
        return this._instance || (this._instance = new this());
    }
  }