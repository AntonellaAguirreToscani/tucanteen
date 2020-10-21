import { Component, h, State, Event, EventEmitter } from '@stencil/core';

import { Sandwiches, } from '../../models.ts/sandwiches.model';
import {SandwichesServices } from '../../services/sandwich.service';

@Component({
  tag: 'sandwiches-food',
  styleUrl: 'sandwiches-food.css',
  shadow: true,
})
export class OptionsSandwiches {
  //State donde se almacena el listado de sandwiches
  @State() Sandwiches: Sandwiches[] = [];

//No se está usando pero no quitar! Sirve para la funcion de la línea 43
@Event() SandwichesSelected: EventEmitter<Sandwiches>;
selectedDrink:  Sandwiches;
// Instancia la clase tipo Singleton DrinkServices
private drinkService: SandwichesServices;
constructor() {
  this.drinkService = SandwichesServices.Instance;
}
//funcion que llena el listado de bebidas con el mock (similar a una funcion ajax)
getDrinks() {
  try {
    this.drinkService
      .getDrinks() //Hace referencia a la clase DrinkServices
      .subscribe(data => {
        //.subscribe() es como un .then()
        this.Sandwiches = data;
        console.log(this.Sandwiches);
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
handleSelectedSandwiches(Sandwiches:Sandwiches) {
  this.SandwichesSelected.emit(Sandwiches);
}

  render() {
    return (
      <div class="div-sandwiches">
      <h1 class="tittle">Carta - sandwiches</h1>
      <div class="div-container">
        {this.Sandwiches.map((SANDWICHES) =>
          <div class="card mb-3" id="div-cards">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src={SANDWICHES.image} class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{SANDWICHES.description}</h5>
                  <p class="card-text">${SANDWICHES.price}</p>
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
