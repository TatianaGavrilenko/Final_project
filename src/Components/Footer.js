import React from 'react'
import '../css/Footer.css';

//import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className='section-footer' id='footer'>
            <div className='rightsReserved'>
                 © 2020 Katerina Gavrilenko . All rights reserved.
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
       
    )
}

export default Footer