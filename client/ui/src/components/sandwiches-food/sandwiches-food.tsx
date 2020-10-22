import { Component, h } from '@stencil/core';

@Component({
  tag: 'sandwiches-food',
  styleUrl: 'sandwiches-food.css',
  shadow: false,
})
export class SandwichesFood {

  render() {
    return (
<div class="div-container">
        <h1 class="tittle">CARTA-SANWICHES</h1>
        <div class="first-div">
          <img src="./assets/icon/tostados.png" alt="Tostados" />
          <img src="./assets/icon/light.png" alt="Completo light" />
        </div>
        <div class="second-div">
          <h4>TOSTADO JYQ $100<input type="radio" class="radio"></input></h4>
          <h4>COMPLETO LIGHT $200<input type="radio" class="radio"></input></h4>
        </div>
        <div class="third-div">
          <img src="./assets/icon/completo.png" alt="Completo" />
          <img src="./assets/icon/medialuna.png" alt="Medialuna Completa" />
        </div>
        <div class="room-div">
          <h4>COMPLETO+PAPAS $200<input type="radio" class="radio"></input></h4>
          <h4>MEDIALUNA COMP $200<input type="radio" class="radio"></input></h4>
        </div>
      </div>
    );
  }

}
