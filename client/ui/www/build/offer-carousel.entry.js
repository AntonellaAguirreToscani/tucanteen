import { r as registerInstance, h } from './index-06e892ec.js';

const offerCarouselCss = ".main-content{grid-area:mainbody;background-color:white;display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin-top:10px}img.responsive{width:100%;height:100%;object-fit:contain}";

const OfferCarousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "main-content" }, h("div", { id: "carouselExampleIndicators", class: "carousel slide", "data-ride": "carousel" }, h("ol", { class: "carousel-indicators" }, h("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "0", class: "active" }), h("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "1" }), h("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "2" })), h("div", { class: "carousel-inner" }, h("div", { class: "carousel-item active" }, h("img", { src: "./assets/icon/food/lemon-chicken-with-sesame.jpg", class: "responsive", alt: "comidita" })), h("div", { class: "carousel-item" }, h("img", { src: "./assets/icon/food/penne-al-vodka.jpg", class: "responsive", alt: "..." })), h("div", { class: "carousel-item" }, h("img", { src: "./assets/icon/food/pizza-muffin-popover.jpg", class: "responsive", alt: "..." }))), h("a", { class: "carousel-control-prev", href: "#carouselExampleIndicators", role: "button", "data-slide": "prev" }, h("span", { class: "carousel-control-prev-icon", "aria-hidden": "true" }), h("span", { class: "sr-only" }, "Previous")), h("a", { class: "carousel-control-next", href: "#carouselExampleIndicators", role: "button", "data-slide": "next" }, h("span", { class: "carousel-control-next-icon", "aria-hidden": "true" }), h("span", { class: "sr-only" }, "Next")))));
  }
};
OfferCarousel.style = offerCarouselCss;

export { OfferCarousel as offer_carousel };
