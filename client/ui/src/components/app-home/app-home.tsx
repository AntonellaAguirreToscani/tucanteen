import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  render() {
    return (
      <div>
        <my-header butons-choice ="butons" profile-choice ="profile-close"></my-header> 
  
        <div class="grid-container">
          <div class="client-panel">
            <client-panel></client-panel>  
          </div>
          <my-body></my-body>
          <div class="rigth-panel">
            <rigth-panel></rigth-panel>
          </div>
        </div> 
      </div>

    );
  }
}
