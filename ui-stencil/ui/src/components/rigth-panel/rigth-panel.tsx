import { Component, EventEmitter, h, Listen, State, Event } from '@stencil/core';
import { Product } from '../../models.ts/product.model';
import { Order } from '../../models.ts/order.model';
// import { OrderService } from '../../services/order.services';
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
  @State() total: number = 0;
  @State() typeUser: string;
  @State() isAutenticated: any;
  @State() orders: Order[] = [];
  @State() now: Date = new Date();

  //Evento que emite la orden para el componente finalize-purchase
  @Event() selectedSale: EventEmitter<Order>;
  // private orderService: OrderService;

  // constructor() {
  //   this.orderService = OrderService.Instance;
  // }

  // getDrinks() {
  //   try {
  //     this.orderService
  //       .getPendingOrders()
  //       .then(response => response.json())
  //       .then(data=>{
  //         this.orders = data;
  //       });
  //       console.log(this.orders);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  componentWillLoad() {
    this.order;
    this.typeUser = localStorage.getItem('userType');
  }
  // componentDidUpdate() {
  //   this.typeUser = localStorage.getItem('userType');
  //   this.order.products;
  // }
  componentShouldUpdate() {
    this.order.products;
  }
  // componentDidUpdate() {
  //   this.typeUser = localStorage.getItem('userType');
  // }
  @Listen('logOut', { target: 'document' })
  logOut(event: CustomEvent<boolean>) {
    this.isAutenticated = event.detail;
    console.log(this.isAutenticated);
  }
  componenteShouldUpdate() {
    this.isAutenticated = localStorage.getItem('isAutenticated');
  }

  FunctionDeliveryTime(timeDelay): Date {
    let now: Date = new Date()
    // if (now.getMinutes() + timeDelay >= 60) {
      now.setMinutes(now.getMinutes() + timeDelay)
      // return `${now.getHours() + 1}:${ + timeDelay}:${now.getSeconds()}`
    // }
    // else {
    //   return `${now.getHours()}:${now.getMinutes() + timeDelay}:${now.getSeconds()}`;
    // }
    return now;
  }


  getDate(): any {
    let now: Date = new Date()
    return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  }

  updateOrder() {
    this.total = this.order.products.reduce((total, product) => {
      return (total += product.price);
    }, 0);

    this.order.date = new Date();
    this.order.orderTime = new Date();
    this.order.deliveryTime = this.FunctionDeliveryTime(20);
    this.order.total = this.total;
    this.order.state = 'pendiente';
    this.order.userId = parseInt(localStorage.getItem('id'));
    this.order.products;
  }

  onUpdateOrders(event) {
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
  // Listen que escucha al evento que emite el componete USER-LOGIN
  @Listen('authenticaUser', { target: 'document' })
  authenticaUser(event: CustomEvent<boolean>) {
    this.isAutenticated = event.detail;
    this.typeUser = localStorage.getItem('userType');
  }

  //FUNCION QUE EMITE EL EVENTO ORDEN una vez clickeado el boton finalizar compra y la reinicia!
  handleNewSale() {
    this.selectedSale.emit(this.order);
    this.order = Order.void();
    this.total = 0;
  }
  deleteProduct(id: number) {
    this.order.products.forEach((product, index) => {
      if (product.id == id) {
        console.log(product.id, index)
        this.order.products.splice(index, 1);
      }
    })
    this.updateOrder();
  }
  render() {
    if (this.typeUser != 'admin' || this.isAutenticated == false) {
      return (
        <aside class="sidebar">
          <div class="order">
            <h4>Tu orden</h4>
            {this.order.products.map(product => (
              <p>
                {product.name} {product.description} ${product.price}
                <a href="#link" class="btn btn-outline-info" role="button" onClick={() => this.deleteProduct(product.id)}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-archive-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"
                    />
                  </svg>
                </a>
              </p>
            ))}
          </div>
          <div class="totals-foot">
            <h4 id="total">Total: ${this.total}</h4>

            <stencil-route-link url="/compraFinalizada">
              <button class="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#my-modal" id="btn-finish" onClick={() => this.handleNewSale()}>
                Finalizar Compra
              </button>
            </stencil-route-link>
            <finalize-purchase id="my-modal"></finalize-purchase>
          </div>
        </aside>
      );
    }
  }
}
