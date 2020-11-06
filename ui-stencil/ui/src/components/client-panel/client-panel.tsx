import { Component, h} from '@stencil/core';

@Component({
  tag: 'client-panel',
  styleUrl: 'client-panel.css',
  shadow: false,
})
export class ClientPanel {

  render() {
    return (
      <nav id="sidebarMenu" class="navbar">
        <div class="sidebar-stickypt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <stencil-route-link url="/menu-dia">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Menú del día
                </a> 
              </stencil-route-link>
            </li>
            <h4 id="carta-label">Carta</h4>
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
      </nav>
    );
  }

}
