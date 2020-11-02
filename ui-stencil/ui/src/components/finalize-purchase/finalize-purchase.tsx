import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'finalize-purchase',
  styleUrl: 'finalize-purchase.css',
  shadow: false,
})
export class FinalizePurchase {
  
  @Prop() id:string;

  render() {
    return (
      <div class="modal" id={this.id} tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Usted a finalizado su compra</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Su total es de $100</p>
              <p>Horario de retiro: 12:00hs</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Finalizar</button>
            </div>
          </div>
        </div>
      </div>);
  }

}
