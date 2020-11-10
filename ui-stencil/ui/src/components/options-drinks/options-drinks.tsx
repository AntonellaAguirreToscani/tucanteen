import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { Product } from '../../models.ts/product.model';
import { DrinkServices } from '../../services/drink.services';

@Component({
  tag: 'options-drinks',
  styleUrl: 'options-drinks.css',
  shadow: false,
})
export class OptionsDrinks {
  //State donde se almacena el listado de bebidas
  @State() drinks: Product[] = [];

  @Event() selectedDrink: EventEmitter<Product>;

  // Instancia la clase tipo Singleton DrinkServices
  private drinkService: DrinkServices;
  constructor() {
    this.drinkService = DrinkServices.Instance;
  }
  //funcion que llena el listado de bebidas con el mock (similar a una funcion ajax)
  getDrinks() {
    try {
      this.drinkService
        .getDrinks() //Hace referencia a la clase DrinkServices
        .subscribe(data => {
          //.subscribe() es como un .then()
          this.drinks = data;
          console.log(this.drinks);
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  //EL SIGUIENTE METODO PERTENECE AL CICLO DE VIDA DEL COMPONENTE
  //ACA VA A IR LA API!
  componentWillLoad() {
    this.getDrinks();
  }
  // NO SE USA TODAVIA! Se va a utilizar en el panel derecho para escuchar este evento por su ID!
  handleSelectedDrink(drink: Product) {
    this.selectedDrink.emit(drink);
  }
  render() {
    return (
      <div class="div-drinks">
        <h1 class="tittle">Carta - Bebidas</h1>
        <div class="container">
          {this.drinks.map((drink) =>
            <div class="card mb-6 col-sm-5 text-center" id="div-cards">
              <div id="div-row" class="row no-gutters">
                <div class="col-md-6">
                  <img src={drink.image} class="card-img" alt="..." />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-text text-md-6">{drink.description}</h5>
                    <p class="card-text">${drink.price}</p>
                  </div>
                </div>
                <div class="text-center">
                  <button type="button" id="button" class="btn btn-primary" onClick={() => this.handleSelectedDrink(drink)}>Agregar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

}
// importante!!! no descomentar!!! lo voy a usar despúes. onClick={drink => this.handleSelectedDrink(drink)}