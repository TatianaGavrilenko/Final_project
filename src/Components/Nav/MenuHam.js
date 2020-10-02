import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../../css/Nav.css';


const MenuHam = () =>{
    return(
        <nav className='nav'>
             <div className='hamburger-menu'>
                <input id='menu-toggle' type='checkbox' />
                    <label className='menu__button' htmlFor='menu-toggle'>
                         <span className='ham-span'></span>
                    </label>
                    <ul className='menuham'>
                        <li className='menu-item'><NavLink to='/'>About Katerina</NavLink>
                            <ul className='list-of-subitems'>
                                <li className='menu-subitem'><NavLink to='/Final_project'>People Talk</NavLink></li>
                                <li className='menu-subitem'><NavLink to='/Final_project'>Find a House</NavLink></li>
                            </ul>
                        </li>
                        <li className='menu-item'><NavLink to='/services'>Services</NavLink>
                            <ul>
                                <li className='menu-subitem'><NavLink to='/buy-sell'>Buy/Sell</NavLink></li>
                            </ul>
                        </li>
                        <li className='menu-item'><NavLink to='/property' >Featured Property</NavLink></li>
                        <li className='menu-item'><NavLink to='/contact-us'>Contact Us</NavLink></li>
                    </ul>
            </div>
     </nav>
    )
}


export default class Nav extends Component {
    render() {
        return(
            <div>
                <MenuHam />
            </div>
        )
    }
};