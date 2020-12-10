import { AutoMapper, ignore, InjectMapper, mapFrom, Profile, ProfileBase } from "nestjsx-automapper";
import { TypeUser } from "src/entities/typeUser.entity";
import { User } from "src/entities/user.entity";
import { UserDTO } from "src/models/userDto";
import { TypeUserProfile } from "./typeUser.profile";
TypeUserProfile

@Profile()
export class UserProfile extends ProfileBase {
  
  constructor(@InjectMapper() mapper: AutoMapper,
  @InjectMapper() private readonly typeusermaper:TypeUserProfile
  ) {
    super();

    mapper
      .createMap(User, UserDTO)
      .forMember(
        dest => dest.id,
        mapFrom(src => src.user_id),
      )
      .forMember(
        dest => dest.userName,
        mapFrom(src => src.user_name),
      )
      .forMember(
        dest => dest.password,
        mapFrom(src => src.user_password),
      )
      .forMember(
        dest => dest.firstName,
        mapFrom(src => src.first_name),
      )
      .forMember(
        dest => dest.lastName,
        mapFrom(src => src.last_name),
      )
      .forMember(
        dest => dest.typeUser,
        mapFrom(src => {src.typeUser})
        
      );
  }
}