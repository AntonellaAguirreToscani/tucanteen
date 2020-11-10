export class User{
    private _userName: string;
    private _password: string;
    private _typeUser: string;
    private _photo: string;

    constructor(userName: string, password:string, type:string,photo?:string){
        this._userName = userName;
        this._password = password;
        this._typeUser = type;
        this._photo = (photo == null ||photo == undefined)? "./assets/icon/photo-avatar.png" : photo;
    }
    
    public get userName():string{
        return this._userName;
    }
    public get password():string{
        return this._password;
    }
    public get typeUser():string{
        return this._typeUser;
    }
    public get photo():string{
        return this._photo;
    }
}