import React from 'react';
import '../css/Header.css';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return (
        <header className='header' id='/'>
            <div className='header-wrapper header-mobile'>
            <div className='container'>
                <div className='header-top'>
                    <div className='header-top-logo'>
                        <div className='k'>
                            <NavLink to='/'>Katerina</NavLink>
                        </div>
                        <div className='h'>
                            <NavLink to='/'>Gavrilenko</NavLink>
                        </div>
                    </div>
                    <div className='header-contact-wrapper'>
                        <div className='header-top-phone'>
                            <a href='tel:+1.310.523.09.17'><i className='fas fa-phone-alt'></i><span className='phone-header'>+1 310.400.9097</span></a>
                        </div>
                        <div className='header-top-mail'>
                            <a href='mailto:Gavrilenko.katerina@gmail.com'><i className='far fa-envelope'></i><span className='email-header'>Gavrilenko.katerina@gmail.com</span></a>
                        </div>
                    </div>
                    <div className='header-socials-wrapper'>
                        <div className='header-top-socials'>
                            <a className='facebook' href="https://www.facebook.com/real.katsie/"><i className='fab fa-facebook-f'></i></a>
                            <a className='instagram' href="https://www.instagram.com/real.katsie/"><i className='fab fa-instagram'></i></a>
                            <a className='linkedin' href='https://www.linkedin.com/in/katerina-gavrilenko-3910081a2/'><i className='fab fa-linkedin'></i></a>
                            <a className='youtube' href='https://www.youtube.com/'><i className='fab fa-youtube'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>  
    )
}

export default Header;