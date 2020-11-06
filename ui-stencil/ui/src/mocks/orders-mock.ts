import { Product } from "../models.ts/product.model";
import { Order } from "../models.ts/order.model";

let list : Product[] = [new Product(1,'','gaseosa',90,'bebidas')];
export const ORDERS : Order[] = [
    {orderNumber: 1,userName:'Debora2020',description:'Sandwich jyq + limonada',hour:'13:30 hs',total:250, products:list},
    {orderNumber: 2,userName:'berniL',description:'Sandwich jyq + limonada',hour:'13:40 hs',total:150, products:list },
    {orderNumber: 3,userName:'nestorLuiss',description:'Ensalada + agua',hour:'13:45 hs',total:350, products:list},
    {orderNumber: 4,userName:'antoAT',description:'Lasagna + coca',hour:'13:50 hs',total:250, products:list}
]