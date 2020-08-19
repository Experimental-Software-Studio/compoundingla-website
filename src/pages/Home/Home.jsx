import React from 'react';
import ServiceCard from './ServiceCard';
import services from '../../assets/services';
import TestimonialImage from '../../assets/testimonial.jpg';
import './Home.scss';

const Home = () => {
    return (
        <div className="home--wrapper">
            <div id="hero" className="section">
            </div>
            <div id="services" className="section">
                <h2 className="highlight">SERVICES</h2>
                <div className="list">
                    {services.map(service => (<ServiceCard key={service.link} {...service}/>))}
                </div>
            </div>
            <div id="testimonials" className="section">
                <h2 className="highlight">TESTIMONIALS</h2>

                <img src={TestimonialImage} alt="testimonials"/>
            </div>
            <div id="about-us" className="section">
                <h2 className="highlight">ABOUT US</h2>
            </div>
            <div id="contact-us" className="section">
                <h2 className="highlight">CONTACT US</h2>
            </div>
        </div>
    )
}

export default Home;