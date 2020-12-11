import { type } from "os";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity('e01_order')
export class Order{
    @PrimaryGeneratedColumn()
    order_id : number;
    
    @Column()
    order_date : Date;
    
    @Column()
    order_time : Date; //TIPO: TIME

    @Column()
    delivery_time: Date; // TIPO TIME

    @Column()
    total : number;

    @Column()
    state : string;

    @Column()
    user_id : number;

    @ManyToMany(type=> Product, product=> product.orders)

    @JoinTable({name:'e01_detail_order',joinColumn: {
        name: "order_id",
        referencedColumnName: "order_id"
    },
    inverseJoinColumn: {
        name: "product_id",
        referencedColumnName: "product_id"
    }})

    public products : Product[];
    
    public constructor(orderDate?:Date, orderTime?:Date ,deliveryTime?:Date,
                    total?:number ,state?:string, userId?:number, products?: Product[]){
        this.order_date = orderDate;
        this.order_time = orderTime;
        this.delivery_time = deliveryTime;
        this.total = total;
        this.state = state;
        this.user_id = userId;
        this.products = products;                
    }
    
}