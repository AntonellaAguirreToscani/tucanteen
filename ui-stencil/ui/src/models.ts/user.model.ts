export class User{
  public userName: string;
  public password: string;
  public typeUser : string;
  public photo: string;

   constructor(_userName:string,_password:string,_typeUser:string,_photo?:string){
     this.userName = _userName;
     this.password = _password;
     this.typeUser = _typeUser;
     this.photo = (_photo == null ||_photo == undefined)? "./assets/icon/photo-avatar.png" : _photo;
   }
   static void(): User {
     return new User('','','');
   }
}

