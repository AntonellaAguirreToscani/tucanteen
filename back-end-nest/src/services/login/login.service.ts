import { Injectable } from '@nestjs/common';
import { User } from 'src/models/userDto';
import * as fs from 'fs';

@Injectable()
export class LoginService {
  private users: User[];

  public loadUsers() {
    let document = fs.readFileSync('../back-end-nest/config/users.csv', 'utf8');
    const elements: string[][] = document
      .split('\n')
      .map(item => item.replace('\r', ''))
      .map(item => item.split(','));

    //Para que se mantenga actualizado el listado de usuarios, se inicializa acá!!
    this.users = [];
    for (let i = 0; i < elements.length; i++) {
      let user: User = new User(
        elements[i][0],
        elements[i][1],
        elements[i][2],
        elements[i][3],
      );
      this.users.push(user);
    }
  }

  public getUsers(): User[] {
    this.loadUsers();
    return this.users;
  }

  public findOne(username: string): User {
    return this.getUsers().find(user => user._userName == username);
  }

  public validateUser(userInfo: any): any {
    let user = new User(userInfo.userName, userInfo.password);

    const userLogOn = this.findOne(user._userName);

    console.log(userLogOn);
    if (userLogOn && userLogOn._password === user._password) {
      const { _userName,_typeUser,_photo} = userLogOn;
        console.log('USUARIO VALIDADO');
      return { _userName,_typeUser,_photo};
    }
    console.log('USUARIO INEXISTENTE');
    return null;
  }

  // public validateUser(userInfo: any) : User {
  //     let userLogged = new User(userInfo.userName,userInfo.password);
  //     try {
  //         if(userLogged && this.getUsers().find(user=> user._userName == userLogged._userName && user._password == userLogged._password)){
  //             console.log('USUARIO VERIFICADO-API');

  //         }else{
  //             throw Error('Usuario Inexistente');
  //         }
  //     }catch (error) {
  //        console.log(error.message);
  //     }
  // }
}
