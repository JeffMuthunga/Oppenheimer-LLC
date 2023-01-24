import React from "react";
import {NavLink} from "react-router-dom"


function NavBar (){

    return (
        <header>
        <nav className="nav-container">
        <div className="navbar">
            <NavLink className="nav-branding" href="#">
                <img src="./Images/axis.png" alt="" width={10} height={40}/>
                Oppenheimer LLC</NavLink>
            <ul className="nav-menu">
                <li className="nav-link"><NavLink  to="/"> Home</NavLink ></li>
                <li className="nav-link"><NavLink  to="/">Display Properties</NavLink ></li>
                <li className="nav-link"><NavLink  to="/">Favorites</NavLink ></li>
            </ul>
        </div>
        </nav>
        </header>
    )
}

export default NavBar