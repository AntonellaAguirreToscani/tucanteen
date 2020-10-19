<<<<<<< HEAD
import { Component, h, Prop } from '@stencil/core';
=======
import { Component, h, Method, Prop, State } from '@stencil/core';
import { User } from '../../models.ts/user.model';
import { UserService } from '../../services/user.services';
>>>>>>> origin/develop

@Component({
  tag: 'user-login',
  styleUrl: 'user-login.css',
  shadow: false,
})
export class UserLogin {
<<<<<<< HEAD
  @Prop() hidden: boolean = true;
  @Prop() id: string;
=======
  // Props para mostrar modal, definidas en component: header
  @Prop() hidden: boolean = true;
  @Prop() id: string;

  // States que permiten verificar inputs : usuario / contraseña
  @State() user: string;
  @State() password: string;
  // State que guarda los usuarios por ahora Mockeados
  @State() users: User[];

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
  //Metodo que se llama en el form (linea: 88) verifica que los inputs correspondan a un usuario existente
  @Method()
  async handleLogin(e) {
    e.preventDefault();
    try {
      if (this.users.find(user => user.userName == this.user && user.password == this.password)) {
        console.log('Sesion Iniciada correctamente'); //acá va el redireccionamiento al componente "login-ok"
      } else {
        throw Error('Usuario NO registrado / campos incorrectos'); //acá va una alerta o mensaje al usuario!
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  //metodo que dá valor al state user
  handleChange(event) {
    this.user = event.target.value;
  }

  //metodo que dá valor al state password
  handleChangePass(event) {
    this.password = event.target.value;
  }
>>>>>>> origin/develop

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
<<<<<<< HEAD
            <div class="modal-body">
              <label class="sr-only">Usuario</label>
              <input type="user" id="inputUser" class="form-control" placeholder="Usuario" required autofocus />
              <label class="sr-only" id="btn-password">
                Contraseña
              </label>
              <input type="password" id="input-pass" class="form-control" placeholder="Contraseña" required />
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Recordar contraseña
                </label>
              </div>
              {/* Modal Footer */}
              <div class="modal-footer">
                <button class="btn btn-lg btn-success btn-block" type="button" id="button-login">
                  Ingresar
                </button>
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
=======

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
                  <button class="btn btn-lg btn-success btn-block" type="submit" value="submit" id="button-login">
                    Ingresar
                  </button>
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
>>>>>>> origin/develop
            </div>
          </div>
        </div>
      </div>
    );
  }
}
