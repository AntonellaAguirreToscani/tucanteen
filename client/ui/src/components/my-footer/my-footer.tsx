import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
  shadow: false,
})
export class MyFooter {

  render() {
    return (
      <footer class="text-muted" id="footer">
        <div class="container">
        <stencil-route-link url="/contacto">
              <a class="nav-link" id="contact" href="#">
                <span data-feather="file"></span>
                Contacto
              </a>
            </stencil-route-link>
        </div>
      </footer>
    );
  }

}
