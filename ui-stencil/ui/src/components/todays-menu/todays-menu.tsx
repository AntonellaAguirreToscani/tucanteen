import { Component, h, State, Event, EventEmitter} from '@stencil/core';
import { Product } from '../../models.ts/product.model';
import { ProductService } from '../../services/product.service';


@Component({
  tag: 'todays-menu',
  styleUrl: 'todays-menu.css',
  shadow: false,
})

export class TodaysMenu {
@State() menus: Product[]=[];

@Event() selectedMenu: EventEmitter<Product>;

// Instancia la clase tipo Singleton MenuServices
private productService: ProductService;
constructor() {
  this.productService = ProductService.Instance;
}
getMenu() {
  try {
    this.productService
      .getProducts('/3') //tipo de producto 3 = menu en BD! 
      .then(response => response.json())
        .then(data=>{
          this.menus = data;
        });
  } catch (error) {
    console.log(error.message);
  }
}
componentWillLoad() {
  this.getMenu();
}

 handleSelectedMenu(Menu: Product) {
  this.selectedMenu.emit(Menu);
}
render() {
  return (
    <div class="div-drinks">
      <h1 class="tittle">Menú del día</h1>
      <div class="container">
        {this.menus.map((menu) =>
          <div class="card mb-6 col-sm-5 text-center" id="div-cards">
            <div id="div-row" class="row no-gutters">
              <div class="col-md-6">
                <img src={menu.image} class="card-img" alt="..." />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <p class="card-title text-md-6">{menu.name} {menu.description}</p>
                  <p class="card-text">${menu.price}</p>
                </div>
              </div>
              <div class="text-center">
              <button type="button" class="btn btn-outline-info" onClick={()=>this.handleSelectedMenu(menu)}>Agregar<i class="fa fa-shopping-cart"></i></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

}