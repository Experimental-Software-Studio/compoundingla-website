import React from 'react';
import {Link} from 'react-router-dom';
import './ServiceCard.scss';

const ServiceCard = ({title, image, description, path}) => {
    return (
        <div className="service-card--wrapper">
            <div className="content">
                <h3>{title}</h3>
                <img src={image} alt={title + ' banner'} />
                <p>{description}</p>
                <Link to={process.env.PUBLIC_URL + path}>LEARN MORE</Link>
            </div>
        </div>
    )
}

export default ServiceCard;
