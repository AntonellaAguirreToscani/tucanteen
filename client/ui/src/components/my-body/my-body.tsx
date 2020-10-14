import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-body',
  styleUrl: 'my-body.css',
  shadow: false,
})
export class MyBody {

  render() {
    return (
      <div class="main-content">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol> 
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./assets/icon/food/lemon-chicken-with-sesame.jpg" class="responsive" alt="comidita"/>
          </div>
              <div class="carousel-item">
                <img src="./assets/icon/food/penne-al-vodka.jpg" class="responsive" alt="..."/>
          </div>
                <div class="carousel-item">
                  <img src="./assets/icon/food/pizza-muffin-popover.jpg" class="responsive" alt="..."/>
          </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
            </div>
          </div>
    );
  }

}
