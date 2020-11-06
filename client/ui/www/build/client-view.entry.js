import { r as registerInstance, h } from './index-06e892ec.js';

const clientViewCss = ".header{grid-area:header;background-color:#fdf15d;display:flex;align-items:center;justify-content:space-between;padding:0.5%}";

const ClientView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("my-header", { "butons-choice": "butons-close", "profile-choice": "profile" }), h("div", { class: "grid-container" }, h("client-panel", null), h("my-body", null), h("rigth-panel", null)), h("main", null)));
  }
};
ClientView.style = clientViewCss;

export { ClientView as client_view };
