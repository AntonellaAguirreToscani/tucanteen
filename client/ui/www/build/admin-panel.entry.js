import { r as registerInstance, h } from './index-06e892ec.js';

const adminPanelCss = ".navbar{grid-area:navbar;background-color:whitesmoke;display:flex;flex-direction:column;justify-content:inherit}#carta-label{margin-top:20px}.sidebar-stickypt-3{margin-top:15px;margin-bottom:100%;align-items:inherit}";

const AdminPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("nav", { id: "sidebarMenu", class: "navbar" }, h("div", { class: "sidebar-stickypt-3" }, h("ul", { class: "nav flex-column" }, h("li", { class: "nav-item" }, h("stencil-route-link", { url: "/pedidos" }, h("a", { class: "nav-link", href: "#" }, h("span", { "data-feather": "file" }), "Pedidos Del D\u00EDa"))), h("h4", { id: "carta-label" }, "Reportes"), h("li", { class: "nav-item" }, h("stencil-route-link", { url: "/ventas" }, h("a", { class: "nav-link", href: "#" }, h("span", { "data-feather": "file" }), "Ventas")))))));
  }
};
AdminPanel.style = adminPanelCss;

export { AdminPanel as admin_panel };
