import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'user-register',
  styleUrl: 'user-register.css',
  shadow: false,
})
export class UserRegister {
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
                ¡Registrarse es rápido y fácil!
              </h5>
              <button class="close" data-dismiss="modal" aria-label="cerrar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* Modal Body */}
            <div class="modal-body">
              <label class="sr-only">Nombre</label>
              <input type="text" id="input-name" class="form-control" placeholder="Nombre" required />

              <label class="sr-only">Apellido</label>
              <input type="text" id="input-lastName" class="form-control" placeholder="Apellido" required />

              <label class="sr-only">Usuario</label>
              <input type="user" id="input-user" class="form-control" placeholder="Usuario" required />

              <label class="sr-only">Contraseña</label>
              <input type="password" id="input-password" class="form-control" placeholder="Contraseña" required />
            </div>
            {/* Modal Footer */}
            <div class="modal-footer" id="m-footer">
              <button class="btn btn-lg btn-success btn-block" type="button" id="btn-create">
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
          </div>
        </div>
      </div>
    );
  }
}
