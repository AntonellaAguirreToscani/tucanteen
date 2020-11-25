import { r as registerInstance, h } from './index-06e892ec.js';

const rigthPanelCss = ".sidebar{grid-area:sidebar;background-color:whitesmoke;display:flex;align-items:center;flex-direction:column;justify-content:space-between}#total{background-color:#6AB04C;height:60px;display:flex;flex-direction:row;align-items:center;color:white;font-size:1.2rem;transition:all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);padding:0 1.5rem;margin:5px 5px 20px 5px}.order{align-self:center;margin-top:5%;margin-bottom:10%}.totals-foot{align-self:center;margin-top:100%;margin-bottom:30px}";

const RigthPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("aside", { class: "sidebar" }, h("div", { class: "order" }, h("h4", null, "Tu orden"), h("ul", { id: "orders" }, h("li", null, "Desayuno 70$"), h("li", null, "Bebida   30$"))), h("div", { class: "totals-foot" }, h("h4", { id: "total" }, " Total: $ 100"), h("stencil-route-link", { url: "/compraFinalizada" }, h("button", { class: "btn btn-outline-success my-2 my-sm-0", type: "button", "data-toggle": "modal", "data-target": "#my-modal", id: "btn-finish" }, "Finalizar Compra")), h("finalize-purchase", { id: "my-modal" }))));
  }
};
RigthPanel.style = rigthPanelCss;

export { RigthPanel as rigth_panel };
