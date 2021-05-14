class KlimaItem extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <style>
            .klima-item {
                width: 80%;
                margin: 0 auto;
                border: 2px solid blue;
                border-radius: 5px;
                color: orange;
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;
                padding: 15px;
                transition: 0.5s ease-in-out;
            }
            img {
                width: 90%;
                height: 90%;
                margin: 0 auto;
            }
            h3 {
                padding-left: 20px;
            }
            button {
                background: blue;
                color: orange;
                border: 2px solid blue;
                border-radius: 5px;
                margin: 0 auto;
                padding: 5px 7px;
                font-weight: bold;
                letter-spacing: 1px;
                transition: 0.5s ease-in-out;
            }

            .klima-item:hover {
                box-shadow: 0px 10px 30px rgba(57,56,61, 1);
            }
            button:hover {
                background: orange;
                color: blue;
                border: 2px solid orange;
            }
        </style>
            <div class="klima-item">
                <h3>${this.getAttribute('title')}</h3>
                <img src="${this.getAttribute('image')}">
                <div class="description">
                    <ul>
                        <li>${this.getAttribute('price')}</li>
                        <li>${this.getAttribute('brand')}</li>
                    </ul>    
                </div>
                <button>НАРАЧАЈТЕ ВЕДНАШ!</button>
            </div>    
        `;
    }
}

window.customElements.define('klima-item', KlimaItem);