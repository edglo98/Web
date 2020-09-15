import React from "react";
import "./styles.css";
import SwitchTheme from "../SwitchTheme";
import {Link} from "react-router-dom";

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
                        <Link to="/about" className="header-li">
                            Sobre mi
                        </Link>
                    </li>
                    <li>
                        <Link to="/work" className="header-li">
                            Trabajos
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="header-li">
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="header-li">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
            <SwitchTheme/>
        </header>
    )
}