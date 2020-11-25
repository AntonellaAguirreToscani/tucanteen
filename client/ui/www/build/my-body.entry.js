import { r as registerInstance, h } from './index-06e892ec.js';

const myBodyCss = "";

const MyBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/home", component: "offer-carousel", exact: true }), h("stencil-route", { url: "/al-plato", component: "plate-food" }), h("stencil-route", { url: "/sandwiches", component: "sandwiches-food" }), h("stencil-route", { url: "/bebidas", component: "options-drinks" }), h("stencil-route", { url: "/loginAdmin", component: "table-orders" })))));
  }
};
MyBody.style = myBodyCss;

export { MyBody as my_body };
