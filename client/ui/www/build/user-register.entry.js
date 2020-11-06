import { r as registerInstance, h } from './index-06e892ec.js';
import './index-56ea03f0.js';
import { U as UserService } from './user.services-38e3fab9.js';

const userRegisterCss = "";

const UserRegister = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hidden = true;
    this.userService = UserService.Instance;
  }
  //EL SIGUIENTE METODO PERTENECE AL CICLO DE VIDA DEL COMPONENTE
  //ACA VA A IR LA API!
  componentWillLoad() {
    this.getUsers();
  }
  getUsers() {
    try {
      this.userService
        .getUsers() //Hace referencia a la clase UserService
        .subscribe(data => {
        //.subscribe() es como un .then()
        this.users = data;
        console.log(this.users);
      });
    }
    catch (error) {
      console.log(error.message);
    }
  }
  userNameValidator() {
    if (this.users.find(user => user.userName == this.user)) {
      return true;
    }
    else {
      return false;
    }
  }
  handleUser(e) {
    e.preventDefault();
    try {
      if (this.userNameValidator()) {
        throw Error('ERROR.usuario existente');
      }
      else {
        this.userService.createUser({ userName: this.user, password: this.password, typeUser: 'client' });
        console.log('Usuario registrado correctamente'); //ACÁ VA LA REDIRECION!
        return false;
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
  render() {
    return (h("div", { class: "modal fade", id: this.id, tabindex: "-1", role: "dialog", "aria-labelledby": "exampleModalLabel", "aria-hidden": this.hidden }, h("div", { class: "modal-dialog", role: "document" }, h("div", { class: "modal-content" }, h("div", { class: "modal-header" }, h("h5", { class: "modal-title", id: "exampleModalLabel" }, "\u00A1Registrarse es r\u00E1pido y f\u00E1cil!"), h("button", { class: "close", "data-dismiss": "modal", "aria-label": "cerrar" }, h("span", { "aria-hidden": "true" }, "\u00D7"))), h("form", { name: "register", onSubmit: e => this.handleUser(e) }, h("div", { class: "modal-body" }, h("label", { class: "sr-only" }, "Nombre"), h("input", { type: "text", id: "input-name", class: "form-control", placeholder: "Nombre", required: true }), h("label", { class: "sr-only" }, "Apellido"), h("input", { type: "text", id: "input-lastName", class: "form-control", placeholder: "Apellido", required: true }), h("label", { class: "sr-only" }, "Usuario"), h("input", { type: "user", id: "input-user", class: "form-control", value: this.user, onInput: event => this.handleChange(event), placeholder: "Usuario" }), h("label", { class: "sr-only" }, "Contrase\u00F1a"), h("input", { type: "password", id: "input-password", class: "form-control", value: this.password, onInput: event => this.handleChangePass(event), placeholder: "Contrase\u00F1a" })), h("alert-register", { id: this.userNameValidator() ? "alert-ok" : "alert" }), h("div", { class: "modal-footer", id: "m-footer" }, h("button", { class: "btn btn-lg btn-success btn-block", type: "submit", id: "btn-create" }, "Crear cuenta"), h("div", { class: "checkbox mb-3" }, h("label", null, h("input", { type: "checkbox", value: "remember-me", id: "remember-pass" }), " Recordar contrase\u00F1a")), h("button", { type: "button", class: "btn btn-secondary", "data-dismiss": "modal" }, "Cerrar")))))));
  }
};
UserRegister.style = userRegisterCss;

export { UserRegister as user_register };
