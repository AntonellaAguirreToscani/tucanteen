import { Component, h, Prop } from '@stencil/core';
import { injectHistory, RouterHistory } from '@stencil/router';
import { Order } from '../../models.ts/order.model';
import { OrderService } from '../../services/order.services';

@Component({
  tag: 'finalize-purchase',
  styleUrl: 'finalize-purchase.css',
  shadow: false,
})
export class FinalizePurchase {
  
  @Prop() order : Order;
  
 //Navigation
  @Prop() history: RouterHistory;
  
  private orderService : OrderService;
  constructor(){
    this.orderService = OrderService.Instance;
  }

  async postOrder(){
    this.orderService.postOrder(this.order);
    this.thankYou();
    console.log(this.order);
  }

  close() {
    this.history.push("/menu-dia", {});
  }
  thankYou() {
    this.history.push("/thank-you", {});
  }

  render() {
    return (
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
          <div class="modal-header">
          <h5 class="modal-title">Usted ha finalizado su compra <i class='fas fa-check-circle'></i></h5>
            <button class="close" data-dismiss="modal" aria-label="cerrar" onClick={() => this.close()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          </div>
          <div>
               {this.order.products.map(product=>
                <li>{product.name} - {product.description} : ${product.price}</li>
                 )}
                <h5>Total a abonar: $ {this.order.total}</h5>
               <p>Horario de retiro:  {`${this.order.deliveryTime.getHours()}:${this.order.deliveryTime.getMinutes()} hs`}</p>
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-secondary" onClick={() => this.close()}>Cancelar</button>
               <button type="button" class="btn btn-info" onClick={()=>this.postOrder()}>Confirmar Pedido</button>
             </div>
        </div>
      </div>)
      // <div class="modal" id={this.id} tabindex="-1">
      //   <div class="modal-dialog">
      //     <div class="modal-content">
      //       <div class="modal-header">
      //         <h5 class="modal-title">Usted ha finalizado su compra <i class='fas fa-check-circle'></i></h5>
      //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      //           <span aria-hidden="true">&times;</span>
      //         </button>
      //       </div>
      //       <div class="modal-body">
      //          {this.order.products.map(product=>
      //           <li>{product.name} - {product.description} : ${product.price}</li>
      //           )}
      //           <h5>Total a abonar: $ {this.order.total}</h5>
      //         <p>Horario de retiro:  {`${this.order.deliveryTime.getHours()}:${this.order.deliveryTime.getMinutes()} hs`}</p>
      //       </div>
      //       <div class="modal-footer">
      //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
      //         <button type="button" class="btn btn-info" data-dismiss="modal" onClick={()=>this.postOrder()}>Confirmar Pedido</button>
      //       </div>
      //     </div>
      //   </div>
      // </div>);
  }

}
injectHistory(FinalizePurchase);
