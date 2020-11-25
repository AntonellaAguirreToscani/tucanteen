import { r as registerInstance, h } from './index-06e892ec.js';

const myFooterCss = "footer{grid-area:footer;background-color:green;font-style:italic;font-size:2px;display:inherit;align-items:center}#footer{background-color:#6AB04C}#contact{margin-left:50%}";

const MyFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("footer", { class: "text-muted", id: "footer" }, h("div", { class: "container" }, h("stencil-route-link", { url: "/contacto" }, h("a", { class: "nav-link", id: "contact", href: "#" }, h("span", { "data-feather": "file" }), "Cont\u00E1ctanos")))));
  }
};
MyFooter.style = myFooterCss;

export { MyFooter as my_footer };
