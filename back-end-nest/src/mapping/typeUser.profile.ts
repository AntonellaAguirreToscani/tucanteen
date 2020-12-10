import { AutoMapper, InjectMapper, mapFrom, Profile, ProfileBase } from "nestjsx-automapper";
import { TypeUser } from "src/entities/typeUser.entity";
import { TypeUserDTO } from "src/models/typeUserDto";

@Profile()
export class TypeUserProfile extends ProfileBase {
  constructor(@InjectMapper() mapper: AutoMapper) {
    super();

    mapper
      .createMap(TypeUser,TypeUserDTO)
      .forMember(
        dest => dest.id,
        mapFrom(src => src.type_user_id),
      )
      .forMember(
        dest => dest.description,
        mapFrom(src => src.type_description),
      )
      
  }
}