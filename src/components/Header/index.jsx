import React, { useEffect, useState } from "react";
import "./styles.css";
import SwitchTheme from "../SwitchTheme";
import {NavLink, NavNavLink} from "react-router-dom";
import Logo from "../Logo";

export default ()=>{
    const routes = {
        Main: "/",
        About: "/about",
        Work: "/work",
        Projects: "/projects",
        Contact: "/contact",
    }
    const [menuOpen, setMenuOpen] = useState(false)
    const menuToggle = ()=>{
        setMenuOpen(!menuOpen)
    }

    return(
        <header className="header" id="header">
            <Logo/>
            <nav className={`header-navbar ${menuOpen? "header-navbar_active" : null }`}>
                <ul className="header-ul">
                    <li>
                        <NavLink exact to={routes.Main} className="header-li" activeClassName="header-li_active" >
                            Inicio
                        </NavLink>
                    </li>
                    <li >
                        <NavLink exact to={routes.About} className="header-li" activeClassName="header-li_active">
                            Sobre mi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to={routes.Work} className="header-li" activeClassName="header-li_active">
                            Trabajos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to={routes.Projects} className="header-li" activeClassName="header-li_active">
                            Proyectos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to={routes.Contact} className="header-li" activeClassName="header-li_active">
                            Contacto
                        </NavLink>
                    </li>
                </ul>
                <SwitchTheme/>
            </nav>
            <span onClick={menuToggle} className={`header-hamburguer_menu `}>🍔</span>
        </header>
    )
}