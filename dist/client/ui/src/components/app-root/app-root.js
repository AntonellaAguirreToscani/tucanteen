"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoot = void 0;
const core_1 = require("@stencil/core");
let AppRoot = class AppRoot {
    render() {
        return (<div>
        <my-header></my-header>

          <div class="row">
            <div class="col-xl-3">
              <client-panel></client-panel>
            </div>
            <div class="col-xl-6">
              <my-body></my-body>
            </div>
            <div class="col-xl-3">
            <rigth-panel></rigth-panel>
            </div>
          </div>

        <my-footer></my-footer>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/login" component="user-login"/>
              <stencil-route url="/profile/:name" component="app-profile"/>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>);
    }
};
AppRoot = __decorate([
    core_1.Component({
        tag: 'app-root',
        styleUrl: 'app-root.css',
        shadow: false,
    })
], AppRoot);
exports.AppRoot = AppRoot;
//# sourceMappingURL=app-root.js.map