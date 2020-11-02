import { Component, h, State} from '@stencil/core';
import { Menu } from '../../models.ts/menu.model';
import { MenuServices } from '../../services/menu.services';

@Component({
  tag: 'todays-menu',
  styleUrl: 'todays-menu.css',
  shadow: false,
})

export class TodaysMenu {
@State() Menu: Menu[]=[];

// @Event() MenuSelected: EventEmitter<Menu>;
// selectedMenu: Menu;
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

 // NO SE USA TODAVIA! Se va a utilizar en el panel derecho para escuchar este evento por su ID!
//  handleSelectedMenu(Menu: Menu) {
//   this.MenuSelected.emit(Menu);
// }
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

}