import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity('e01_product')
export class Product{
   
    @PrimaryGeneratedColumn()
    product_id : number;
    
    @Column()
    product_name : string;
    
    @Column()
    product_description : string;

    @Column()
    price: number;

    @Column()
    photo : string;

    @Column()
    type_product_id : number;


    @ManyToMany(type => Order, order => order.products)
     public orders : Order[]; 

    public constructor (productId?: number, name?:string, description?:string, price?: number,
                        photo?: string, typeProduct?:number) {
      
      this.product_id = productId;
      this.product_name = name;
      this.product_description = description;
      this.price = price;
      this.photo = photo;
      this.type_product_id = typeProduct;
    }
}