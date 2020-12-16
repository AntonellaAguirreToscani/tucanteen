import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'cdn-paginator',
  styleUrl: 'cdn-paginator.css',
  shadow: false,
})
export class CdnPaginator {
  @Prop() page: number = 0;
  @Prop() pageSize: number = 2;
  @Prop() pageSizeOptions: number[] = [];
  @Prop() itemCount: number;

  @Event() pageChanged: EventEmitter;
  @Event() sizeChanged: EventEmitter;

  private pageCount: number = 0;

  private handlePrevious(event) {
    if (this.page !== 0) {
      this.handleSelect(event, this.page - 1);
    }
  }

  private handleNext(event) {
    if (this.page !== this.pageCount - 1) {
      this.handleSelect(event, this.page + 1);
    }
  }

  private handleSelect(event: UIEvent, index: number) {
    event.preventDefault();
    this.pageChanged.emit(index);
  }

  // private handlePageSizeChange(event) {
  //   this.sizeChanged.emit(Number(event.currentTarget.value));
  // }

  render() {
    if (this.itemCount) {
      let pages = [];
      const start = this.page * this.pageSize + 1;
      const end = this.page * this.pageSize + this.pageSize;

      for (let i = 0; i < this.itemCount / this.pageSize; i++) {
        pages.push(i);
      }

      this.pageCount = pages.length;

      return (
        <div>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" onClick={event => this.handlePrevious(event)}>
                  Previo
                </a>
              </li>

              {pages.map(index => (
                <li class="page-item">
                  <a class="page-link" href="#" onClick={event => this.handleSelect(event, index)}>
                    {index + 1}
                  </a>
                </li>
              ))}

              <li class="page-item active">
                <a class="page-link" onClick={event => this.handleNext(event)}>
                  Siguiente
                </a>
                {/* <span class="page-link">
                  2<span class="sr-only">(current)</span>
                </span> */}
              </li>
              {/* <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class={this.page === pages.length - 1 ? 'disabled' : ''} onClick={event => this.handleNext(event)}>
                  Siguiente
                </a>
              </li> */}
              <li class="page-item">
                <a class="page-link" href="#">
                  {start} - {this.page === pages[pages.length - 1] ? this.itemCount : end} de {this.itemCount}
                </a>
              </li>
              <div class="btn-group">
              </div>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

          