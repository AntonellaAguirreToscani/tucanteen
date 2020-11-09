import { Component, h, Method, State } from '@stencil/core';
import { Order } from '../../models.ts/order.model';
import { OrderService } from '../../services/order.services';

@Component({
  tag: 'table-orders',
  styleUrl: 'table-orders.css',
  shadow: false,
})
export class TableOrders {
  @State() orders: Order[] = [];
  @State() orderNumber: number;
  @State() foundOrder : Order;
  @State() selected: number;

  private orderService: OrderService;
  constructor() {
    this.orderService = OrderService.Instance;
  }
  @Method()
  async getOrders() {
    try {
     await this.orderService.getOrders()
     .then(response => response.json())
     .then(data=>{
       this.orders = data;
     });
    } catch (error) {
      console.log(error.message,'respuesta');
    }
  }

  componentWillLoad() {
    this.getOrders();
  }

  @Method()
  async handleOrder(e) {
    e.preventDefault();
    try {
       if(this.foundOrder = this.orders.find(order => order.orderNumber == this.orderNumber)){
        this.orders = [this.foundOrder];
       }else{
         this.getOrders();      
        }
    } catch (error) {
      console.log(error.message);
    }
  }

  handleChange(event) {
    this.orderNumber = event.target.value;
  }
  handleClick(myRadio) {
    console.log(myRadio);
    alert('orden seleccionada: ' +  myRadio.value);
    this.selected = myRadio.value;
  }

  render() {
    return (
      <div>
      <h1 id="title">Pedidos del día</h1>
      <div  class="container" >
        
        <form class="form-inline d-flex justify-content-center md-form form-sm mt-0" onSubmit={e => this.handleOrder(e)}>
          <i class="fas fa-search" aria-hidden="true"></i>
          <div class="col-sm-6">
            <input
              class="form-control form-control-sm ml-3 w-75"
              type="number"
              value={this.orderNumber}
              onInput={event => this.handleChange(event)}
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
            <button type="button" class="btn btn-light">
              Cobrar
            </button>
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-warning">
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
              {this.orders.map((order)=> (
                <tr>
                  <th scope="row">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id={'order'+order.orderNumber.toString()}
                      onClick={e=> this.handleClick(e)} value={order.orderNumber}/>
                    <label class="form-check-label">{order.orderNumber}</label>
                  </div>
                  </th>
                  <td>{order.userName}</td>
                  <td>{order.description}</td>
                  <td>{order.hour}</td>
                  <td>${order.total}</td>
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
