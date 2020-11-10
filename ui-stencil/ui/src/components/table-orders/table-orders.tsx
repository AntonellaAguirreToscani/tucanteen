import { Component, EventEmitter, h, Event, Method, State} from '@stencil/core';
// import { event } from 'jquery';
import { Order } from '../../models.ts/order.model';
import { OrderService } from '../../services/order.services';

@Component({
  tag: 'table-orders',
  styleUrl: 'table-orders.css',
  shadow: false,
})
export class TableOrders {
  @State() orders: Order[] = [];
  @State() selected: Order;

  @Event() selectedPurchase: EventEmitter<Order>

  private orderService: OrderService;
  constructor() {
    this.orderService = OrderService.Instance;
  }

  getOrders() {
    try {
      this.orderService.getOrders().subscribe(data => {
        this.orders = data;
        console.log(this.orders);
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  componentWillLoad() {
    this.getOrders();
  }

  @Method()
  async handleOrder(e) {
    e.preventDefault();
  }

  // handleChange(event) {
  //   this.orderNumber = event.target.value;
  // }
  handleCheckout(){
    this.selectedPurchase.emit(this.selected);
  }
  buttonSelected(order: Order) {
    this.selected = order;
    console.log(this.selected);
  }

  removeOrder(){
    this.orders.forEach((order, index) => {
      if(this.selected.orderNumber == order.orderNumber)
        this.orders.splice(index,1);
    });
    console.log(this.orders);
  }

  render() {
    return (
      <div>
        <h1 id="title">Pedidos del día</h1>
        <div class="container" >

          <form class="form-inline d-flex justify-content-center md-form form-sm mt-0" onSubmit={e => this.handleOrder(e)}>
            <i class="fas fa-search" aria-hidden="true"></i>
            <div class="col-sm-6">
              <input
                class="form-control form-control-sm ml-3 w-75"
                type="number"
                // onInput={event => this.handleChange(event)}
                placeholder="Search"
                aria-label="Search"
              ></input>
            </div>
            <div class="col-sm-2">
              <button type="submit" class="btn btn-light">
                Buscar
            </button>
            </div>
            <div class="col-sm-2">
              <stencil-route-link url="/ordenACobrar">
              <button type="button" class="btn btn-light" onClick={()=> this.handleCheckout()} data-toggle="modal" data-target="#my-modal">
                Cobrar
            </button>
            </stencil-route-link>
            <admin-order id="my-modal"></admin-order>
            </div>
            <div class="col-sm-2">
              <button type="button" class="btn btn-warning" onClick={()=> this.removeOrder()}>
                Quitar
            </button>
            </div>

            <table id="table" class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Horario</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {this.orders.map((order) => (
                  <tr>
                    <th scope="row">
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{order.orderNumber}</label>
                      </div>
                    </th>
                    <td>{order.userName}</td>
                    <td>{order.description}</td>
                    <td>{order.hour}</td>
                    <td>${order.total} <button type="button" class="btn btn-primary btn-sm" onClick={() => this.buttonSelected(order)}>Seleccionar</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
