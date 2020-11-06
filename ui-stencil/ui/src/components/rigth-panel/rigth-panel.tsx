import { Component, EventEmitter, h, Listen, State, Event } from '@stencil/core';
import {Product } from '../../models.ts/product.model';
import { Order } from '../../models.ts/order.model';
// import { FinalizePurchase } from '../finalize-purchase/finalize-purchase';
@Component({
  tag: 'rigth-panel',
  styleUrl: 'rigth-panel.css',
  shadow: false,
})
export class RigthPanel {
  @State() order: Order = Order.void();
  @State() total : number = 0;

  @Event() selectedSale: EventEmitter<Order>;
  
  componentWillLoad() {
    this.order;
  }

  onUpdateOrders(event){
    this.order.products = [...this.order.products, event.detail]; // rest.
    // reduce que se utiliza para poder actualizar el total a medida que se van ingresando ordenes
    this.total = this.order.products.reduce((total,order)=>{
       return total += order.price;
    },0);
    this.order.total = this.total;
    this.order.hour = '13:30'; //acá se está definiendo el horario, la idea sería crear un algoritmo q determine el horario.
  }

  @Listen('selectedDrink', { target: 'document' })
  selectedDrink(event: CustomEvent<Product>) {
    this.onUpdateOrders(event);
  }
  @Listen('selectedSandwich', { target: 'document' })
  selectedSandwich(event: CustomEvent<Product>) {
    this.onUpdateOrders(event);
  }

  handleNewSale() {
    this.selectedSale.emit(this.order);
  }
  render() {
    return (
      <aside class="sidebar">
        <div class="order">
          <h4>Tu orden</h4>
          {this.order.products.map(product=>
            <p>{product.description} ${product.price}</p>
          )}
        </div>
        <div class="totals-foot">
          <h4 id="total">Total: ${this.total}</h4>
          
          <stencil-route-link url="/compraFinalizada">
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#my-modal" id="btn-finish" onClick={()=>this.handleNewSale()}>
              Finalizar Compra
            </button>
          </stencil-route-link>
          <finalize-purchase id="my-modal"></finalize-purchase>
        </div>
      </aside>
    );
  }
}
