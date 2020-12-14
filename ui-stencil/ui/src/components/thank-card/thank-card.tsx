import { Component, h, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'thank-card',
  styleUrl: 'thank-card.css',
  shadow: false,
})
export class ThankCard {
  @State() userName: string;
  
  @Prop() history: RouterHistory;

  componentWillLoad() {
    this.userName = localStorage.getItem('username');
  }
  close() {
    this.history.push("/menu-dia", {});
  }
  render() {
    return (
      <div class="alert alert-success alert-dismissible" id="message">
        <a href="#" class="close" data-dismiss="alert" aria-label="close" onClick={()=>this.close()}>
          &times;
        </a>
        <h1>{this.userName} !!!</h1>
        <h1>
          {' '}
          Hemos tomado tu Pedido <i class="fas fa-check-circle" id="icon"></i>
        </h1>
      </div>
    );
  }
  
}
