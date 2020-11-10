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
      .getProducts('/menu') //Hace referencia a la clase MenuServices
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
      <div class="div-container">
        {this.menus.map((menu) =>
          <div class="card mb-3" id="div-cards">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src={menu.image} class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{menu.description}</h5>
                  <p class="card-text">${menu.price}</p>
                </div>
              </div>
              <button type="button" class="btn btn-primary" onClick={()=>this.handleSelectedMenu(menu)}>Agregar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

}