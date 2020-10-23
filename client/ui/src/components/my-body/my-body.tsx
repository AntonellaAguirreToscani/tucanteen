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
       <stencil-router>
       <stencil-route-switch scrollTopOffset={0}>
         <stencil-route url="/home" component="offer-carousel" exact={true}></stencil-route>
         <stencil-route url="/al-plato" component="plate-food"></stencil-route>
         <stencil-route url="/sandwiches" component="sandwiches-food"></stencil-route>
         <stencil-route url="/bebidas" component="options-drinks"></stencil-route>
         <stencil-route url="/menu-dia" component="todays-menu"></stencil-route>
         {/* <stencil-route url="/postres" component="sandwiches-food"></stencil-route> */}
        </stencil-route-switch>
       </stencil-router>
     </main>
    );
  }
}
