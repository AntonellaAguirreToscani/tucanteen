"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyHeader = void 0;
const core_1 = require("@stencil/core");
let MyHeader = class MyHeader {
    render() {
        return (<header class="header">
        <img class="logo" src="./assets/icon/tuCanteen100.png" alt="Logo PNG"/>
        <form class="form-inline">
          <div id="butons">
          <stencil-route-link url="/login">
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" id="btn-login"> Ingresar</button>
            </stencil-route-link>
            <stencil-route-link url="/registrate">
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" id="btn-register">Registrarse</button>
            </stencil-route-link>
          </div>
        </form>
      </header>);
    }
};
MyHeader = __decorate([
    core_1.Component({
        tag: 'my-header',
        styleUrl: 'my-header.css',
        shadow: false,
    })
], MyHeader);
exports.MyHeader = MyHeader;
//# sourceMappingURL=my-header.js.map