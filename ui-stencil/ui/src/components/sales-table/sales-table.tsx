import { Component, h, State } from '@stencil/core';
import { Sale } from '../../models.ts/sale.model';
import { SaleService } from '../../services/sale.service';
// import $ from 'jquery';

@Component({
  tag: 'sales-table',
  styleUrl: 'sales-table.css',
  shadow: false,
})
export class SalesTable {
  @State() sales: Sale[] = [];

  private saleService: SaleService;
  constructor() {
    this.saleService = SaleService.Instance;
  }

  getSales() {
    try {
      this.saleService
        .getSales() //Hace referencia a la clase DrinkServices
        .then(response => response.json())
        .then(data => {
          this.sales = data;
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  componentWillLoad() {
    this.getSales();
  }

  render() {
    return (
      <div>
        <h1 id="title">Ventas</h1>
        {/* <input type="date" class="datePicker"/>
        <input type="date"/> */}
        {/* <div class="container">
          <div class="row">
            <div class='col-sm-6'>
              <input type='text' class="form-control" id='datetimepicker4' />
            </div>
            <script type="text/javascript">
              {$(function () {
                $('#datetimepicker4').datetimepicker();
              })};
            </script>
          </div> */}
        {/* </div> */}
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
                  <th scope="col">Fecha</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {this.sales.map((sale) => (
                  <tr>
                    <th scope="row">
                      <div class="form-check form-check-inline">
                        <label class="form-check-label">{sale.id}</label>
                      </div>
                    </th>
                    <td>{sale.date}</td>
                    <td>{sale.descripcion}</td>
                    <td>${sale.total}</td>
                  </tr>
                ))}

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
