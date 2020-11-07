import { Component, forceUpdate, h, Listen, Prop, State} from '@stencil/core';
import { User } from '../../models.ts/user.model';

@Component({
  tag: 'my-header',
  styleUrl: 'my-header.css',
  shadow: false,
})
export class MyHeader {

  @Prop() butonsChoice : string; //butons - butons-close
  @Prop() profileChoice : string; //profile - profile-close

  @State() user : User = User.void();

  
  
  componentWillLoad() {
    this.user;
  }
 
  

  @Listen('userOk', { target: 'document' })
  userOk(event: CustomEvent<User>) {
    try {

      this.user={...this.user,userName:event.detail.userName}
      forceUpdate(this.user);
      
      this.componentWillUpdate();
      
     
    } catch (error) {
      console.log(error.message);
    }
  
    // this.watchHandler(this.userLogin,event.detail);
    // console.log(this.userLogin, 'usuario guardado en LOGINOK');

  }
  componentWillUpdate() {
    this.user;
  }

  render() { 
    return (
      <header class="header">
        <img class="logo" src="./assets/icon/tuCanteen100.png" alt="Logo PNG" />
        <div class="form-inline">

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
            {/* <p>Bienvenida/o!!</p> */}
            <p>{this.user.userName}</p>
            <span>{this.user.userName}</span>
            <img src={this.user.photo} alt="photo user" class="avatar"></img>
          </div>
          
        </div>
      </header>
    );
  }
}
