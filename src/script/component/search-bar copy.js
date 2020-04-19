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
       <div id="search-container" class="search-container">
           <input placeholder="Search football club" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>

       <div class="container search-container" id="search-container">
            <div class="row mt-3 justify-content-center">    
                <div class="col-md-8">
                    <h1 class="text-center h1a">Pencarian Film</h1>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Tulis Judul Film" id="searchElement input-cari">
                        <div class="input-group-append">
                            <button class="btn btn-dark" type="button" id="searchButtonElement klik-cari">Cari</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);