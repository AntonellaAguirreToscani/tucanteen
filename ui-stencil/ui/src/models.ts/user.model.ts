import { TypeUserDTO } from "./typeUser.model";

export class User{
    public id:number;
    public userName: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public typeUser: TypeUserDTO;
    public photo: string = './assets/icon/photo-avatar.png';
    
    public constructor(id?:number, userName?:string,password?:string,firstName?:string,lastName?:string,typeUser?: TypeUserDTO){
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.typeUser = typeUser;
    }
  
    static void(): User {
        return new User(0,'','','','',new TypeUserDTO(0,''));
    }
}
