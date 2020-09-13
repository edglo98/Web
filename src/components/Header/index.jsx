import React from "react"
import "./styles.css"

export default ()=>{
    return(
        <header className="header">
            <span  className="header-logo">
                <span className="logo"/>
            </span>
            <nav>
                <ul className="header-ul">
                    <li >
                        <a href="" className="header-li">Sobre mi</a>
                    </li>
                    <li>
                        <a href="" className="header-li">Trabajos</a>
                    </li>
                    <li>
                        <a href="" className="header-li">Proyectos</a>
                    </li>
                    <li>
                        <a href="" className="header-li">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}