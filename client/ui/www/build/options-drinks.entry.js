import { r as registerInstance, e as createEvent, h } from './index-06e892ec.js';
import { o as of } from './index-56ea03f0.js';

const DRINKS = [
  { id: 1, image: './assets/icon/coca-cola.png', description: 'COCA-COLA', price: 90 },
  { id: 2, image: './assets/icon/coca-cola-light.png', description: 'COCA-COLA ligth', price: 100 },
  { id: 3, image: './assets/icon/sprite.png', description: 'SPRITE', price: 80 },
  { id: 4, image: './assets/icon/pasoToros.jpg', description: 'PASO DE LOS TOROS', price: 120 },
  { id: 5, image: './assets/icon/coca-cola-light.png', description: 'COCA-COLA ligth', price: 100 },
  { id: 6, image: './assets/icon/coca-cola-light.png', description: 'COCA-COLA ligth', price: 100 },
  { id: 4, image: './assets/icon/pasoToros.jpg', description: 'PASO DE LOS TOROS', price: 120 },
  { id: 5, image: './assets/icon/coca-cola-light.png', description: 'COCA-COLA ligth', price: 100 },
  { id: 6, image: './assets/icon/coca-cola-light.png', description: 'COCA-COLA ligth', price: 100 }
];

class DrinkServices {
  getDrinks() {
    return of(DRINKS);
  }
  //Utiliza el patron Singleton. Se intancia una única vez!
  static get Instance() {
    return this._instance || (this._instance = new this());
  }
}

const optionsDrinksCss = ".tittle{text-align:center}.card{margin:2%;border:2px solid black}#div-cards{width:30%}.div-container{display:flex;flex-flow:row wrap;justify-content:center}.card-img{margin-top:30%}";

const OptionsDrinks = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.drinkSelected = createEvent(this, "drinkSelected", 7);
    //State donde se almacena el listado de bebidas
    this.drinks = [];
    this.drinkService = DrinkServices.Instance;
  }
  //funcion que llena el listado de bebidas con el mock (similar a una funcion ajax)
  getDrinks() {
    try {
      this.drinkService
        .getDrinks() //Hace referencia a la clase DrinkServices
        .subscribe(data => {
        //.subscribe() es como un .then()
        this.drinks = data;
        console.log(this.drinks);
      });
    }
    catch (error) {
      console.log(error.message);
    }
  }
  //EL SIGUIENTE METODO PERTENECE AL CICLO DE VIDA DEL COMPONENTE
  //ACA VA A IR LA API!
  componentWillLoad() {
    this.getDrinks();
  }
  // NO SE USA TODAVIA! Se va a utilizar en el panel derecho para escuchar este evento por su ID!
  handleSelectedDrink(drink) {
    this.drinkSelected.emit(drink);
  }
  render() {
    return (h("div", { class: "div-drinks" }, h("h1", { class: "tittle" }, "Carta - Bebidas"), h("div", { class: "div-container" }, this.drinks.map((drink) => h("div", { class: "card mb-3", id: "div-cards" }, h("div", { class: "row no-gutters", id: drink.id.toString() }, h("div", { class: "col-md-4" }, h("img", { src: drink.image, class: "card-img", alt: "..." })), h("div", { class: "col-md-8" }, h("div", { class: "card-body" }, h("h5", { class: "card-title" }, drink.description), h("p", { class: "card-text" }, "$", drink.price)))))))));
  }
};
OptionsDrinks.style = optionsDrinksCss;

export { OptionsDrinks as options_drinks };
