import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { User } from '../../models.ts/user.model';
import { UserService } from '../../services/user.services';

@Component({
  tag: 'user-login',
  styleUrl: 'user-login.css',
  shadow: false,
})
export class UserLogin {
  // Props para mostrar modal, definidas en component: header
  @Prop() hidden: boolean = true;
  @Prop() id: string;
  @Prop() url: string;
  // States que permiten verificar inputs : usuario / contraseña
  @State() user: string;
  @State() password: string;
  // State que guarda los usuarios por ahora Mockeados
  @State() users: User[];

  @Event() userOk : EventEmitter<User>;
  USER : User;
  /*Constructor para instanciar  la clase UserService like a Singleton
  (esta clase nos permite acceder al listado de Users)*/
  private userService: UserService;
  constructor() {
    this.userService = UserService.Instance;
  }

  getUsers() {
    try {
      this.userService
        .getUsers() //Hace referencia a la clase UserService
        .subscribe(data => {
          //.subscribe() es como un .then()
          this.users = data;
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  //EL SIGUIENTE METODO PERTENECE AL CICLO DE VIDA DEL COMPONENTE
  //carga los usuarios ANTES de que el componente sea llamado, ACA VA A IR LA API!
  componentWillLoad() {
    this.getUsers();
  }
  
  handleLogin(e) {
    e.preventDefault();
  }
  //metodo que dá valor al state user
  handleChange(event) {
    this.user = event.target.value;
  }

  //metodo que dá valor al state password
  handleChangePass(event) {
    this.password = event.target.value;
  }

  loginValidator(typeUser : string): boolean{
    if (this.USER = this.users.find(user => user.userName == this.user && user.password == this.password && user.typeUser === typeUser)) {
      console.log(this.USER,'usuario validado');
      return true;
    }else{
      return false;
    }
  }
  handleLoginOk() {
    try {
      this.userOk.emit(this.USER);
      console.log('evento emitido');
    } catch (error) {
      console.log(error.message);
    }  
  }
  render() {
    return (
      <div class="modal fade" id={this.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={this.hidden}>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            {/* Modal Header */}
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button class="close" data-dismiss="modal" aria-label="cerrar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* Modal Body */}

            <div class="modal-body">
              <form name="login" onSubmit={e => this.handleLogin(e)}>
                <label class="sr-only">Usuario</label>
                <input type="user" id="inputUser" value={this.user} onInput={event => this.handleChange(event)} class="form-control" placeholder="Usuario" />
                <label class="sr-only" id="btn-password">
                  Contraseña
                </label>
                <input type="password" id="input-pass" value={this.password} onInput={event => this.handleChangePass(event)} class="form-control" placeholder="Contraseña" />
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Recordar contraseña
                  </label>
                </div>

                {/* Modal Footer */}
                <div class="modal-footer">
                <stencil-route-link url={this.loginValidator('client') ? '/loginClient' : this.loginValidator('admin')?'/loginAdmin': '/login'}>
                  <button class="btn btn-lg btn-success btn-block" type="submit" data-dismiss="modal" value="submit" id="button-login" onClick={()=>this.handleLoginOk()}>
                    Ingresar
                  </button>
                  </stencil-route-link>
                  <a id="forget-password" href="">
                    ¿Has olvidado la contraseña?
                  </a>
                  {/* Ruteo de boton crear cuenta. linkea a componente: user-register */}
                  <stencil-route-link url="/registrate">
                    <button class="btn btn-lg btn-primary btn-block" type="button" data-toggle="modal" data-target="#modal-register">
                      Crear cuenta
                    </button>
                  </stencil-route-link>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Cerrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
