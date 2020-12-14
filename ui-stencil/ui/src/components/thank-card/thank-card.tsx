import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'thank-card',
  styleUrl: 'thank-card.css',
  shadow: false,
})
export class ThankCard {
  @State() userName: string;

  componentWillLoad() {
   this.userName = localStorage.getItem('username');
  }
  render() {
    return (
      <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
    );
  }
}
