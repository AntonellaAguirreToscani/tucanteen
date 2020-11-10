import { Injectable } from '@nestjs/common';
import { User } from 'src/models/userDto';
import * as fs from 'fs';

@Injectable()
export class LoginService {

    private users: User[];
    
    
    public loadUsers(){
        let document = fs.readFileSync('../back-end-nest/config/users.csv', 'utf8');
        const elements: string[][] =
            document.split('\n').map(item => item.replace('\r', '')).map(item => item.split(','));
    
        //Para que se mantenga actualizado el listado de usuarios, se inicializa acá!!
        this.users = [];
        for (let i = 0; i < elements.length; i++) {
            let user: User = new User(elements[i][0],elements[i][1],elements[i][2],elements[i][3]);
            this.users.push(user);
        }
    }

    public getUsers() : User[]{
        this.loadUsers();
       return this.users;
    }

    public validateUser(userInfo: any) : boolean {
        let userLogged = new User(userInfo.userName,userInfo.password,userInfo.typeUser);
        try {
            if(this.getUsers().find(user=> user.userName == userLogged.userName && user.password == userLogged.password)){
                return true;
            }else{
                throw Error('Usuario Inexistente'); 
            }
        }catch (error) {
           console.log(error.message);
        }

        return false;
    }
}
