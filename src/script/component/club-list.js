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
       
        <style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
    max-width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}
</style>
        
        <div class="">
            <div class="">
                <h3>${this._club.Title}</h3>
                <img src="${this._club.Poster}" class="card-img-top" alt="...">
                <p></p>
                <p>${this._club.Year}</p>
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
            clubItemElement.style = ('background-color:#eeeded;padding:9px;margin:6px;align-content: center;max-width:300px;'); 
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