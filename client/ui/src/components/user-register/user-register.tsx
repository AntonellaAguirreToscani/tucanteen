import { Component, h, Prop, State } from '@stencil/core';
import { User } from '../../models.ts/user.model';
import { UserService } from '../../services/user.services';

@Component({
  tag: 'user-register',
  styleUrl: 'user-register.css',
  shadow: false,
})
export class UserRegister {
  @Prop() hidden: boolean = true;
  @Prop() id: string;

  //states para almacenar valores de inputs usuario/contraseña
  @State() user: string;
  @State() password: string;
  //Guarda el arreglo mockeado de usuarios para corroborar que el usuario a registrar no exista
  @State() users: User[];

  private userService: UserService;
  constructor() {
    this.userService = UserService.Instance;
  }
  //EL SIGUIENTE METODO PERTENECE AL CICLO DE VIDA DEL COMPONENTE
  //ACA VA A IR LA API!
  componentWillLoad() {
    this.getUsers();
  }
  getUsers() {
    try {
      this.userService
        .getUsers() //Hace referencia a la clase UserService
        .subscribe(data => {
          //.subscribe() es como un .then()
          this.users = data;
          console.log(this.users)
        });
    } catch (error) {
      console.log(error.message);
    }
  }
  userNameValidator(): boolean{
    if (this.users.find(user => user.userName == this.user)) {
      return true;
    }else{
      return false;
    }
  }
  handleUser(e) : boolean{
    e.preventDefault();
    try {
      if(this.userNameValidator()){
        throw Error('ERROR.usuario existente');
      } else {
        this.userService.createUser( { userName: this.user, password: this.password });
        console.log('Usuario registrado correctamente'); //ACÁ VA LA REDIRECION!
        return false;
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
  render() {
    return (
      <div class="modal fade" id={this.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={this.hidden}>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            {/* Modal Header */}
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ¡Registrarse es rápido y fácil!
              </h5>
              <button class="close" data-dismiss="modal" aria-label="cerrar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <form name="register" onSubmit={e => this.handleUser(e)}>
              {/* Modal Body */}
              <div class="modal-body">
                <label class="sr-only">Nombre</label>
                <input type="text" id="input-name" class="form-control" placeholder="Nombre" required />

                <label class="sr-only">Apellido</label>
                <input type="text" id="input-lastName" class="form-control" placeholder="Apellido" required />

                <label class="sr-only">Usuario</label>
                <input type="user" id="input-user" class="form-control" value={this.user} onInput={event => this.handleChange(event)} placeholder="Usuario" />

                <label class="sr-only">Contraseña</label>
                <input type="password" id="input-password" class="form-control" value={this.password} onInput={event => this.handleChangePass(event)} placeholder="Contraseña" />
              </div>
              
              {/* Alerta de Usuario existente */}
              <alert-register id={this.userNameValidator()? "alert-ok": "alert"}></alert-register>

              {/* Modal Footer */}
              <div class="modal-footer" id="m-footer">
                <button class="btn btn-lg btn-success btn-block" type="submit" id="btn-create">
                  Crear cuenta
                </button>
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" id="remember-pass" /> Recordar contraseña
                  </label>
                </div>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
