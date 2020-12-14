import { Component, h, State } from '@stencil/core';
import { Order } from '../../models.ts/order.model';
import { OrderService } from '../../services/order.services';
@Component({
  tag: 'sales-table',
  styleUrl: 'sales-table.css',
  shadow: false,
})
export class SalesTable {
  @State() sales: Order[] = [];
  @State() date1: Date;
  @State() date2: Date;

  private orderService: OrderService;
  constructor() {
    this.orderService = OrderService.Instance;
  }

  getSales() {
    try {
      this.orderService
        .getSales() //Hace referencia a la clase DrinkServices
        .then(response => response.json())
        .then(data => {
          this.sales = data;
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  componentWillLoad() {
    this.getSales();
    console.log(this.sales[0].date);
  }

  mapDate(date: Date): any {
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  }

  public datePipe(date: Date, format: string): string {
    switch (format) {
      case 'short':
        let dateString = date.toLocaleString().split("-");
        let day = dateString[2].toString().split("");
        return `${day.slice(0, 1)}/${dateString[1]}/${dateString[0]}`;
    }
  }

  handleDateOne(event) {
    this.date1 = event.target.value;
    console.log(this.date1);
  }
  handleDateTwo(event) {
    this.date2 = event.target.value;
  }

  searchByDates(){
    try {
      this.orderService
        .getByDates(this.date1,this.date2)
        .then(response => response.json())
        .then(data => {
          this.sales = data;
          console.log(this.sales);
        });
    } catch (error) {
      console.log(error.message);
    }
  }
  
  render() {
    return (
      <div>
        <h1 id="title">Ventas</h1>
        <div class="div-inputs">
          <input type="date" class="datePicker" onInput={event => this.handleDateOne(event)} />
          <input type="date" onInput={event => this.handleDateTwo(event)} />
          <button type="button" id="button" class="btn btn-light" onClick={()=> this.searchByDates()}>Aplicar</button>
        </div>
        <div class="container">
          <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
            <div class="col-sm-6" id="div"></div>
            <table id="table" class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {this.sales.map(sale => (
                  <tr>
                    <th scope="row">
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{sale.id}</label>
                      </div>
                    </th>
                    <td>{this.datePipe(sale.date, 'short')}</td>
                    <td>
                      {sale.products.map(product => {
                        return `${product.name} `;
                      })}
                    </td>
                    <td>${sale.total}</td>
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
