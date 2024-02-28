import React from "react";
import "../styles/Navbar.css"

function Navbar() {
    return (
        <nav className="navigation-bar">
            <p>Contador de Notas</p>
            <ul>
                <li>
                    <a href="https://github.com/LeonardoFreitasDev/contadordereais">Github</a>
                </li>
                <li>
                    <span>Sobre</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;