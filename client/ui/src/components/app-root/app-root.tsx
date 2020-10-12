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
              <stencil-route url="/login" component="user-login" />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
