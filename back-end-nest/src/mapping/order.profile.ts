import { AutoMapper, ignore, InjectMapper, mapDefer, mapFrom, MapperMap, Profile, ProfileBase } from "nestjsx-automapper";
import { Order } from "src/entities/order.entity";
import { Product } from "src/entities/product.entity";
import { OrderDTO } from "src/models/orderDtos";
import { ProductDTO } from "src/models/productDto";

@Profile()
export class OrderProfile extends ProfileBase {
  constructor(@InjectMapper() mapper: AutoMapper) {
    super();

    mapper
      .createMap(Order, OrderDTO)
      .forMember(
        dest => dest.id,
        mapFrom(src => src.order_id),
      )
      .forMember(
        dest => dest.date,
        mapFrom(src => src.order_date),
      )
      .forMember(
        dest => dest.orderTime,
        mapFrom(src => src.order_time),
      )
      .forMember(
        dest => dest.deliveryTime,
        mapFrom(src => src.delivery_time),
      )
      .forMember(
        dest => dest.total,
        mapFrom(src => src.total),
      )
      .forMember(
        dest => dest.state,
        mapFrom(src => src.state),
      )
      .forMember(
        dest => dest.userId,
        mapFrom(src => src.user_id)
      )
      // .forMember(
      //   dest => dest.products,
      //   mapFrom(src => src.products)
      // );
  }
}
