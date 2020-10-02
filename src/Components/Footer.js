import React, {useEffect} from 'react';
import '../css/Footer.css';
import {NavLink} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

   
    useEffect(() =>{
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <footer className='section-footer' id='footer'>
             <div className='footer-top-logo'>
                <div className='realtor'>
                    <NavLink to='/'>Realtor</NavLink>
                </div>
                <div className='k-g'>
                    <NavLink to='/'>K. G. </NavLink>
                </div>
             </div>
                
            <div className='footer-contact-wrapper'>
                <div className='footer-contacts'>
                    <div className='footer-top-phone'>
                        <a href='tel:+1.310.523.09.17'><i className='fas fa-phone-alt'></i><span className='phone-footer'>+1 310.400.9097</span></a>
                    </div>
                    <div className='footer-top-mail'>
                         <a href='mailto:Gavrilenko.katerina@gmail.com'><i className='far fa-envelope'></i><span className='email-footer'>Gavrilenko.katerina@gmail.com</span></a>
                    </div>
                </div>
                <div className='footer-socials-wrapper'>
                    <div className='footer-top-socials'>
                        <a className='facebook' href="https://www.facebook.com/real.katsie/"><i className='fab fa-facebook-f'></i></a>
                        <a className='instagram' href="https://www.instagram.com/real.katsie/"><i className='fab fa-instagram'></i></a>
                        <a className='linkedin' href='https://www.linkedin.com/in/katerina-gavrilenko-3910081a2/'><i className='fab fa-linkedin'></i></a>
                        <a className='youtube' href='https://www.youtube.com/'><i className='fab fa-youtube'></i></a>
                    </div>
                </div>    
            </div>
                <div className='footer-menu'>
                    <ul className='footer-menu-list' data-aos-anchor-placement='top-top'>
                        <li className='footer-item'><NavLink to='/Final_project'>About Katerina</NavLink></li>
                        <li className='footer-item'><NavLink to='/Final_project'>People Talk</NavLink></li>
                        <li className='footer-item'><NavLink to='/Final_project'>Find a House</NavLink></li>
                        <li className='footer-item'><NavLink to='/services'>Services</NavLink></li>
                        <li className='footer-item'><NavLink to='/buy-sell'>Buy/Sell</NavLink></li>
                        <li className='footer-item'><NavLink to='/property' >Featured Property</NavLink></li>
                        <li className='footer-item'><NavLink to='/contact-us'>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className='rightsReserved'>
                    © 2020 Katerina Gavrilenko. All rights reserved.
                 </div>
        </footer>
    )
}

export default Footer;