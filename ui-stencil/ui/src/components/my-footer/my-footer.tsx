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
              <h2 class="h2"><i id="icon" class='fas fa-map-marker-alt'></i> Podés encontrarnos en... </h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.9269753935127!2d-59.08430098495615!3d-37.32055741375433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9590e1632f97e5a5%3A0x10be5268f6b3d7a6!2scampus!5e0!3m2!1ses!2sar!4v1608418639246!5m2!1ses!2sar" width="300" height="200" frameborder="0" id="map" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div class="colum2">
              <h2 class="h2">Nuestras redes:</h2>
              <div class="networks">
                <img src="./assets/icon/facebook.png" />
                <label>/tuCanteen </label>
              </div>
              <div class="networks">
                <img src="./assets/icon/insta-logo.png" alt="" />
                <label>@tuCanteenOk</label>
              </div>
            </div>
            <div class="colum3">
              <h2 class="h2">Informacion Contactos:</h2>
              <div class="row3">
                <img src="./assets/icon/wapp-icono.png" />
                <label>0249-447363</label>
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

