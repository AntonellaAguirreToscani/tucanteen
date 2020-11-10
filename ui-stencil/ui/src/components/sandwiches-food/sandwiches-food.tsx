import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { Product } from '../../models.ts/product.model';
import { SandwichesServices } from '../../services/sandwich.service';

@Component({
  tag: 'sandwiches-food',
  styleUrl: 'sandwiches-food.css',
  shadow: false,
})
export class OptionsSandwiches {
  //State donde se almacena el listado de sandwiches
  @State() Sandwiches: Product[] = [];

  @Event() selectedSandwich: EventEmitter<Product>;

  // Instancia la clase tipo Singleton DrinkServices
  private drinkService: SandwichesServices;
  constructor() {
    this.drinkService = SandwichesServices.Instance;
  }
  //funcion que llena el listado de bebidas con el mock (similar a una funcion ajax)
  getSandwiches() {
    try {
      this.drinkService
        .getSandwiches() //Hace referencia a la clase DrinkServices
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
    this.getSandwiches();
  }

  // emite el evento para ser escuchado en el panel derecho (ordenes)

  handleSelectedSandwich(sandwich: Product) {
    this.selectedSandwich.emit(sandwich);
  }

  render() {
    return (
      <div class="div-sandwiches">
        <h1 class="tittle">Carta - sandwiches</h1>
        <div class="div-container">
          {this.Sandwiches.map(SANDWICHES => (
            <div class="card mb-3 col-sm-5" id="div-cards">
              <div class="row no-gutters">
                <div class="col-md-6">
                  <img src={SANDWICHES.image} class="card-img" alt="..." />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title">{SANDWICHES.description}</h5>
                    <p class="card-text">${SANDWICHES.price}</p>
                  </div>
                </div>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleSelectedSandwich(SANDWICHES)}>Agregar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
