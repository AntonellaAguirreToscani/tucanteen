import { Component, EventEmitter, h, Event, Method, State } from '@stencil/core';
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
  @State() orderNumber: number; //valor input search.
  @State() foundOrder: Order; //Se guarda la orden seleccionada por el input, para poder filtrar!
  @State() selected: Order;

  @Event() selectedPurchase: EventEmitter<Order>;

  private orderService: OrderService;
  constructor() {
    this.orderService = OrderService.Instance;
  }
  @Method()
  async getOrders() {
    try {
      await this.orderService
        .getPendingOrders()
        .then(response => response.json())
        .then(data => {
          this.orders = data;
        });
    } catch (error) {
      console.log(error.message, 'respuesta');
    }
  }

  componentWillLoad() {
    this.getOrders();
  }

  @Method()
  async handleOrder(e) {
    e.preventDefault();
    try {
      if ((this.foundOrder = this.orders.find(order => order.id == this.orderNumber))) {
        this.orders = [this.foundOrder];
      } else {
        this.getOrders();
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  handleChange(event) {
    this.orderNumber = event.target.value;
  }
  handleCheckout() {
    this.selectedPurchase.emit(this.selected);
    this.removeOrder();
  }
  buttonSelected(order: Order) {
    this.selected = order;
    console.log(this.selected);
  }
  //Borra la orden en el back-end y se vuelve a cargar el listado de ordenes para q se actualicen los cambios.
  removeOrder() {
    this.orderService.deleteOrder(this.selected.id);
    this.componentWillLoad();
  }

  render() {
    return (
      <div>
        <h1 id="title">Pedidos del día</h1>
        <div class="container">
          <form class="form-inline d-flex justify-content-center md-form form-sm mt-0" onSubmit={e => this.handleOrder(e)}>
            
            <div class="container">
            <div class="col-sm-6">
              <input class="form-control form-control-sm ml-3 w-75" type="number" onInput={event => this.handleChange(event)} placeholder="Search" aria-label="Search"><i class="fas fa-search" aria-hidden="true"></i></input>
            </div>
            <div class="col-sm-2">
              <button type="submit" class="btn btn-light">
                Buscar
              </button>
            </div>
            <div class="col-sm-2">
              <stencil-route-link url="/ordenACobrar">
                <button type="button" class="btn btn-light" onClick={() => this.handleCheckout()} data-toggle="modal" data-target="#my-modal">
                  Cobrar
                </button>
              </stencil-route-link>
              <admin-order id="my-modal"></admin-order>
            </div>
            <div class="col-sm-2">
              <button type="button" class="btn btn-warning" onClick={() => this.removeOrder()}>
                Quitar
              </button>
            </div>
            </div>

            <table id="table" class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Horario</th>
                  <th scope="col">Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.orders.map(order => (
                  <tr>
                    <th scope="row">
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{order.id}</label>
                      </div>
                    </th>
                    <td>{order.userId}</td>
                    {/* Description */}
                    <td>
                      {order.products.map(product => {
                        return `${product.name} ${product.description} `;
                      })}
                    </td>

                    <td>{order.deliveryTime}</td>
                    <td>${order.total} </td>
                    <td>
                      <button type="button" class="btn btn-primary btn-sm" onClick={() => this.buttonSelected(order)}>
                        Seleccionar
                      </button>
                    </td>
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
