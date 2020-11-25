import { r as registerInstance, h } from './index-06e892ec.js';

const finalizePurchaseCss = ":host{display:block}";

const FinalizePurchase = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "modal", id: this.id, tabindex: "-1" }, h("div", { class: "modal-dialog" }, h("div", { class: "modal-content" }, h("div", { class: "modal-header" }, h("h5", { class: "modal-title" }, "Usted a finalizado su compra"), h("button", { type: "button", class: "close", "data-dismiss": "modal", "aria-label": "Close" }, h("span", { "aria-hidden": "true" }, "\u00D7"))), h("div", { class: "modal-body" }, h("p", null, "Su total es de $100"), h("p", null, "Horario de retiro: 12:00hs")), h("div", { class: "modal-footer" }, h("button", { type: "button", class: "btn btn-secondary", "data-dismiss": "modal" }, "Cerrar"), h("button", { type: "button", class: "btn btn-primary", "data-dismiss": "modal" }, "Finalizar"))))));
  }
};
FinalizePurchase.style = finalizePurchaseCss;

export { FinalizePurchase as finalize_purchase };
