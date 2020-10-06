class ClientPanel extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="container-client-panel" class="col-sm-2" style="heigth:600px;">
            <nav class="nav flex-column">
                <a class="nav-link active" href="#" id="main">Menú del Día</a>
                <h5 id="carta">Carta</h5>
                <div id="list">
                    <li> 
                        <ul><a class="nav-link active" href="#" id="buffet">Al Plato</a></ul>
                        <ul><a class="nav-link active" href="#" id="sandwiches">Sandiwhes</a></ul>
                        <ul><a class="nav-link active" href="#" id="drinks">Bebidas</a></ul>
                        <ul><a class="nav-link active" href="#" id="deserts">Postres</a></ul>
                    </li>
                </div>
            </nav>    
        </div>
        `
    }
}
customElements.define('client-panel', ClientPanel);