import { Component, h, State, Prop, Listen, EventEmitter, Event } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
  tag: 'user-info',
  styleUrl: 'user-info.css',
  shadow: false,
})
export class UserInfo {
  @State() isAutenticated: any; // true-false
  @State() userName: string;
  @State() photo: string;

  @Prop() butonsChoice: string; //butons - butons-close
  @Prop() profileChoice: string; //profile - profile-close
  
  //Navigation
  @Prop() history: RouterHistory;

  @Event() logOut :  EventEmitter<boolean>

  componentWillLoad() {
    this.isAutenticated = localStorage.getItem('isAutenticated');
    this.userName = localStorage.getItem('user');
    this.photo = localStorage.getItem('photo');
  }

  @Listen('authenticaUser', { target: 'document' })
  authenticaUser(event: CustomEvent<boolean>) {
    this.isAutenticated = event.detail;
    this.userName = localStorage.getItem('username');
    this.photo = localStorage.getItem('photo');
  }

  componentDidUpdate() {
    this.isAutenticated;
    this.userName;
    this.photo;
    this.history;
  }

  signOff() {
    localStorage.removeItem('username');
    localStorage.setItem('isAutenticated', 'false');
    localStorage.removeItem('userType');
    localStorage.removeItem('photo')
    this.isAutenticated = false;
    this.userName = null;
    this.photo = null;  
    this.logOut.emit(this.isAutenticated);
  }

  render() {
    if (this.isAutenticated) {
      return (
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <img src={this.photo} alt="foto Usuario" class="avatar"></img>
            <li class="nav-item dropdown ml-auto">
              <div></div>
              <a href="#" id="userName" class="nav-link dropdown-toggle" data-toggle="dropdown">
                {this.userName}
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                 <a href="#" class="dropdown-item"> 
                 Perfil    <i class='fas fa-user-cog'></i> 
                 </a> 
                <div class="dropdown-divider"></div>
                <stencil-route-link url='/'>
                <a href="#" class="dropdown-item" onClick={() => this.signOff()}>
                 Logout  <i class='fas fa-user-alt-slash'></i>
                </a>
                </stencil-route-link>
              </div>
            </li>
          </div>
        </div>
      );
    } else {
      return (
        <div id={this.butonsChoice}>
          <stencil-route-link url="/login">
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal">
              Ingresar
            </button>
          </stencil-route-link>
          <stencil-route-link url="/register">
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#modal-register">
              Registrarse
            </button>
          </stencil-route-link>
        </div>
      );
    }
  }
}
