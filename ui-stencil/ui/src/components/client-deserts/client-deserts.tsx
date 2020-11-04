import { Component, h, State, Event } from '@stencil/core';
import { EventEmitter } from '@stencil/router/dist/types/stencil.core';
import { Product } from '../../models.ts/product.model';
import { Dessertsservices } from '../../services/desserts.services';

@Component({
  tag: 'client-deserts',
  styleUrl: 'client-deserts.css',
  shadow: false,
})
export class ClientDeserts {
  @State() desserts: Product[] = [];

   @Event() selectedDessert: EventEmitter<Product>;

  private Desserts: Dessertsservices;
  constructor() {
    this.Desserts = Dessertsservices.Instance;
  }

  getDesserts() {
    try {
      this.Desserts
        .getDesserts()
        .subscribe(data => {
          this.desserts = data;
          console.log(this.desserts);
        });
    } catch (error) {
      console.log(error.message);
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
      <div class="div-container">
        {this.desserts.map((DESSERTS) =>
          <div class="card mb-3" id="div-cards">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src={DESSERTS.image} class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{DESSERTS.description}</h5>
                  <p class="card-text">${DESSERTS.price}</p>
                </div>
              </div>
              <button type="button" class="btn btn-primary" onClick={()=>this.handleSelectedDessert(DESSERTS)}>Agregar</button>
            </div>
          </div>
        )}
      </div>
    </div>
    )
  }
}
