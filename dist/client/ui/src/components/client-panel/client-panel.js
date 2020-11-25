"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientPanel = void 0;
const core_1 = require("@stencil/core");
let ClientPanel = class ClientPanel {
    render() {
        return (<nav id="sidebarMenu" class="col-md-12 col-lg-9 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
           <stencil-route-link url="/menu-dia">
              <a class="nav-link" href="#">
                <span data-feather="file"></span>
                Menú del día
              </a>
            </stencil-route-link>
          </li>
          <h5>Carta</h5>
          <li class="nav-item">
           <stencil-route-link url="/al-plato">
              <a class="nav-link" href="#">
                <span data-feather="file"></span>
                Al plato
              </a>
            </stencil-route-link>
          </li>
          <li class="nav-item">
           <stencil-route-link url="/sandwiches">
              <a class="nav-link" href="#">
                <span data-feather="file"></span>
                Sandwiches
              </a>
            </stencil-route-link>
          </li>
          <li class="nav-item">
           <stencil-route-link url="/bebidas">
              <a class="nav-link" href="#">
                <span data-feather="file"></span>
                Bebidas
              </a>
            </stencil-route-link>
          </li>
          <li class="nav-item">
           <stencil-route-link url="/postres">
              <a class="nav-link" href="#">
                <span data-feather="file"></span>
                Postres
              </a>
            </stencil-route-link>
          </li>
        </ul>

        
      </div>
    </nav>);
    }
};
ClientPanel = __decorate([
    core_1.Component({
        tag: 'client-panel',
        styleUrl: 'client-panel.css',
        shadow: false,
    })
], ClientPanel);
exports.ClientPanel = ClientPanel;
//# sourceMappingURL=client-panel.js.map