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
        <style>
        .topnav {
            position: relative;
            overflow: hidden;
            background-color: #333;
            height: 50px;
          }
          
          .topnav a {
            float: left;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
          }
          
          .topnav a:hover {
            background-color: #ddd;
            color: black;
          }
          
          .topnav a.active {
            background-color: #0a3d62;
            color: white;
          }
          
          .topnav-centered a {
            float: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          
          .topnav-right {
            float: right;
          }
          
          /* Responsive navigation menu (for mobile devices) */
          @media screen and (max-width: 600px) {
            .topnav a, .topnav-right {
              float: none;
              display: block;
            }
            
            .topnav-centered a {
              position: relative;
              top: 0;
              left: 0;
              transform: none;
            }
          }
          
          .h1a{
            color: #acc3d6;
          }
          
          input{
            background-color: #6a89cc;
          }
        </style>
        <div class="topnav">
            <div class="topnav-centered">
            <a href="index.html" class="active">dewFilm</a>
            </div>
        </div>
        `;
    }
}

customElements.define("app-bar", AppBar);