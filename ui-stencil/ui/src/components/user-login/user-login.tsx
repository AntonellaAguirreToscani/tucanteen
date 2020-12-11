import { Component, EventEmitter, h, Method, Prop, State, Event } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { User } from '../../models.ts/user.model';
import { UserService } from '../../services/user.services';

@Component({
  tag: 'user-login',
  styleUrl: 'user-login.css',
  shadow: false,
})
export class UserLogin {
  @State() authenticated: boolean;
  @State() user: string;
  @State() password: string;
  userLogged: User;

  //Navigation
  @Prop() history: RouterHistory;

  @Event() authenticaUser: EventEmitter<boolean>;

  /*Constructor para instanciar  la clase UserService like a Singleton
  (esta clase nos permite acceder al listado de Users)*/
  private userService: UserService;
  constructor() {
    this.userService = UserService.Instance;
  }

  @Method()
  async validateUser() {
    let user = {
      userName: this.user,
      password: this.password,
    };

    try {
      await this.userService
      .loginValidate(user) //Conexion a la API
      .then(response => response.json())
      .then(data => {
        this.userLogged = data;
      });

    } catch (error) {
      console.log('error conexion api');
    }
   
  }

  private redirectByUserType() {
    switch (this.userLogged.typeUser.description) {
      case 'client':
        this.history.push('/menu-dia', {});
        break;
      case 'admin':
        this.history.push('/pedidos-dia', {});
        break;
    }
  }

  @Method()
  async handleLogin(e) {
    e.preventDefault();
    try {
     await this.validateUser();
      this.userSession();
      this.redirectByUserType();
      this.authenticaUser.emit(true);
      // this.history.push('/menu-dia', {});
    } catch (error) {
      console.log(error.message,'error');
      alert('Usuario o contraseña Invalida. Intenta nuevamente!');
    }
  }

  private userSession() {
    localStorage.setItem('id',`${this.userLogged.id}` )
    localStorage.setItem('username', `${this.userLogged.userName}`);
    localStorage.setItem('isAutenticated', 'true');
    localStorage.setItem('userType', `${this.userLogged.typeUser.description}`);
    localStorage.setItem('photo', `${this.userLogged.photo}`);
  }

  closeLogin() {
    this.history.push('/', {});
  }

  //metodo que dá valor al state user
  handleChange(event) {
    this.user = event.target.value;
  }

  //metodo que dá valor al state password
  handleChangePass(event) {
    this.password = event.target.value;
  }

  render() {
    return (
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <img src="./assets/icon/icon.png" id="icon" alt="User Icon" />
            <button class="close" data-dismiss="modal" aria-label="cerrar" onClick={() => this.closeLogin()}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form onSubmit={e => this.handleLogin(e)}>
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="usuario" value={this.user} onInput={event => this.handleChange(event)} required />
            <input
              type="password"
              id="password"
              class="fadeIn third"
              name="login"
              placeholder="contraseña"
              value={this.password}
              onInput={event => this.handleChangePass(event)}
              required
            />
            <input type="submit" class="fadeIn fourth" value="Login" />
          </form>
          <div id="formFooter">
            <a class="underlineHover" href="#">
              Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>
    );
  }
}
