import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
  shadow: false,
})
// export class MyFooter {

//   render() {
//     return (
//       <footer class="text-muted" id="footer">
//         <div class="container">
//           <stencil-route-link url="/contacto">
// <a class="nav-link" id="contact" href="#">
//   <span data-feather="file"></span>
//    Contáctanos al tel:2492-4427642 <i class="fab fa-facebook-square"></i>
//  </a>
//               </stencil-route-link>
//         </div>
//       </footer> 
//     );
//   }

// 
export class MyFooter {

  render() {
    return (
      <footer>
        <div class="container-footer-all">
          <div class="container-body">
            <div class="colum1">
              <h2>Podes Encontrarnos...</h2>
            </div>
            <div class="colum2">
              <h2>Nuestras redes:</h2>
              <div class="row">
                <img src="./assets/icon/facebook.png" />
                <label>tuCanteen</label>
              </div>
              <div class="row">
                <img src="./assets/icon/insta-logo.png" alt="" />
                <label>tuCanteenOk</label>
              </div>
            </div>
            <div class="colum3">
              <h2>Informacion Contactos:</h2>
              <div class="row3">
                <img src="./assets/icon/icono-lugar.jpg" />
                <label >Tandil,
                Los Aromos 128
                </label>
              </div>
              <div class="row3">
                <img src="./assets/icon/wapp-icono.png" />
                <label>2494-447363</label>
              </div>
              <div class="row3">
                <img src="../assets/icon/icono-mail.png" />
                <label>tuCanteen@gmail.com</label>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

