import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-body',
  styleUrl: 'my-body.css',
  shadow: false,
})
export class MyBody {
  render() {
    return (
      <main>
        <stencil-router titleSuffix="My App - ">
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="offer-carousel" exact={true} />
            <stencil-route url="/al-plato" component="plate-food"></stencil-route>
            <stencil-route url="/sandwiches" component="sandwiches-food"></stencil-route>
            <stencil-route url="/bebidas" component="options-drinks"></stencil-route>
            <stencil-route url="/postres" component="client-deserts"></stencil-route>
            <stencil-route url="/menu-dia" component="todays-menu"></stencil-route>
            <stencil-route url="/login" component="user-login"></stencil-route>
            {/* <stencil-route url="/register" component="user-register"></stencil-route> */}
            <stencil-route url="/loginAdmin" component="table-orders"></stencil-route>
            {/* <privateRoute url="/loginClient" component="check-out" />
            <privateRoute url="/loginAdmin" component="admin-panel" /> */}
          </stencil-route-switch>
        </stencil-router>
      </main>
    );
  }
}
