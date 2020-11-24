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
  /* State que guarda la ORDEN 
  se instancia vacía (void) y luego se va llenando en la funcion de la linea 42
  a partir de todos los productos seleccionados por el usuario!*/

  @State() order: Order = Order.void();
  @State() total : number = 0; 

  //Evento que emite la orden para el componente finalize-purchase
  @Event() selectedSale: EventEmitter<Order>;
  
  componentWillLoad() {
    this.order;
  }

  updateOrder(){
    let description='';
  
    this.order.products.forEach(product=>{
      description += `${product.description}+`;
    });
    
    this.total = this.order.products.reduce((total,product)=>{
       return total += product.price;
    },0);

    this.order.total = this.total;
    this.order.description = description;
    this.order.hour = '13:30'; //harcodeado!
  }

  onUpdateOrders(event){
    this.order.products = [...this.order.products, event.detail]; // rest
    this.updateOrder();
  }

  // Eventos que escucha este componente!

  @Listen('selectedDrink', { target: 'document' })
  selectedDrink(event: CustomEvent<Product>) {
    this.onUpdateOrders(event);
  }
  @Listen('selectedSandwich', { target: 'document' })
  selectedSandwich(event: CustomEvent<Product>) {
    this.onUpdateOrders(event);
  }
  @Listen('selectedPlateFood', { target: 'document' })
  selectedPlateFood(event: CustomEvent<Product>) {
    this.onUpdateOrders(event);
  }
  @Listen('selectedMenu', { target: 'document' })
  selectedMenu(event: CustomEvent<Product>) {
    this.onUpdateOrders(event);
  }
  @Listen('selectedDessert', { target: 'document' })
  selectedDessert(event: CustomEvent<Product>) {
    this.onUpdateOrders(event);
  }

  //FUNCION QUE EMITE EL EVENTO ORDEN una vez clickeado el boton finalizar compra y la reinicia!
  handleNewSale() {
    this.selectedSale.emit(this.order);
    this.order = Order.void();
    this.total = 0;
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
