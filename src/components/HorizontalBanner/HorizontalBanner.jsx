import React from 'react';
import './HorizontalBanner.scss';

const HorizontalBanner = ({title, children}) => {
    return (
        <div className="horizontal-banner">
            {title !== undefined && <h2>{title}</h2>}
            {children}
        </div>
    )
}

export default HorizontalBanner;