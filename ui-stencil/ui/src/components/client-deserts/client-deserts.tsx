import { Component, h, State, Event, Method } from '@stencil/core';
import { EventEmitter } from '@stencil/router/dist/types/stencil.core';
import { Product } from '../../models.ts/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  tag: 'client-deserts',
  styleUrl: 'client-deserts.css',
  shadow: false,
})
export class ClientDeserts {
  @State() desserts: Product[] = [];

   @Event() selectedDessert: EventEmitter<Product>;

  private Desserts: ProductService;
  constructor() {
    this.Desserts = ProductService.Instance;
  }
  
  @Method()
  async getDesserts() {
    try {
     await this.Desserts.getProducts('/5') //tipo de producto 5 en BD
        .then(response => response.json())
        .then(data=>{
          this.desserts = data;
          console.log(this.desserts);
        });
    } catch (error) {
      console.log(error.message,'respuesta');
    }
  }

  componentWillLoad() {
    this.getDesserts();
  }

  handleSelectedDessert(dessert: Product) {
    this.selectedDessert.emit(dessert)
  }

  render() {
    return (
      <div class="div-desserts">
      <h1 class="tittle">Carta - postres</h1>
      <div class="container">
        {this.desserts.map((DESSERTS) =>
          <div class="card mb-6 col-sm-5 text-center" id="div-cards">
            <div id="div-row" class="row no-gutters">
              <div class="col-md-6">
                <img src={DESSERTS.image} class="card-img" alt="..." />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <p class="card-title text-md-6">{DESSERTS.name} {DESSERTS.description}</p>
                  <p class="card-text">${DESSERTS.price}</p>
                </div>
              </div>
              <div class="text-center">
              <button type="button" class="btn btn-primary" onClick={()=>this.handleSelectedDessert(DESSERTS)}>Agregar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    )
  }
}
