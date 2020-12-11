import { AutoMapper, ignore, InjectMapper, mapFrom, Profile, ProfileBase } from "nestjsx-automapper";
import { Product } from "src/entities/product.entity";
import { TypeUser } from "src/entities/typeUser.entity";
import { User } from "src/entities/user.entity";
import { ProductDTO } from "src/models/productDto";
import { TypeUserDTO } from "src/models/typeUserDto";
import { UserDTO } from "src/models/userDto";

@Profile()
export class SourceProfile extends ProfileBase {
  constructor(@InjectMapper() mapper: AutoMapper) {
    super();
    // MAPEO FUNCIONANDO
    mapper
      .createMap(Product, ProductDTO)
      .forMember(
        dest => dest.id,
        mapFrom(src => src.product_id),
      )
      .forMember(
        dest => dest.name,
        mapFrom(src => src.product_name),
      )
      .forMember(
        dest => dest.description,
        mapFrom(src => src.product_description),
      )
      .forMember(
        dest => dest.image,
        mapFrom(src => src.photo),
      )
      .forMember(
        dest => dest.price,
        mapFrom(src => src.price),
      )
      .forMember(
        dest => parseInt(dest.category),
        mapFrom(src => src.type_product_id)
      );
      //MAPEO QUE NO SE ESTA UTILIZANDO POR BUG
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
      );
      
     //MAPEO QUE NO SE ESTA UTILIZANDO POR BUG
     mapper
     .createMap(TypeUser,TypeUserDTO)
     .forMember(
       dest => dest.id,
       mapFrom(src => src.type_user_id),
     )
     .forMember(
       dest => dest.description,
       mapFrom(src => src.type_description),
     ); 
  }
}