import { Component, h } from '@stencil/core';
// import { FinalizePurchase } from '../finalize-purchase/finalize-purchase';
@Component({
  tag: 'rigth-panel',
  styleUrl: 'rigth-panel.css',
  shadow: false,
})
export class RigthPanel {

  render() {
    return (
      <aside class="sidebar">
        <div class="order"  >
          <h4>Tu orden</h4>
          <ul id="orders">
            <li>Desayuno 70$</li>
            <li>Bebida   30$</li>
          </ul>
        </div>
        <div class="totals-foot">
          <h4 id="total"> Total: $ 100</h4>
          <stencil-route-link url="/compraFinalizada">
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#my-modal" id="btn-finish">Finalizar Compra</button>
          </stencil-route-link>
          <finalize-purchase id="my-modal"></finalize-purchase>
        </div>
      </aside>
    )
  }
}
