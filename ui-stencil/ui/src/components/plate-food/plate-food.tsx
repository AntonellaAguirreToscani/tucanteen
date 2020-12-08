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
        .getProducts('/2') //tipo de producto 2 = platos en BD!
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
        <div class="container">
          {this.platesFood.map((plateFood) =>
            <div class="card mb-6 col-sm-5 text-center" id="div-cards">
              <div id="div-row" class="row no-gutters">
                <div class="col-md-6">
                  <img src={plateFood.image} class="card-img" alt="..." />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <p class="card-title text-md-6">{plateFood.name} {plateFood.description}</p>
                    <p class="card-text">${plateFood.price}</p>
                  </div>
                </div>
                <div class="text-center">
                <button type="button" class="btn btn-outline-info" onClick={()=>this.handleSelectedPlateFood(plateFood)}>Agregar <i class="fa fa-shopping-cart"></i></button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
