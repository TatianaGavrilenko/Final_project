import React from 'react';
import '../css/Header.css';
//import '../css/Slider.css';
import Nav from './Nav';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className='header-wrapper'>
        <header className="header" id='/'>
        <div className="container">
            <div className="header-top">
            <Nav />
                <div className="header-top-logo">
                    <div className="k">
                        <NavLink to='/'>Katerina</NavLink>
                    </div>
                    <div className="h">
                       <NavLink to='/'>Gavrilenko</NavLink>
                    </div>
                   
                </div>
               
                <div className="header-contact-wrapper">
                    <div className="header-top-phone">
                       <i className="fas fa-phone-alt"></i>
                        <a href="tel:+1.310.400.90.97">+1 310.400.9097</a>
                    </div>
                    <div className="header-top-mail">
                        <i className="far fa-envelope"></i>
                        <a href="mailto:Gavrilenko.katerina@gmail.com">Gavrilenko.katerina@gmail.com</a>
                    </div>
                </div>
                <div className="header-socials-wrapper">
                    <div className="header-top-socials">
                        <a className="facebook" href="https://www.facebook.com/real.katsie/"><i className="fab fa-facebook-f"></i></a>
                        <a className="instagram" href="https://www.instagram.com/real.katsie/"><i className="fab fa-instagram"></i></a>
                        <a className='linkedin' href='https://www.linkedin.com/in/katerina-gavrilenko-3910081a2/'><i className="fab fa-linkedin"></i></a>
                        <a className='youtube' href='https://www.youtube.com/'><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
    
    )
}

export default Header;