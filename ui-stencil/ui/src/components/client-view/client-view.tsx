import { Component, h } from '@stencil/core';

@Component({
  tag: 'client-view',
  styleUrl: 'client-view.css',
  shadow: false,
})
export class ClientView {
  
  render() {
    return (
        <div>
          <my-header butons-choice ="butons-close" profile-choice ="profile"></my-header>
          <div class="grid-container">
          <client-panel></client-panel>  
          <my-body></my-body>
          <rigth-panel></rigth-panel>
          </div>
          <my-footer></my-footer>
     </div>

    );
  }

}
