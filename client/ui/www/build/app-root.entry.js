import { r as registerInstance, h } from './index-06e892ec.js';

const appRootCss = "*{box-sizing:border-box;margin:0;padding:0;font-family:Verdana, Geneva, Tahoma, sans-serif;font-size:1rem}html{height:100%;width:100%}body{min-height:100%;min-width:100%}.grid-container>*{box-shadow:darkgray;border-radius:1px}";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-router-redirect", { url: "/home" }), h("stencil-route", { url: "/home", component: "app-home" }), h("stencil-route", { url: "/loginClient", component: "client-view" }), h("stencil-route", { url: "/loginAdmin", component: "admin-view" })))))
    //El ruteo se hace en el componente my-body
    );
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
