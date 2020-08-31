import React from 'react';
import Logo from '../../assets/logo.png';
import './PageHeader.scss';

const PageHeader = ({pageTitle="Compounding LA", pageImage=Logo}) => {
    return (
        <div className="page-header--wrapper">
            <img src={pageImage} alt={pageTitle + ' banner'}/>
            <h2>{pageTitle}</h2>
        </div>
    )
}

export default PageHeader;