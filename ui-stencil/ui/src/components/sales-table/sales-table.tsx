import { Component, h, Listen, State } from '@stencil/core';
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
  @State() total : number;

 // PARA EL PAGINATOR
  page: number = 0;
  @State() itemCount = 0;
  @State() pageSize: number = 5;

  private orderService: OrderService;
  constructor() {
    this.orderService = OrderService.Instance;
  }

  @Listen('pageChanged')
  handleSelected(event: CustomEvent) {
    this.page = event.detail;
    this.getSales();
  }

  @Listen('sizeChanged')
  handleSizeChanged(event: CustomEvent) {
    this.page = 0;
    this.pageSize = event.detail;
    this.getSales();
  }

  @Listen('pageChanged')
  handleSelectedByDates(event: CustomEvent) {
    this.page = event.detail;
    this.searchByDates();
  }

  @Listen('sizeChanged')
  handleSizeChangedByDates(event: CustomEvent) {
    this.page = 0;
    this.pageSize = event.detail;
    this.searchByDates();
  }

  getSales() {
    const start = this.page * this.pageSize;
     const end = this.page * this.pageSize + this.pageSize;
    try {
      this.orderService
        .getSales() //Hace referencia a la clase DrinkServices
        .then(response => response.json())
        .then(data => {
          this.sales = data;
          this.total = this.getTotal(this.sales);
          this.itemCount = this.sales.length;
          this.sales = data.slice(start, end);
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  componentWillLoad() {
    this.getSales();
    this.total;
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
        return ` ${day[0]}${day[1]}/${dateString[1]}/${dateString[0]}`;
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
    const start = this.page * this.pageSize;
     const end = this.page * this.pageSize + this.pageSize;
    try {
      this.orderService
        .getByDates(this.date1,this.date2)
        .then(response => response.json())
        .then(data => {
          this.sales = data;
          this.total = this.getTotal(this.sales);
          this.itemCount = this.sales.length;
          this.sales = data.slice(start, end);
        });
    } catch (error) {
      console.log(error.message);
    }
  }
  
  getTotal(arrayOrders: Order[]): number{
    return arrayOrders.reduce((total, order) => {
      return (total += order.total);
    }, 0);
  }
  render() {
    if(this.sales){
    return (
      <div>
        <h1 id="title">Ventas</h1>
        <div class="div-inputs">
          <input type="date" class="datePicker" onInput={event => this.handleDateOne(event)} />
          <input type="date" onInput={event => this.handleDateTwo(event)} />
          <button type="button" id="button" class="btn btn-light" onClick={()=> this.searchByDates()}>Aplicar</button>
          <h4 id="total-sales">Total Ventas: $ {this.total} </h4>
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
                    <td>{this.datePipe(sale.date,'short')}</td>
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
        <div id="paginator" class="container">
            <div class="col-md-9">
              <cdn-paginator page={this.page} pageSize={this.pageSize} itemCount={this.itemCount}></cdn-paginator>
            </div>
          </div>
      </div>
    );
  }
}
}
