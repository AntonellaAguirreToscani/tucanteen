"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogin = void 0;
const core_1 = require("@stencil/core");
let UserLogin = class UserLogin {
    render() {
        return (<div class="modal-dialog modal-lg">

        <form class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal">Login</h1>
          <label class="sr-only">Usuario</label>
          <input type="user" id="input-user" class="form-control" placeholder="Usuario" required autofocus/>
          <label class="sr-only">Contraseña</label>
          <input type="password" id="input-password" class="form-control" placeholder="Contraseña" required/>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Recordar contraseña
        </label>
          </div>
          <button class="btn btn-lg btn-success btn-block" type="button" id="button-login">Ingresar</button>
          <a id="forget-password" href="">¿Has olvidado la contraseña?</a>
          <button class="btn btn-lg btn-primary btn-block" type="button">Crear cuenta</button>
        </form>
      </div>);
    }
};
UserLogin = __decorate([
    core_1.Component({
        tag: 'user-login',
        styleUrl: 'user-login.css',
        shadow: false,
    })
], UserLogin);
exports.UserLogin = UserLogin;
//# sourceMappingURL=user-login.js.map