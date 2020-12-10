import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { TypeUser } from 'src/entities/typeUser.entity';
import { User } from 'src/entities/user.entity';
import { UserDTO } from 'src/models/userDto';
import { AutoMapper, InjectMapper } from 'nestjsx-automapper';

@Injectable()
export class LoginService {
<<<<<<< HEAD
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
        parseInt(elements[i][4]),
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
=======
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(TypeUser)
    private readonly typeUserRepository: Repository<TypeUser>,
    @InjectMapper() 
        private readonly mapper: AutoMapper,
  ) {}

 

  public async findOne(username: string): Promise<User> {
    return await this.userRepository.findOne({
      where: [{ user_name: Equal(username) }],
    });;
>>>>>>> cfcfdbf78a05d9292122a7ed8b11291c258309f5
  }

   public async validateUser(userInfo: any): Promise<UserDTO> {
     let user = new User(userInfo.userName, userInfo.password);

     const userLogOn = await this.findOne(user.user_name);

    console.log(userLogOn);
<<<<<<< HEAD
    if (userLogOn && userLogOn._password === user._password) {
      const { _userName,_typeUser,_photo,id} = userLogOn;
        console.log('USUARIO VALIDADO');
      return { _userName,_typeUser,_photo,id};
=======
    if (userLogOn && userLogOn.user_password === user.user_password) {
      const {user_id,user_name,first_name,last_name,typeUser} = userLogOn;
        console.log('USUARIO VALIDADO');
         let a = {user_id,user_name,first_name,last_name,typeUser};
       return this.mapper.map(a,UserDTO)
      
>>>>>>> cfcfdbf78a05d9292122a7ed8b11291c258309f5
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
