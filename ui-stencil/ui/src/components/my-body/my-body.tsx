import { Component, h, Listen, Prop, State } from '@stencil/core';
import { Order } from '../../models.ts/order.model';
import { PrivateRoutes } from '../private-routes/private-routes';


@Component({
  tag: 'my-body',
  styleUrl: 'my-body.css',
  shadow: false,
})
export class MyBody {
  @State() isAuthenticated :string;
  @Prop() order:Order;


  @Listen('selectedSale', { target: 'document' })
  selectedSale(event: CustomEvent<Order>) {
   this.order=event.detail;
  }

  @Listen('authenticaUser', { target: 'document' })
  authenticaUser(event: CustomEvent<string>) {
    this.isAuthenticated= event.detail;
  }

  componentWillLoad(){
    this.isAuthenticated = localStorage.getItem('isAutenticated');
  }

  componentDidUpdate(){
    this.isAuthenticated = localStorage.getItem('isAutenticated');
  }

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
              <stencil-route url="/thank-you" component="thank-card"></stencil-route>
              {/* <stencil-route url="/register" component="user-register"></stencil-route> */}
              {/* <stencil-route url="/ventas" component="sales-table"></stencil-route>
              <stencil-route url="/pedidos-dia" component="table-orders"></stencil-route> */}
              {/* RUTAS PRIVADAS */}
              <PrivateRoutes url="/compraFinalizada" order={this.order}  isAutenticated = {this.isAuthenticated} component="finalize-purchase"/>
              <PrivateRoutes url="/pedidos-dia" isAutenticated = {this.isAuthenticated} component="table-orders" />
              <PrivateRoutes url="/ventas" isAutenticated = {this.isAuthenticated} component="sales-table"/>
            </stencil-route-switch>
          </stencil-router>
      </main>
    );
  }
}
