import React from 'react';
import './Navbar.css'
import Logo from "./Logo";

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <div onClick={
                    () => {
                        window.location.href = '/';
                    }
                } className="navbar-link">Home
                </div>
                <div onClick={
                    () => {
                        window.location.href = '/catalog';
                    }

                } className="navbar-link">Catalog
                </div>
            </div>
            <Logo/>
        </nav>
    );
}


export default Navbar;
