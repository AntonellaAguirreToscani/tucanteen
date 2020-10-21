import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <div>
        {/* <div class="grid-container">
          <client-panel></client-panel>  
          <my-body></my-body>
          <rigth-panel></rigth-panel>
        </div> */}
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-router-redirect url="/home"></stencil-router-redirect>
              <stencil-route url="/home" component="app-home"></stencil-route>
              <stencil-route url="/loginClient" component="client-view"></stencil-route>
              <stencil-route url="/loginAdmin" component="admin-view"></stencil-route>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
      //El ruteo se hace en el componente my-body
    );
  }
}
