import { r as registerInstance, h } from './index-06e892ec.js';
import './index-56ea03f0.js';
import { U as UserService } from './user.services-38e3fab9.js';

const userLoginCss = "";

const UserLogin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // Props para mostrar modal, definidas en component: header
    this.hidden = true;
    this.userService = UserService.Instance;
  }
  getUsers() {
    try {
      this.userService
        .getUsers() //Hace referencia a la clase UserService
        .subscribe(data => {
        //.subscribe() es como un .then()
        this.users = data;
      });
    }
    catch (error) {
      console.log(error.message);
    }
  }
  //EL SIGUIENTE METODO PERTENECE AL CICLO DE VIDA DEL COMPONENTE
  //carga los usuarios ANTES de que el componente sea llamado, ACA VA A IR LA API!
  componentWillLoad() {
    this.getUsers();
  }
  //Metodo que se llama en el form (linea: 88) verifica que los inputs correspondan a un usuario existente
  async handleLogin(e) {
    e.preventDefault();
    try {
      if (this.users.find(user => user.userName == this.user && user.password == this.password && user.typeUser === 'client')) {
        console.log('Sesion Iniciada correctamente'); //acá va el redireccionamiento al componente "login-ok"
      }
      else {
        throw Error('Usuario NO registrado / campos incorrectos'); //acá va una alerta o mensaje al usuario!
      }
    }
    catch (error) {
      console.log(error.message);
    }
  }
  //metodo que dá valor al state user
  handleChange(event) {
    this.user = event.target.value;
  }
  //metodo que dá valor al state password
  handleChangePass(event) {
    this.password = event.target.value;
  }
  loginValidator(typeUser) {
    if (this.users.find(user => user.userName == this.user && user.password == this.password && user.typeUser === typeUser)) {
      return true;
    }
    else {
      return false;
    }
  }
  render() {
    return (h("div", { class: "modal fade", id: this.id, tabindex: "-1", role: "dialog", "aria-labelledby": "exampleModalLabel", "aria-hidden": this.hidden }, h("div", { class: "modal-dialog", role: "document" }, h("div", { class: "modal-content" }, h("div", { class: "modal-header" }, h("h5", { class: "modal-title", id: "exampleModalLabel" }, "Login"), h("button", { class: "close", "data-dismiss": "modal", "aria-label": "cerrar" }, h("span", { "aria-hidden": "true" }, "\u00D7"))), h("div", { class: "modal-body" }, h("form", { name: "login", onSubmit: e => this.handleLogin(e) }, h("label", { class: "sr-only" }, "Usuario"), h("input", { type: "user", id: "inputUser", value: this.user, onInput: event => this.handleChange(event), class: "form-control", placeholder: "Usuario" }), h("label", { class: "sr-only", id: "btn-password" }, "Contrase\u00F1a"), h("input", { type: "password", id: "input-pass", value: this.password, onInput: event => this.handleChangePass(event), class: "form-control", placeholder: "Contrase\u00F1a" }), h("div", { class: "checkbox mb-3" }, h("label", null, h("input", { type: "checkbox", value: "remember-me" }), " Recordar contrase\u00F1a")), h("div", { class: "modal-footer" }, h("stencil-route-link", { url: this.loginValidator('client') ? '/loginClient' : this.loginValidator('admin') ? '/loginAdmin' : '/login' }, h("button", { class: "btn btn-lg btn-success btn-block", type: "submit", "data-dismiss": "modal", value: "submit", id: "button-login" }, "Ingresar")), h("a", { id: "forget-password", href: "" }, "\u00BFHas olvidado la contrase\u00F1a?"), h("stencil-route-link", { url: "/registrate" }, h("button", { class: "btn btn-lg btn-primary btn-block", type: "button", "data-toggle": "modal", "data-target": "#modal-register" }, "Crear cuenta")), h("button", { type: "button", class: "btn btn-secondary", "data-dismiss": "modal" }, "Cerrar"))))))));
  }
};
UserLogin.style = userLoginCss;

export { UserLogin as user_login };
