import { r as registerInstance, h } from './index-06e892ec.js';

const plateFoodCss = ".tittle{text-align:center}.first-div,.third-div,.second-div,.room-div{display:flex;flex-direction:row;justify-content:space-around}.radio{width:15px;height:15px}";

const PlateFood = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "div-container" }, h("h1", { class: "tittle" }, "CARTA AL PLATO"), h("div", { class: "first-div" }, h("img", { src: "./assets/icon/pollo.png", alt: "pollo con papas" }), h("img", { src: "./assets/icon/pizza.png", alt: "pizza individual" })), h("div", { class: "second-div" }, h("h4", null, "POLLO CON PAPAS $200", h("input", { type: "radio", class: "radio" })), h("h4", null, "PIZZA INDIVIDUAL $160", h("input", { type: "radio", class: "radio" }))), h("div", { class: "third-div" }, h("img", { src: "./assets/icon/ensalada.png", alt: "Ensalada Cesar" }), h("img", { src: "./assets/icon/lassagna.png", alt: "Lassagna" })), h("div", { class: "room-div" }, h("h4", null, "ENSALADA CESAR $180", h("input", { type: "radio", class: "radio" })), h("h4", null, "LASSAGNA $200", h("input", { type: "radio", class: "radio" })))));
  }
};
PlateFood.style = plateFoodCss;

export { PlateFood as plate_food };
