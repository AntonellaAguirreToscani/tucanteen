import { r as registerInstance, h } from './index-06e892ec.js';

const clientPanelCss = ".navbar{grid-area:navbar;background-color:whitesmoke;display:flex;flex-direction:column;justify-content:inherit;font-size:inherit;min-height:60vmax;width:80%}#carta-label{margin-top:30px}.sidebar-stickypt-3{margin-top:15px;margin-bottom:100%;align-items:inherit;align-self:start}";

const ClientPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("nav", { id: "sidebarMenu", class: "navbar" }, h("div", { class: "sidebar-stickypt-3" }, h("ul", { class: "nav flex-column" }, h("li", { class: "nav-item" }, h("stencil-route-link", { url: "/menu-dia" }, h("a", { class: "nav-link", href: "#" }, h("span", { "data-feather": "file" }), "Men\u00FA del d\u00EDa"))), h("h4", { id: "carta-label" }, "Carta"), h("li", { class: "nav-item" }, h("stencil-route-link", { url: "/al-plato" }, h("a", { class: "nav-link", href: "#" }, h("span", { "data-feather": "file" }), "Al plato"))), h("li", { class: "nav-item" }, h("stencil-route-link", { url: "/sandwiches" }, h("a", { class: "nav-link", href: "#" }, h("span", { "data-feather": "file" }), "Sandwiches"))), h("li", { class: "nav-item" }, h("stencil-route-link", { url: "/bebidas" }, h("a", { class: "nav-link", href: "#" }, h("span", { "data-feather": "file" }), "Bebidas"))), h("li", { class: "nav-item" }, h("stencil-route-link", { url: "/postres" }, h("a", { class: "nav-link", href: "#" }, h("span", { "data-feather": "file" }), "Postres")))))));
  }
};
ClientPanel.style = clientPanelCss;

export { ClientPanel as client_panel };
