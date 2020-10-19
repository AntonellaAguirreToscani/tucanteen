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

        <div class="grid-container">
          <client-panel></client-panel>
          <my-body></my-body>
          <rigth-panel></rigth-panel>
        </div>

      </div>
      //El ruteo se hace en el componente my-body
    );
  }
}

