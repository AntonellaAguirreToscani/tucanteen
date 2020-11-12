import { Component, h } from '@stencil/core';

@Component({
  tag: 'sales-table',
  styleUrl: 'sales-table.css',
  shadow: false,
})
export class SalesTable {

  render() {
    return (
      <div>
      <h1 id="title">Ventas</h1>
      <div class="container" >

        <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
          <i class="fas fa-search" aria-hidden="true"></i>
          <div class="col-sm-6">
          
          {/* <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" >
            <input placeholder="Select date" type="text" id="example" class="form-control"/>
            {/* <label >Try me...</label> */}
            {/* <i class="fas fa-calendar input-prefix"></i>
          </div>  */}
          
          </div>

          <table id="table" class="table table-hover">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Usuario</th>
                <th scope="col">Descripción</th>
                <th scope="col">Horario</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* {this.orders.map((order) => (
                <tr>
                  <th scope="row">
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">{order.orderNumber}</label>
                    </div>
                  </th>
                  <td>{order.userName}</td>
                  <td>{order.description}</td>
                  <td>{order.hour}</td>
                  <td>${order.total} <button type="button" class="btn btn-primary btn-sm" onClick={() => this.buttonSelected(order)}>Seleccionar</button></td>
                </tr> */}
              {/* ))} */}
            </tbody>
          </table>
        </form>
      </div>

      {/* <script>
      $('.datepicker').datepicker()

      </script> */}
    </div>
    );
  }

}
