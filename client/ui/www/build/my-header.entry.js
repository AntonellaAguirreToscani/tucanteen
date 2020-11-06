import { r as registerInstance, h } from './index-06e892ec.js';

const myHeaderCss = ".header{grid-area:header;background-color:#fdf15d;display:flex;align-items:center;justify-content:space-between;padding:0.5%}button{outline:none;border:none;background-color:#333;color:white;border-radius:4px;padding:12px 20px;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);transition:all 0.4s;cursor:pointer}#butons{grid-auto-flow:column;display:grid;grid-gap:12px;margin-right:15px}#butons-close{display:none}.avatar{vertical-align:middle;width:50px;height:50px;border-radius:50%}#profile-close{display:none}#profile{display:flex;align-items:center}";

const MyHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("header", { class: "header" }, h("img", { class: "logo", src: "./assets/icon/tuCanteen100.png", alt: "Logo PNG" }), h("form", { class: "form-inline" }, h("div", { id: this.butonsChoice }, h("stencil-route-link", { url: "/login" }, h("button", { class: "btn btn-outline-success my-2 my-sm-0", type: "button", "data-toggle": "modal", "data-target": "#modal-login" }, "Ingresar")), h("stencil-route-link", { url: "/register" }, h("button", { class: "btn btn-outline-success my-2 my-sm-0", type: "button", "data-toggle": "modal", "data-target": "#modal-register" }, "Registrarse")), h("div", { id: "modals" }, h("user-login", { id: "modal-login" }), h("user-register", { id: "modal-register" }))), h("div", { id: this.profileChoice }, h("img", { src: "./assets/icon/pollo.png", alt: "Avatar", class: "avatar" }), h("p", null, this.userName)))));
  }
};
MyHeader.style = myHeaderCss;

export { MyHeader as my_header };
