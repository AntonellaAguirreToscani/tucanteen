import { Component, h, Listen, Prop, State } from '@stencil/core';
import { Order } from '../../models.ts/order.model';
import { OrderService } from '../../services/order.services';

@Component({
  tag: 'finalize-purchase',
  styleUrl: 'finalize-purchase.css',
  shadow: false,
})
export class FinalizePurchase {
  
  @Prop() id:string;
  @State() order : Order = Order.void();
  
  private orderService : OrderService;
  constructor(){
    this.orderService = OrderService.Instance;
  }

  @Listen('selectedSale', { target: 'document' })
  selectedSale(event: CustomEvent<Order>) {
    this.order = event.detail;
  }

  async postOrder(){
    this.orderService.postOrder(this.order);
    console.log(this.order);
  }

  render() {
    return (
      <div class="modal" id={this.id} tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Usted ha finalizado su compra <i class='fas fa-check-circle'></i></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
               {this.order.products.map(product=>
                <li>{product.name} - {product.description} : ${product.price}</li>
                )}
                <h5>Total a abonar: $ {this.order.total}</h5>
              <p>Horario de retiro:  {`${this.order.deliveryTime.getHours()}:${this.order.deliveryTime.getMinutes()} hs`}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-info" data-dismiss="modal" onClick={()=>this.postOrder()}>Confirmar Pedido</button>
            </div>
          </div>
        </div>
      </div>);
  }

}
