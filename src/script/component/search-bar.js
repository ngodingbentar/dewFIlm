class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
       
        <div id="search-container" class="search-container container">
            <div class="row mt-3 justify-content-center">   
                <div class="col-md-8">
                    <h1 class="text-center h1a">Pencarian Film</h1>
                    <div class="input-group mb-3">
                        <input class="form-control" placeholder="Cari Judul Film" id="searchElement" type="search">
                        <button class="btn btn-dark" id="searchButtonElement" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);