import { ProductDTO } from "./productDto";

export class OrderDTO{
    public id : number;
    public date : Date;
    public orderTime : Date;
    public deliveryTime : Date;
    public total: number;
    public state: string;
    public userId: number;
    public products:ProductDTO[];

    public constructor(id?:number,date?: Date,orderTime?:Date,deliveryTime?:Date,total?:number,state?:string,userId?:number,products?:ProductDTO[]){
        this.id = id;
        this.date = date;
        this.orderTime = orderTime;
        this.deliveryTime = deliveryTime;
        this.total = total;
        this.state = state;
        this.userId = userId;
        this.products = products;
    }
}