import { AutoMapper, ignore, InjectMapper, mapFrom, Profile, ProfileBase } from "nestjsx-automapper";
import { Product } from "src/entities/product.entity";
import { ProductDTO } from "src/models/productDto";

@Profile()
export class ProductProfile extends ProfileBase {
  constructor(@InjectMapper() mapper: AutoMapper) {
    super();

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
  }
}