import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer--wrapper">
            <div className="contact">
                <div className="item">
                    <span>Phone:</span> (323) 222 - 2362
                </div>
                <div className="item">
                    <span>Email:</span> order@compoundingla.com 
                </div>
                <div className="item">
                    <span>Address:</span> 3408 N Eastern Ave., 
                    <br />
                    Los Angeles, CA 90032 
                </div>
            </div>
            <div className="hours">
                <div className="item">
                    <span>Hours</span>
                    <br />
                    M-F: 10am - 6pm
                    <br />
                    Sat: 10am - 3pm 
                    <br />
                    Sun: Closed
                </div>
            </div>
            <div className="copyright-notice">
                © Copyright 2020 CompoundingLA 
            </div>
        </div>
    )
}

export default Footer;