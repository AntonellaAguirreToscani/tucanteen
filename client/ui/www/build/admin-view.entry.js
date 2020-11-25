import { r as registerInstance, h } from './index-06e892ec.js';

const adminViewCss = ":host{display:block}";

const AdminView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("my-header", { "butons-choice": "butons-close", "profile-choice": "profile", "user-name": 'UserName' }), h("div", { class: "grid-container" }, h("admin-panel", null), h("my-body", null))));
  }
};
AdminView.style = adminViewCss;

export { AdminView as admin_view };
