import { Component, h } from '@stencil/core';

@Component({
  tag: 'rigth-panel',
  styleUrl: 'rigth-panel.css',
  shadow: false,
})
export class RigthPanel {

  render() {
    return (
      <div class="container">
        <h4 id="your-order">Tu orden</h4>
        <div id="orders"></div>
        <div id="total"> Total: $ 100</div>
        <button type="button" class="btn btn-secondary btn-lg" id="btn-finish">Finalizar Compra</button>
      </div>
    )
  }

}
