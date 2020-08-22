import React from 'react';
import './HorizontalBanner.scss';

const HorizontalBanner = ({title='CONTACT FORM'}) => {
    return (
        <div className="horizontal-banner">
            <h2>{title}</h2>
        </div>
    )
}

export default HorizontalBanner;