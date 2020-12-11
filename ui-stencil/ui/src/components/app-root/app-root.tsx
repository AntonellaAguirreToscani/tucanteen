import { Component, h} from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  // @State() authenticated: any;


  // @Listen('logOut', { target: 'document' })
  // logOut(event: CustomEvent<boolean>) {
  //   this.authenticated = event.detail;
  // }

  // componentWillLoad() {
  //   this.authenticated;
  //   console.log(this.authenticated);
  // }


  render() {
    // if(this.authenticated == false)
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