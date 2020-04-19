// import './club-item.js';


class ClubItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set club(club) {
        this._club = club;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        
        
        
        <div class="col-sm-3">
            <div class="card text-white bg-secondary mb-3">
                <img src="${this._club.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${this._club.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${this._club.Year}</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-primary see-detail btn-hover" data-toggle="modal" data-target="#exampleModalScrollable" data-id="${this._club.Type}">Selengkapnya</button>
                </div>
            </div>
        </div>
        
        `;
    }
}

customElements.define("club-item", ClubItem);


class ClubList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement("club-item");
            clubItemElement.club = club;
            this.shadowDOM.appendChild(clubItemElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = ``;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define('daftar-film', ClubList);