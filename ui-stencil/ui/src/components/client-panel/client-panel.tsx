import { Component, h, Listen, State} from '@stencil/core';

@Component({
  tag: 'client-panel',
  styleUrl: 'client-panel.css',
  shadow: false,
})
export class ClientPanel {
  @State() isAuthenticated : any;
  @State() typeUser : string;

  componentWillLoad() {
    this.isAuthenticated = localStorage.getItem('isAutenticated');
    this.typeUser = localStorage.getItem('userType');
  }
  @Listen('authenticaUser', { target: 'document' })
  authenticaUser(event: CustomEvent<boolean>) {
    this.isAuthenticated= event.detail; 
    this.typeUser = localStorage.getItem('userType');
  }
  
  @Listen('logOut', { target: 'document' })
  logOut(event: CustomEvent<boolean>) {
    this.isAuthenticated= event.detail; 
  }
  componenteShouldUpdate () {
    this.isAuthenticated= localStorage.getItem('isAutenticated');
  }

  render() {
   
      if(this.isAuthenticated && this.typeUser == 'admin'){
        return(
          <nav id="sidebarMenu" class="navbar">
            <div class="sidebar-stickypt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <stencil-route-link url="/pedidos-dia">
                    <a class="nav-link" href="#">
                      <span data-feather="file"></span>
                      Pedidos del día
                    </a> 
                  </stencil-route-link>
                </li>
                <h3 id="carta-label">Reportes</h3>
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
    }else{
      return(
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
            <h3 id="carta-label">Carta</h3>
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

}
