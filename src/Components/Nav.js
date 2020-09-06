import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import '../css/Nav.css';

//import { Route, Switch} from 'react-router-dom';
//import About from './About';
//import ContactUs from './ContactUs';
//import News from './News';
//import Property from './Property';
//import AnchorLink from 'react-anchor-link-smooth-scroll'


const SmoothScroll = () =>{
    return(
        <nav className="header-menu">
         {/*<div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                 <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
    </label>*/}
        <ul className="nav-bar menuham">
           {/*<li><AnchorLink href='/home'>Home</AnchorLink></li>*/}
            <li><NavLink to='/'>About Katerina</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/property' >Featured Property</NavLink></li>
            <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
            {/*<NavLink to='/about'>About Katerina</NavLink>
            <NavLink to='/news'>News</NavLink>
            <NavLink to='/property'>Featured Property</NavLink>
        <NavLink to='/contact-us'>Contact Us</NavLink>*/}
        </ul>
      {/*</div>*/}
    </nav>
    )
}

/*const Nav = () => {
    return (
        <section>
            <nav className="header-menu-left-aside">
             <div className="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                     <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                        </label>
            <ul className="menuham">
                {/*<Switch>
                    <Route exact path='/' component={About}/>
                    <Route exact path='/news' component={News}/>
                    <Route exact path='/contact-us' component={ContactUs}/>
                    <Route exact path='/property' component={Property}/>
                </Switch>}
                <li><AnchorLink href='/home'>Home</AnchorLink></li>
                <li><AnchorLink href='/about'>About Katerina</AnchorLink></li>
                <li><AnchorLink href='/news'>News</AnchorLink></li>
                <li><AnchorLink href='/property'>Featured Property</AnchorLink></li>
                <li><AnchorLink href='/contact-us'>Contact Us</AnchorLink></li>
                {/*<NavLink to='/about'>About Katerina</NavLink>
                <NavLink to='/news'>News</NavLink>
                <NavLink to='/property'>Featured Property</NavLink>
            <NavLink to='/contact-us'>Contact Us</NavLink>
            </ul>
           </div>
        </nav>
        </section>
        
    )
}*/

export default class Nav extends Component {
    render() {
        return(
            <div>
                <SmoothScroll />
            </div>
        )
    }
} ;