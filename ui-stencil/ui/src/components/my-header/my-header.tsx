import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-header',
  styleUrl: 'my-header.css',
  shadow: false,
})
export class MyHeader {
  render() {
    return (
      <header class="header">
        <img class="logo" src="./assets/icon/tuCanteen100.png" alt="Logo PNG" />
        <user-info></user-info>
      </header>
    );
  }
}
