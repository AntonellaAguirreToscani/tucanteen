import { r as registerInstance, h } from './index-06e892ec.js';

const alertRegisterCss = "#alert{display:none}";

const AlertRegister = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "alert alert-warning alert-dismissible fade show", role: "alert", id: this.id }, h("strong", null, "\u00A1Ups!"), " Nombre de usuario existente. Deber\u00E1 elegir uno nuevo!", h("button", { type: "button", class: "close", "data-dismiss": "alert", "aria-label": "Close" }, h("span", { "aria-hidden": "true" }, "\u00D7"))));
  }
};
AlertRegister.style = alertRegisterCss;

export { AlertRegister as alert_register };
