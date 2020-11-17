import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Logo from '../../Imgaes/logos/Logo.png';
import './Header.css'

const Header = () => {
    const history = useHistory();
    const handleClick = () => {
            history.push('/home')
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  container">
                    <Link className="navbar-brand" to="/"><img style={{height:'60px'}} src={Logo} alt=""/></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse link-container" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to='/home'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/service">Service</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/concern">Concerns</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/event">Event</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
        </div>
    );
};

export default Header;