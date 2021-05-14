class HamburgerMenu extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <style>
            .hamburger-menu {
                position: absolute;
                z-index: 9;
                right: 20px;
                top: 24px;
                height: 20px;
                width: 28px;
                cursor: pointer;
                transition: 0.5s ease-in-out;
            }

            .hamburger-menu-button {
                position: absolute;
                right: 0;
                top: .5rem;
                width: 24px;
                height: 3px;
                background: orange;
                transition: 0.5s ease-in-out;
            }
                .hamburger-menu-button::before {
                    content: '';
                    position: absolute;
                    top: -8px;
                    width: 24px;
                    height: 3px;
                    background: blue;
                    transition: 0.5s ease-in-out;
                }
        
                .hamburger-menu-button::after {
                    content: '';
                    position: absolute;
                    top: 8px;
                    width: 24px;
                    height: 3px;
                    background: blue;
                    transition: 0.5s ease-in-out;
                }
        
                .hamburger-menu-button.open {
                    transform: rotate(720deg);
                    background: transparent;
                }
                    .hamburger-menu-button.open::before {
                        transform: rotate(45deg) translate(5px, 8px);
                        background: white;
                    }
        
                    .hamburger-menu-button.open::after {
                        transform: rotate(-45deg) translate(3px, -7px);
                        background: white;
                    }

                    nav {
                        position: fixed;
                        top: 0;
                        right: 0;
                        width: 100vw;
                        height: 100vh;
                        opacity: 0.85;
                        visibility: hidden;
                        z-index: 5;
                    }

                    nav.open {
                        visibility: visible;
                    }

                    .menu-nav {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        flex-flow: column wrap;
                        height: 100vh;
                        width: 100vw;
                        overflow: hidden;
                        background: black;
                        list-style: none;
                        padding-right: 1rem;
                        transform: translateX(100%);
                        transition: 0.5s ease-in-out;
                        margin-top: 0 !important;
                        padding: 0 !important;
                    }

                    .menu-nav.open {
                        transform: translateX(0);
                    }

                    .menu-nav-item {
                        font-size: 1rem;
                        padding: 1.5rem 0;
                    }

                    a {
                        text-decoration: none;
                        color: white;
                        transition: 0.5s ease-in-out;
                    }

                    a:hover {
                        color: orange;
                    }
        </style>

        <div class="hamburger-menu">
            <span class="hamburger-menu-button">

            </span>
        </div>

        <nav class="nav">
            <ul class="menu-nav">
                <li class="menu-nav-item">
                    <a href="../home.html">ПОЧЕТНА</a>
                </li>
                <li class="menu-nav-item">
                    <a href="../home.html">КЛИМИ</a>
                </li>
                <li class="menu-nav-item">
                    <a href="../home.html">КОНТАКТ</a>
                </li>
            </ul>
        </nav>
        `;
    }
}

window.customElements.define('hamburger-menu', HamburgerMenu);