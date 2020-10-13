import { Component, h } from '@stencil/core';

@Component({
  tag: 'plate-food',
  styleUrl: 'plate-food.css',
  shadow: true,
})
export class PlateFood {

  render() {
    return (
      <div class="div-container">
        <h1 class="tittle">CARTA AL PLATO</h1>
        <div class="first-div">
          <img src="./assets/icon/pollo.png" alt="pollo con papas" />
          <img src="./assets/icon/pizza.png" alt="pizza individual" />
        </div>
        <div class="second-div">
          <h4>POLLO CON PAPAS $200<input type="radio" class="radio"></input></h4>
          <h4>PIZZA INDIVIDUAL $160<input type="radio" class="radio"></input></h4>
        </div>
        <div class="third-div">
          <img src="./assets/icon/ensalada.png" alt="Ensalada Cesar" />
          <img src="./assets/icon/lassagna.png" alt="Lassagna" />
        </div>
        <div class="room-div">
          <h4>ENSALADA CESAR $180<input type="radio" class="radio"></input></h4>
          <h4>LASSAGNA $200<input type="radio" class="radio"></input></h4>
        </div>
      </div>
    );
  }
}
