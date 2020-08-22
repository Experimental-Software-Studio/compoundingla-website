import React from 'react';
import './BasicCard.scss';

const BasicCard = ({image, title, children}) => {
    return (
        <div className="basic-card--wrapper">
            <div className="info">
                <h2 className="highlight">{title}</h2>
                {children}
            </div>
            <img src={image} alt=" " />
        </div>
    )
}

export default BasicCard;
