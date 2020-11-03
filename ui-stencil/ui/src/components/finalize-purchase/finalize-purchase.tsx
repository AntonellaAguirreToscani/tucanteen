import { Component, h, Listen, Prop, State } from '@stencil/core';
import { Order } from '../../models.ts/order.model';

@Component({
  tag: 'finalize-purchase',
  styleUrl: 'finalize-purchase.css',
  shadow: false,
})
export class FinalizePurchase {
  
  @Prop() id:string;
  @State() order : Order = Order.void();
  
  @Listen('selectedSale', { target: 'document' })
  selectedSale(event: CustomEvent<Order>) {
    this.order = event.detail;
  }

  render() {
    return (
      <div class="modal" id={this.id} tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Usted a finalizado su compra</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
               {this.order.products.map(product=>
                <li>{product.description} -  ${product.price}</li>
                )}
                <h5>Total a abonar: $ {this.order.total}</h5>
              <p>Horario de retiro:  {this.order.hour}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Finalizar</button>
            </div>
          </div>
        </div>
      </div>);
  }

}
