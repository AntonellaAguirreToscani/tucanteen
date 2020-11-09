import { Component, h, State, Event } from '@stencil/core';
import { EventEmitter } from '@stencil/router/dist/types/stencil.core';
import { Product } from '../../models.ts/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  tag: 'plate-food',
  styleUrl: 'plate-food.css',
  shadow: false,
})
export class PlateFood {
  //State donde se almacena el listado de comidas
  @State() platesFood: Product[] = [];
  
  @Event() selectedPlateFood : EventEmitter<Product>;
  // Instancia la clase tipo Singleton platefoodServices
  private productService: ProductService;
  constructor() {
    this.productService = ProductService.Instance;
  }
  //funcion que llena el listado de comidas con el mock (similar a una funcion ajax)
  getPlateFood() {
    try {
      this.productService
        .getProducts('/platos') //Hace referencia a la clase platefoodServices
        .then(response => response.json())
        .then(data=>{
          this.platesFood = data;
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  //ACA VA A IR LA API!
  componentWillLoad() {
    this.getPlateFood();
  }
  
  handleSelectedPlateFood(plateFood: Product) {
    this.selectedPlateFood.emit(plateFood);
  }
  
  render() {
    return (
      <div class="div-drinks">
        <h1 class="tittle">Carta - al plato</h1>
        <div class="div-container">
          {this.platesFood.map((plateFood) =>
            <div class="card mb-3" id="div-cards">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src={plateFood.image} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{plateFood.description}</h5>
                    <p class="card-text">${plateFood.price}</p>
                  </div>
                </div>
                <button type="button" class="btn btn-primary" onClick={()=>this.handleSelectedPlateFood(plateFood)}>Agregar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
