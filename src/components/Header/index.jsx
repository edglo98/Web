import React from "react"
import "./styles.css"
import SwitchTheme from "../SwitchTheme"

export default ()=>{
    return(
        <header className="header" id="header">
            <span  className="header-logo">
                <span className="logo"/>
                <div className="header-logo_text">
                    <span>EDGAR</span>
                    <span>&nbsp;&nbsp; LÓPEZ</span>
                </div>
            </span>
            <nav>
                <ul className="header-ul">
                    <li >
                        <a href="#ME" className="header-li" >Sobre mi</a>
                    </li>
                    <li>
                        <a href="#ME2" className="header-li" >Trabajos</a>
                    </li>
                    <li>
                        <a href="" className="header-li" >Proyectos</a>
                    </li>
                    <li>
                        <a href="" className="header-li" >Contacto</a>
                    </li>
                </ul>
            </nav>
            <SwitchTheme/>
        </header>
    )
}