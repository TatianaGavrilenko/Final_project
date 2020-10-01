import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../../css/Nav.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navigation = () =>{

    return(
        <nav className='header-menu'>
            <div className='container-main'>
                <div className='hamburger-menu'>
                <input id='menu__toggle' type="checkbox" />
                 <label className='menu__btn' htmlFor='menu__toggle'>
                    <span className='nav-ham-span'></span>
                     </label>
                    <ul className="nav-bar">
                        <li className='menu-item katerina'><AnchorLink href='/about'>About Katerina<i className='fas fa-chevron-down'></i></AnchorLink>
                            <ul className='list-of-subitems'>
                                <li className='menu-subitem'><AnchorLink href='/people-talk'>People Talk</AnchorLink></li>
                                <li className='menu-subitem'><AnchorLink href='/find-a-house'>Find a House</AnchorLink></li>
                            </ul>
                        </li>
                        <li className='menu-item'><NavLink to='/services'>Services <i className='fas fa-chevron-down'></i></NavLink>
                            <ul>
                                <li className='menu-subitem buy-sell-item'><NavLink to='/buy-sell'>Buy/Sell</NavLink></li>
                            </ul>
                        </li>
                        <li className='menu-item'><NavLink to='/property' >Featured Property</NavLink></li>
                        <li className='menu-item'><NavLink to='/contact-us'>Contact Us</NavLink></li>
                    </ul>
                </div>
            </div>
     </nav>
    )
}

export default class Nav extends Component {
    render() {
        return(
            <div>
                <Navigation />
            </div>
        )
    }
};