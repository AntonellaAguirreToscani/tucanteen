import { Component, h } from '@stencil/core';

@Component({
  tag: 'client-deserts',
  styleUrl: 'client-deserts.css',
  shadow: false,
})
export class ClientDeserts {

  render() {
    return (
      <div class="div-container">
        <h1 class="titulo">carta-postres</h1>
        <div class="one-div">
          <img src="./assets/icon/food/muffin.jpg" alt="" />
          <img src="./assets/icon/food/bochahelado.png" alt="" />
        </div>
        <div class="two-div">
          <h5>muffin c/nueces $180 <input type="radio" class="radio"/> </h5>
          <h5>bocha de helado $90 <input type="radio" class="radop"/> </h5>
        </div>
        <div class="three-div">
          <img src="./assets/icon/food/tartafrutos.jpg" alt="" />
          <img src="./assets/icon/food/tartachoco.jpg" alt="" />
        </div>
        <div class="four-div">
          <h5>tarta frutos r $200 <input type="radio"class="radio"/> </h5>
          <h5>tarta chocolate $160<input type= "radio"class="radio"></input> </h5>

        </div>
       
      </div>

    )
  }
}
