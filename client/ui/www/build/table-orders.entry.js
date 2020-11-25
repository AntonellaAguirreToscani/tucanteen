import { r as registerInstance, h } from './index-06e892ec.js';
import { o as of } from './index-56ea03f0.js';

const ORDERS = [
  { orderNumber: 1, userName: 'Debora2020', description: 'Hamburguesa Completa + mirinda', hour: '13:30 hs', total: 250 },
  { orderNumber: 2, userName: 'berniL', description: 'Sandwich jyq + limonada', hour: '13:40 hs', total: 150 },
  { orderNumber: 3, userName: 'nestorLuiss', description: 'Ensalada + agua', hour: '13:45 hs', total: 350 },
  { orderNumber: 4, userName: 'antoAT', description: 'Lasagna + coca', hour: '13:50 hs', total: 250 }
];

class OrderService {
  getOrders() {
    return of(ORDERS);
  }
  //Utiliza el patron Singleton. Se intancia una única vez!
  static get Instance() {
    return this._instance || (this._instance = new this());
  }
}

const tableOrdersCss = ".container{display:flex;justify-content:flex-end}#title{text-align:center}#table{margin-top:2%;margin-left:5%}";

const TableOrders = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.orders = [];
    this.orderService = OrderService.Instance;
  }
  getOrders() {
    try {
      this.orderService.getOrders().subscribe(data => {
        this.orders = data;
        console.log(this.orders);
      });
    }
    catch (error) {
      console.log(error.message);
    }
  }
  componentWillLoad() {
    this.getOrders();
  }
  async handleOrder(e) {
    e.preventDefault();
    try {
      if (this.foundOrder = this.orders.find(order => order.orderNumber == this.orderNumber)) {
        this.orders = [this.foundOrder];
      }
      else {
        this.getOrders();
      }
    }
    catch (error) {
      console.log(error.message);
    }
  }
  handleChange(event) {
    this.orderNumber = event.target.value;
  }
  handleClick(myRadio) {
    console.log(myRadio);
    alert('orden seleccionada: ' + myRadio.value);
    this.selected = myRadio.value;
  }
  render() {
    return (h("div", null, h("h1", { id: "title" }, "Pedidos del d\u00EDa"), h("div", { class: "container" }, h("form", { class: "form-inline d-flex justify-content-center md-form form-sm mt-0", onSubmit: e => this.handleOrder(e) }, h("i", { class: "fas fa-search", "aria-hidden": "true" }), h("div", { class: "col-sm-6" }, h("input", { class: "form-control form-control-sm ml-3 w-75", type: "number", value: this.orderNumber, onInput: event => this.handleChange(event), placeholder: "Search", "aria-label": "Search" })), h("div", { class: "col-sm-2" }, h("button", { type: "submit", class: "btn btn-light" }, "Buscar")), h("div", { class: "col-sm-2" }, h("button", { type: "button", class: "btn btn-light" }, "Cobrar")), h("div", { class: "col-sm-2" }, h("button", { type: "button", class: "btn btn-warning" }, "Quitar")), h("table", { id: "table", class: "table table-hover" }, h("thead", null, h("tr", null, h("th", { scope: "col" }, "No."), h("th", { scope: "col" }, "Usuario"), h("th", { scope: "col" }, "Descripci\u00F3n"), h("th", { scope: "col" }, "Horario"), h("th", { scope: "col" }, "Total"))), h("tbody", null, this.orders.map((order) => (h("tr", null, h("th", { scope: "row" }, h("div", { class: "form-check form-check-inline" }, h("input", { class: "form-check-input", type: "radio", name: "inlineRadioOptions", id: 'order' + order.orderNumber.toString(), onClick: e => this.handleClick(e), value: order.orderNumber }), h("label", { class: "form-check-label" }, order.orderNumber))), h("td", null, order.userName), h("td", null, order.description), h("td", null, order.hour), h("td", null, "$", order.total))))))))));
  }
};
TableOrders.style = tableOrdersCss;

export { TableOrders as table_orders };
