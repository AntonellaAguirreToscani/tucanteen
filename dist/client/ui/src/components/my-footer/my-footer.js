"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFooter = void 0;
const core_1 = require("@stencil/core");
let MyFooter = class MyFooter {
    render() {
        return (<footer class="text-muted" id="footer">
        <div class="container">
        <stencil-route-link url="/contacto">
              <a class="nav-link" id="contact" href="#">
                <span data-feather="file"></span>
                Contacto
              </a>
            </stencil-route-link>
        </div>
      </footer>);
    }
};
MyFooter = __decorate([
    core_1.Component({
        tag: 'my-footer',
        styleUrl: 'my-footer.css',
        shadow: false,
    })
], MyFooter);
exports.MyFooter = MyFooter;
//# sourceMappingURL=my-footer.js.map