import { Component, h } from '@stencil/core';

@Component({
  tag: 'user-login',
  styleUrl: 'user-login.css',
  shadow: false,
})
export class UserLogin {

  render() {
    return (
      <div class="modal-dialog modal-lg" >

        <form class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal">Login</h1>
          <label class="sr-only">Usuario</label>
          <input type="user" id="input-user" class="form-control" placeholder="Usuario" required autofocus />
          <label class="sr-only">Contraseña</label>
          <input type="password" id="input-password" class="form-control" placeholder="Contraseña" required />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Recordar contraseña
        </label>
          </div>
          <button class="btn btn-lg btn-success btn-block" type="button" id="button-login">Ingresar</button>
          <a id="forget-password" href="">¿Has olvidado la contraseña?</a>
          <button class="btn btn-lg btn-primary btn-block" type="button">Crear cuenta</button>
        </form>
      </div>
    );
  }

}
