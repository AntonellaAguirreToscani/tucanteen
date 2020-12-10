import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { User } from "./user.entity";

@Entity('e01_type_user')
export class TypeUser{
   
    @PrimaryGeneratedColumn()
    type_user_id : number;
    
    @Column()
    type_description : string;
    
    @OneToMany(type => User,user => user.typeUser)
    public user : User[]; 
    
    public constructor (type_user_id?:number,type_description?:string) {
      
      this.type_user_id= type_user_id;
      this.type_description=type_description;
    }
}