import { Component, h, State, Event } from '@stencil/core';
import { EventEmitter } from '@stencil/router/dist/types/stencil.core';
// import { DESSERTS } from '../../mocks/client-deserts';
import { desserts } from '../../models.ts/desserts.model'
import { Dessertsservices } from '../../services/desserts.services';

@Component({
  tag: 'client-deserts',
  styleUrl: 'client-deserts.css',
  shadow: false,
})
export class ClientDeserts {
  @State() desserts: desserts[] = [];

  @Event() dessertsSelected: EventEmitter<desserts>;
  selectedDesserts: desserts;

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
  handleSelectedDrink(desserts: desserts) {
    this.dessertsSelected.emit(desserts);
  
  }
  render() {
    return (
      // <div class="div-container">
      //   <h1 class="titulo">carta-postres</h1>
      //   <div class="one-div">
      //     <img src="./assets/icon/food/muffin.jpg" alt="..." />
      //     <img src="./assets/icon/food/bochahelado.png" alt="..." />
      //   </div>
      //   <div class="two-div">
      //     <h5>muffin c/nueces $180  </h5>
      //     <h5>bocha de helado $90  </h5>
      //   </div>
      //   <div class="three-div">
      //     <img src="./assets/icon/food/tartafrutos.jpg" alt="..." />
      //     <img src="./assets/icon/food/tartachoco.jpg" alt="..." />
      //   </div>
      //   <div class="four-div">
      //     <h5>tarta frutos r $200  </h5>
      //     <h5>tarta chocolate $160 </h5>

      //   </div>

      // </div>
      <div>
        <h1>Carta - postres</h1>
        {this.desserts.map((desserts) =>
          <div class="card bg-dark text-white">
            <img src={desserts.image} class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="algo va">{desserts.description}</h5>
              <p class="card-text">{desserts.price}</p>
            </div>
          </div>
        )}
      </div>

    )
  }
}
