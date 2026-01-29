import React from 'react'
import logo from '../../assets/Logo.png';
export default function Navbar() {
    return (
        <header className="navbar-header">
            <div className="logo">

                <img src={logo} alt="" />
                <span>Square Up</span>
            </div>

            <ul className="nav-ul">
                <li className="link-nav"><a href="">Home</a></li>
                <li className="link-nav"><a href="">Services</a></li>
                <li className="link-nav"><a href="">Work</a></li>
                <li className="link-nav"><a href="">Process</a></li>
                <li className="link-nav"><a href="">About</a></li>
                <li className="link-nav"><a href="">Careers</a></li>
            </ul>

            <div className="btn-Contact">Contact Us</div>
        </header>
    )
}
