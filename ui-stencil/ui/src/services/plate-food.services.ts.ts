import { Observable, of } from "rxjs";
import { PLATEFOOD } from "../mocks/plate-food.mock";
import { Plate } from "../models.ts/plate-food.models";

export class PlateFoodServices {


    private static _instance: PlateFoodServices;

    getPlateFood(): Observable<Plate[]> {
        return of(PLATEFOOD);
    }
    //Utiliza el patron Singleton. Se intancia una única vez!
    public static get Instance(): PlateFoodServices {
        return this._instance || (this._instance = new this());
    }
}