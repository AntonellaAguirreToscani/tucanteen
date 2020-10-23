import { Component, h} from '@stencil/core'

@Component({
  tag: 'admin-view',
  styleUrl: 'admin-view.css',
  shadow: false,
})
export class AdminView {

  render() {
    return (
      <div>
        <my-header butons-choice ="butons-close" profile-choice ="profile" user-name = 'UserName' ></my-header>
        <div class="grid-container">
          <admin-panel></admin-panel>
          <my-body></my-body>
        </div>
        <my-footer></my-footer>
      </div>
  
    );
  }

}
