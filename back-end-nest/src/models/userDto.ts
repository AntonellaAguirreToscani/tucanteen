export class User{
    private userName: string;
    private password: string;
    private typeUser: string;
    private photo: string;
    public id: number;

    constructor(_userName: string, _password:string, _type?:string,_photo?:string, _id?: number){
        this.userName = _userName;
        this.password = _password;
        this.typeUser = _type;
        this.photo = (_photo == null ||_photo == undefined)? "./assets/icon/photo-avatar.png" : _photo;
        this.id = _id;
    }
    
    public get _userName():string{
        return this.userName;
    }
    public get _password():string{
        return this.password;
    }
    public get _typeUser():string{
        return this.typeUser;
    }
    public get _photo():string{
        return this.photo;
    }
}