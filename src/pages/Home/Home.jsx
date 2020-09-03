import React, {useState, useEffect} from 'react';
import ServiceCard from './ServiceCard';
import services from '../../assets/services';
import TestimonialImage from '../../assets/testimonial.jpg';
import AboutUsImage from '../../assets/about-us-min.jpg';
import Hero1 from '../../assets/hero-1-min.jpg';
import Hero3 from '../../assets/consultation-min.jpg';
import Hero4 from '../../assets/hero-2-min.jpg';
import Hero5 from '../../assets/compounding-2-min.jpg';
import Hero6 from '../../assets/refill-min.jpg';

import Carousel, {Dots} from '@brainhubeu/react-carousel';
import HorizontalBanner from '../../components/HorizontalBanner';
import {ReactComponent as CheckIcon} from './check.svg';
import TESTIMONIALS from '../../assets/testimonials.json';
import '@brainhubeu/react-carousel/lib/style.css';
import './Home.scss';

const heroImages = [Hero1, TestimonialImage, Hero3, Hero4, Hero5, Hero6];
const heroDescriptions = ['Personalized Compounding Service', 'Family-owned and operated', 'No long lines', 'Great service', 'Friendly Staff', 'Free delivery/shipping'];
const number = heroImages.length;

const Home = () => {
    const [heroValue, setHeroValue] = useState(0);
    const [testimonialValue, setTestimonialValue] = useState(0);
    useEffect(() => {
        let slideshow = setInterval(() => {
            setHeroValue((heroValue + 1) % number);
        }, 8000);
        return () => {
            clearInterval(slideshow);
        }
    }, [heroValue]);
    return (
        <div className="home--wrapper">
            <div id="hero">
                <Carousel 
                    slides={heroImages.map((e, index) => <img key={index} src={e} alt=' '/>)}
                    value={heroValue}
                    onChange={setHeroValue} 
                    animationSpeed={250}
                />
                <div className="dots-holder">
                    <Dots value={heroValue} number={number} onChange={setHeroValue}></Dots>
                </div>
                <div className="list">
                    <div className="title">WHY CHOOSE US?</div>
                    <div className="description"><CheckIcon /> {heroDescriptions[heroValue]}</div>
                </div>
            </div>
            <div id="services" >
                <h2 className="highlight">SERVICES</h2>
                <div className="list">
                    <div className="list-inner">
                    {services.map(service => (<ServiceCard key={service.path} {...service}/>))}
                    </div>
                </div>
                <p className="note">
                    In addition to CompoundingLA’s services, since 1964, our retail pharmacy, <span>Portola Pharmacy</span>, has been serving the community and offers prescription services. 
                </p>
            </div>
            <div id="testimonials">
                <h2 className="highlight">TESTIMONIALS</h2>
                <HorizontalBanner>
                    <Carousel 
                        slides={TESTIMONIALS.map((e, index) => (
                            <div className="quote">
                                <h4>“{e.testimonial}”</h4>
                                <p>- {e.name}</p>
                            </div>
                        ))}
                        value={testimonialValue}
                        onChange={setTestimonialValue} 
                        animationSpeed={250}
                    />
                    <div className="dots-holder">
                        <Dots value={testimonialValue} number={TESTIMONIALS.length} onChange={setTestimonialValue}></Dots>
                    </div>
                </HorizontalBanner>
                <img src={TestimonialImage} alt="testimonials"/>
            </div>
            <div id="about-us">
                <h2 className="highlight">ABOUT US</h2>
                <img src={AboutUsImage} alt="Compounding LA Team"/>
                <p>
                    Compounding Pharmacy Associates and Consultants is owned and operated by Geneva Chen, Pharm.D, Ph.D. Dr. Chen has had extensive training in pharmacy compounding and consulting, and has also worked as a research scientist and pharmacy college professor. She is highly dedicated to her patients and practice, working closely with physicians and patients to achieve excellent results for each custom-made prescription. ​ 
                    <br />    
                    <br />    
                    Dr. Chen has won several awards, including the 2015 "Pharmacist of the Year," presented by the San Gabriel Valley Pharmacist Association. Dr. Chen has also been invited to present her research to professional associations, such as the American Association for Cancer Research, and has published articles in prestigious journals such as Pharmaceutical Research and the American Journal of Pharmacy Educator.
                </p>
            </div>
            <div id="contact-us">
                <h2 className="highlight">CONTACT US</h2>
                <div>
                    <img src={AboutUsImage} alt="Compounding LA Team"/>
                </div>
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.376394547589!2d-118.17987948421455!3d34.08549688059678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c44b4194a45f%3A0x2f26395d23c4fdf9!2s3408%20N%20Eastern%20Ave%2C%20Los%20Angeles%2C%20CA%2090032!5e0!3m2!1sen!2sus!4v1597909279826!5m2!1sen!2sus" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </div>
    )
}

export default Home;