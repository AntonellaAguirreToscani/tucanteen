import { r as registerInstance, h } from './index-06e892ec.js';

const appHomeCss = "*{box-sizing:border-box;margin:0;padding:0;font-family:Verdana, Geneva, Tahoma, sans-serif;font-size:1rem}html{height:100%;width:100%}body{min-height:100%;min-width:100%}.grid-container>*{box-shadow:darkgray;border-radius:1px}.grid-container{display:grid;gap:5px;grid-template:\r\n      \"header header \"   15%       \r\n      \"navbar navbar\"  25%\r\n      \"mainbody mainbody\"  auto\r\n      \"sidebar sidebar\"  25%\r\n      \"footer footer\"    5% / \r\n      25%     auto;}@media (min-width: 300px){.client-panel{display:grid;gap:5px;grid-template:\r\n      \"navbar navbar\"  50%\r\n      100%     auto;}}@media (min-width: 900px){.grid-container{grid-template:\"header header header\"    20%\r\n          \"navbar mainbody sidebar\" auto\r\n          \"footer footer footer\"    10% / \r\n          25%     auto     20%}}@media (min-width: 1200px){.grid-container{grid-template:\"header header header\"    20%\r\n          \"navbar mainbody sidebar\" auto\r\n          \"footer footer footer\"    10% / \r\n          15%     auto     20%}}";

const AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("my-header", { "butons-choice": "butons", "profile-choice": "profile-close" }), h("div", { class: "grid-container" }, h("div", { class: "client-panel" }, h("client-panel", null)), h("my-body", null), h("div", { class: "rigth-panel" }, h("rigth-panel", null)))));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
