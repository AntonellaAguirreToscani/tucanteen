import { AutoMap } from "nestjsx-automapper";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { TypeUser } from "./typeUser.entity";

@Entity("e01_user")
export class User{
   
    @PrimaryGeneratedColumn()

    user_id : number;
   
    @Column()
    user_name : string;
    
    @Column()
    user_password: string;
    
    @Column()
   first_name : string;

    @Column()
    last_name : string;

    @Column()
    type_user_id : number;


    @ManyToOne(type => TypeUser,typeUser =>typeUser.user)
    @JoinColumn({name: 'user_id'})

    public typeUser: TypeUser;
    
    public constructor (user_id?:number ,user_name?:string, user_password?:string,first_name?:string,last_name?:string,type_user_id?:number,typeUser?:TypeUser) {
      this.user_id=user_id;
      this.user_name=user_name;
      this.user_password= user_password;
      this.first_name=first_name;
      this.last_name= last_name;
      this.type_user_id= type_user_id;
      this.typeUser = typeUser;
    }
}