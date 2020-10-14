import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'user-login',
  styleUrl: 'user-login.css',
  shadow: false,
})
export class UserLogin {
  @Prop() hidden: boolean = true;
  @Prop() id: string;

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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
