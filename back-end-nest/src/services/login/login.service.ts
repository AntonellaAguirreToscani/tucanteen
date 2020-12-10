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
  }

   public async validateUser(userInfo: any): Promise<UserDTO> {
     let user = new User(userInfo.userName, userInfo.password);

     const userLogOn = await this.findOne(user.user_name);

    console.log(userLogOn);
    if (userLogOn && userLogOn.user_password === user.user_password) {
      const {user_id,user_name,first_name,last_name,typeUser} = userLogOn;
        console.log('USUARIO VALIDADO');
         let a = {user_id,user_name,first_name,last_name,typeUser};
       return this.mapper.map(a,UserDTO)
      
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
