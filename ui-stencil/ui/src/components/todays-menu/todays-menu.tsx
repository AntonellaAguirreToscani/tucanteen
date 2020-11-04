import { Component, h, State, Event, EventEmitter} from '@stencil/core';
import { Product } from '../../models.ts/product.model';
import { MenuServices } from '../../services/menu.services';

@Component({
  tag: 'todays-menu',
  styleUrl: 'todays-menu.css',
  shadow: false,
})

export class TodaysMenu {
@State() Menu: Product[]=[];

@Event() selectedMenu: EventEmitter<Product>;

// Instancia la clase tipo Singleton MenuServices
private MenuService: MenuServices;
constructor() {
  this.MenuService = MenuServices.Instance;
}
getMenu() {
  try {
    this.MenuService
      .getMenu() //Hace referencia a la clase MenuServices
      .subscribe(data => {
        //.subscribe() es como un .then()
        this.Menu = data;
        console.log(this.Menu);
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
        {this.Menu.map((MENU) =>
          <div class="card mb-3" id="div-cards">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src={MENU.image} class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{MENU.description}</h5>
                  <p class="card-text">${MENU.price}</p>
                </div>
              </div>
              <button type="button" class="btn btn-primary" onClick={()=>this.handleSelectedMenu(MENU)}>Agregar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

}