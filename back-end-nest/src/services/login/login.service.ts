import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { TypeUser } from 'src/entities/typeUser.entity';
import { User } from 'src/entities/user.entity';
import { UserDTO } from 'src/models/userDto';
import { AutoMapper, InjectMapper } from 'nestjsx-automapper';
import { TypeUserDTO } from 'src/models/typeUserDto';
import { constants } from 'buffer';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(TypeUser)
    private readonly typeUserRepository: Repository<TypeUser>,
    // @InjectMapper()
    // private readonly mapper: AutoMapper, 
  ) {}

  public async findOne(username: string): Promise<User> {
    return await this.userRepository.findOne({
      where: [{ user_name: Equal(username) }],
      relations: ['typeUser'],
    });
  }

  public async validateUser(userInfo: any): Promise<UserDTO> {
    let user = new User(0, userInfo.userName, userInfo.password);

    const userLogOn: User = await this.findOne(user.user_name);

    if (userLogOn && userLogOn.user_password === user.user_password) {
      console.log(userLogOn);
      console.log('USUARIO VALIDADO');
      return this.mappingUserToUserDTO(userLogOn);

    } else {
      console.log('USUARIO INEXISTENTE');
      return null;
    }
  }
  public async addNewUser(newUser:UserDTO):Promise<string>{
    const userNew = this.mappingUserDTOtoUser(newUser)
    try {
       await this.userRepository.save(userNew)
      return "Bienvenido a tucanteen!!"
    } catch (error) {
      return "UUpps! volve a intentar!"
    }
  
    }
  public mappingUserDTOtoUser(userDTO:UserDTO):User{
    return new User(
     0,
     userDTO .userName, 
     userDTO .password,
     userDTO.firstName, 
     userDTO .lastName,
    1,
  );
  }

  public mappingUserToUserDTO(user:User): UserDTO {
    return new UserDTO(
      user.user_id,
      user.user_name,
      user.user_password,
      user.first_name,
      user.last_name,
      new TypeUserDTO(
        user.typeUser.type_user_id,
        user.typeUser.type_description,
      ),
    );
  }
 
}
