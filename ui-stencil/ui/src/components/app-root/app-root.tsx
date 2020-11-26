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
        <div class="grid-container">
          <client-panel></client-panel>
          <my-body>
          </my-body>
          <rigth-panel></rigth-panel>
        </div>
        <my-footer></my-footer>
      </div>
    );
  }
}

