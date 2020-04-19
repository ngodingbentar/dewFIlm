class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <h2 class="text-uppercase">DewFilm</h2>`;
    }
}

customElements.define("app-bar", AppBar);