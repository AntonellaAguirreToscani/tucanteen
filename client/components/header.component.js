< script type = "text/javascript"
src = "./components/header.component.js" > < /script>
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav class="navbar navbar-light" style="background-color: #fdf15d;" id="header">
        <form class="form-inline">
        <div id="btns">
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" id="btn-login">Login</button>
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" id="btn-register">Registrarse</button>
        </div>   
        </form>
      </nav>`
    }
}
customElements.define('my-header', Header);