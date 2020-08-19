import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import Logo from '../assets/logo.jpg';
import './Navigation.scss';

const Navigation = () => {
    return (
        <div className="navigation--wrapper">
            <img src={Logo} alt="logo"/>
            <div className="spacer"></div>
            <HashLink smooth to='/#services'>SERVICES</HashLink>
            <HashLink smooth to='/#testimonials'>TESTIMONIALS</HashLink>
            <HashLink smooth to='/#about-us'>ABOUT</HashLink>
            <HashLink smooth to='/#contact-us'>CONTACT</HashLink>
            <button>
                <Link className="btn" to='/refill'>REFILL</Link>
            </button>
        </div>
    )
}

export default Navigation;