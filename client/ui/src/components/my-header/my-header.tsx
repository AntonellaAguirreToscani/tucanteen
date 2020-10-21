import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'my-header',
  styleUrl: 'my-header.css',
  shadow: false,
})
export class MyHeader {
  @Prop() butonsChoice : string; //butons - butons-close
  @Prop() profileChoice : string; //profile - profile-close
 
  render() { 
    return (
      <header class="header">
        <img class="logo" src="./assets/icon/tuCanteen100.png" alt="Logo PNG" />
        <form class="form-inline">
          <div id={this.butonsChoice}>
            <stencil-route-link url="/login">
              <button class="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#modal-login">
                Ingresar
              </button>
            </stencil-route-link>
            <stencil-route-link url="/register">
              <button class="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#modal-register">
                Registrarse
              </button>
            </stencil-route-link>

            {/* Modals */}

            <div id="modals">
              {/* Login */}                        
              <user-login id="modal-login"></user-login>

              {/* Register */}
              <user-register id="modal-register"></user-register>
            </div>
          </div>
          <div id={this.profileChoice}>
            <img src="./assets/icon/pollo.png" alt="Avatar" class="avatar"></img>
            <p>userName</p>
          </div>

        </form>
      </header>
    );
  }
}
