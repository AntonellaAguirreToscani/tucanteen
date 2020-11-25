import { r as registerInstance, h } from './index-06e892ec.js';

const sandwichesFoodCss = ".tittle{text-align:center}.first-div,.third-div,.second-div,.room-div{display:flex;flex-direction:row;justify-content:space-around}.radio{width:15px;height:15px}";

const SandwichesFood = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "div-container" }, h("h1", { class: "tittle" }, "CARTA-SANWICHES"), h("div", { class: "first-div" }, h("img", { src: "./assets/icon/tostados.png", alt: "Tostados" }), h("img", { src: "./assets/icon/light.png", alt: "Completo light" })), h("div", { class: "second-div" }, h("h4", null, "TOSTADO JYQ $100", h("input", { type: "radio", class: "radio" })), h("h4", null, "COMPLETO LIGHT $200", h("input", { type: "radio", class: "radio" }))), h("div", { class: "third-div" }, h("img", { src: "./assets/icon/completo.png", alt: "Completo" }), h("img", { src: "./assets/icon/medialuna.png", alt: "Medialuna Completa" })), h("div", { class: "room-div" }, h("h4", null, "COMPLETO+PAPAS $200", h("input", { type: "radio", class: "radio" })), h("h4", null, "MEDIALUNA COMP $200", h("input", { type: "radio", class: "radio" })))));
  }
};
SandwichesFood.style = sandwichesFoodCss;

export { SandwichesFood as sandwiches_food };
