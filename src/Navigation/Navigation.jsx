import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import Logo from '../assets/logo.png';
import {ReactComponent as HamburgerIcon} from './hamburger.svg';
import './Navigation.scss';

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
    }
    return (
        <Fragment>
            <div className={`navigation--wrapper ${open ? 'open' : ''}`}>
                <img src={Logo} alt="logo"/>
                <div className="spacer"></div>
                <HashLink onClick={toggleMenu} smooth to='/#services'>services</HashLink>
                <HashLink onClick={toggleMenu} smooth to='/#testimonials'>testimonials</HashLink>
                <HashLink onClick={toggleMenu} smooth to='/#about-us'>about</HashLink>
                <HashLink onClick={toggleMenu} smooth to='/#contact-us'>contact</HashLink>
                <button onClick={toggleMenu}>
                    <Link className="btn" to={process.env.PUBLIC_URL + '/refill'}>refill</Link>
                </button>
            </div>
            <div className="navigation-mobile--icon" onClick={toggleMenu}><HamburgerIcon /></div>
        </Fragment>
    )
}

export default Navigation;