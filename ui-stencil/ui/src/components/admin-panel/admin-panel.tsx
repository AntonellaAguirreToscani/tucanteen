import { Component, h } from '@stencil/core';

@Component({
  tag: 'admin-panel',
  styleUrl: 'admin-panel.css',
  shadow: false,
})
export class AdminPanel {

  render() {
    return (
      <nav id="sidebarMenu" class="navbar">
        <div class="sidebar-stickypt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <stencil-route-link url="/pedidos">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Pedidos Del Día
                </a> 
              </stencil-route-link>
            </li>
            <h4 id="carta-label">Reportes</h4>
            <li class="nav-item">
              <stencil-route-link url="/ventas">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                Ventas
              </a>
              </stencil-route-link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}
