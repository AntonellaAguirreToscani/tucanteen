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
          <img src="./assets/icon/foto1.jpg" alt="" />
          <img src="./assets/icon/foto2.jpg" alt="" />
        </div>
        <div class="two-div">
          <h5>muffin c/nueces $180</h5>
          <h5>bocha de helado $90</h5>
        </div>
        <div class="three-div">
          <img src="./assets/icon/foto3.jpg" alt="" />
          <img src="./assets/icon/foto4.jpg" alt="" />
        </div>
        <div class="four-div">
          <h5>tarta frutos r $200</h5>
          <h5>tarta chocolate $160</h5>

        </div>

      </div>

    )
  }
}
