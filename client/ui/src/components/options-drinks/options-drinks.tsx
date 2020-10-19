import { Component, h, State, Event ,EventEmitter} from '@stencil/core';
import { Drink } from '../../models.ts/drink.model';
import { DrinkServices } from '../../services/drink.services';

@Component({
  tag: 'options-drinks',
  styleUrl: 'options-drinks.css',
  shadow: false,
})
export class OptionsDrinks {
  //State donde se almacena el listado de bebidas
  @State() drinks : Drink[]=[];
 
  //No se está usando pero no quitar! Sirve para la funcion de la línea 43
  @Event() drinkSelected: EventEmitter<Drink>;
  selectedDrink : Drink;
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
  handleSelectedDrink(drink: Drink){
    this.drinkSelected.emit(drink); 
  }
  render() {
    return ( 
      <div>
        <h1>Carta - Bebidas</h1>
        {this.drinks.map((drink)=>
          <div class="card bg-dark text-white">
            <img src={drink.image} class="card-img" alt="..."/>
            <div class="card-img-overlay">
              <h5 class="card-title">{drink.description}</h5>
              <p class="card-text">{drink.price}</p>
            </div>
          </div>
        )}
      </div>
    );
  }

}
// importante!!! no descomentar!!! lo voy a usar despúes. onClick={drink => this.handleSelectedDrink(drink)}