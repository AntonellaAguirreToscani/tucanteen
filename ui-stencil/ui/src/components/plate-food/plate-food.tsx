import { Component, h, State, } from '@stencil/core';
import {Plate } from '../../models.ts/plate-food.models';
 import { PlateFoodServices} from '../../services/plate-food.services.ts';

@Component({
  tag: 'plate-food',
  styleUrl: 'plate-food.css',
  shadow: false,
})
export class PlateFood {
  //State donde se almacena el listado de comidas
  @State() PlateFood: Plate[];

  
  // Instancia la clase tipo Singleton platefoodServices
  private PlateFoodService: PlateFoodServices;
  constructor() {
    this.PlateFoodService = PlateFoodServices.Instance;
  }
  //funcion que llena el listado de comidas con el mock (similar a una funcion ajax)
  getPlateFood() {
    try {
      this.PlateFoodService
        .getPlateFood() //Hace referencia a la clase platefoodServices
        .subscribe(data => {
        
          this.PlateFood = data;
          console.log(this.PlateFood);
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  //ACA VA A IR LA API!
  componentWillLoad() {
    this.getPlateFood();
  }
  
  
  render() {
    return (
      <div class="div-drinks">
        <h1 class="tittle">Carta - al plato</h1>
        <div class="div-container">
          {this.PlateFood.map((PlateFood) =>
            <div class="card mb-3" id="div-cards">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src={PlateFood.image} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{PlateFood.description}</h5>
                    <p class="card-text">${PlateFood.price}</p>
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
