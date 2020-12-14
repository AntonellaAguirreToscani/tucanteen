import { Component, h, Listen, Prop, State} from '@stencil/core';
import { Order } from '../../models.ts/order.model';
import { OrderService } from '../../services/order.services';

@Component({
  tag: 'admin-order',
  styleUrl: 'admin-order.css',
  shadow: false,
})
export class AdminOrder {
  @Prop() id: string;
  @State() order: Order = Order.void();

  private orderService: OrderService;
  constructor(){
    this.orderService = OrderService.Instance;
  }
  
  @Listen('selectedPurchase', { target: 'document' })
  selectedSale(event: CustomEvent<Order>) {
    this.order = event.detail;
  }

  handleCheckoutSale(){
    this.orderService.changeOrderStatus(this.order.id);
  }

  render() {
    return (
      <div class="modal" id={this.id} tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"> Orden numero: {this.order.id} </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>{this.order.state}</p>
              <p>Total:$ {this.order.total}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>

              <button type="button" class="btn btn-primary" onClick={()=> this.handleCheckoutSale()} data-dismiss="modal">Confirmar Compra</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
