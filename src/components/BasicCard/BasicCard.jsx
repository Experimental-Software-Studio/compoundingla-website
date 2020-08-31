import React from 'react';
import './BasicCard.scss';

const BasicCard = ({image, title, children}) => {
    return (
        <div className="basic-card--wrapper">
            <div className="info">
                {title.split(' ').map(word => <span className="highlight">{word} </span>)}
                {children}
            </div>
            <img src={image} alt=" " />
        </div>
    )
}

export default BasicCard;
