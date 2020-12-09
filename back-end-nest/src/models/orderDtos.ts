import { ProductDTO } from "./productDto";

export class OrderDTO{
    readonly id : number;
    readonly date : Date;
    readonly orderTime : Date;
    readonly deliveryTime : Date;
    readonly total: number;
    readonly state: string;
    readonly userId: number;
    readonly products:ProductDTO[];
}