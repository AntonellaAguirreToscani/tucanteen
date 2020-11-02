import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'alert-register',
  styleUrl: 'alert-register.css',
  shadow: false,
})
export class AlertRegister {
  @Prop() id : string;
  render() {
    return (
      <div class="alert alert-warning alert-dismissible fade show" role="alert" id={this.id}>
        <strong>¡Ups!</strong> Nombre de usuario existente. Deberá elegir uno nuevo!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}
