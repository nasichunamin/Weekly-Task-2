import React from "react";
import style from './style.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div class="wrapper">
            <div class="sidebar">
                <h2>menu</h2>
                <ul>
                    <li><NavLink className="link" to="/" >Git</NavLink></li>
                    <li><NavLink className="link" to="uiux" >Introduction UI/UX</NavLink></li>
                    <li><NavLink className="link"  to="figma" >Figma</NavLink></li>
                    <li><NavLink className="link"  to="html" >HTML</NavLink></li>
                    <li><NavLink className="link"  to="css" >CSS</NavLink></li>
                    <li><NavLink className="link"  to="bootstrap" >Bootstrap</NavLink></li>
                    <li><NavLink className="link"  to="js" >JavaScript Refreshment</NavLink></li>
                    <li><NavLink className="link"  to="cleancode" >Clean Code</NavLink></li>
                </ul>
            </div>
            <div class="content">
                <div class="header">
                    <h3>React JS : A </h3>
                    <p>Weekly Task 2 - Moch.Nasichun Amin</p>
                </div>
            </div>
        </div>
        
    )
}
export default Navbar;