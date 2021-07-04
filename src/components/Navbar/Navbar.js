import React from 'react';
import logo from '../../logo/mehedi.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <img src={logo} className="ml-5 py-2" style={{width:"220px"}} alt="logo"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ml-5" style={{fontSize:"16px", fontWeight:"700"}} id="navbarNavDropdown">
                    <ul className="navbar-nav pl-5">
                        <li class="nav-item pl-5">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item pl-5">
                            <a class="nav-link" href="/">Portfoilo</a>
                        </li>
                        <li class="nav-item pl-5">
                            <a class="nav-link" href="/">Services</a>
                        </li>
                        <li class="nav-item pl-5">
                            <a class="nav-link" href="/">About</a>
                        </li>
                        <li class="nav-item pl-5">
                            <a class="nav-link" href="/">Hire Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;