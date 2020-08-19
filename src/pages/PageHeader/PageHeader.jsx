import React from 'react';
import Logo from '../../assets/logo.jpg';
import './PageHeader.scss';

const PageHeader = ({pageTitle="Compounding LA", pageImage=Logo}) => {
    return (
        <div className="page-header--wrapper">
            <img src={pageImage} alt={pageTitle + ' banner'}/>
            <h1>{pageTitle}</h1>
        </div>
    )
}

export default PageHeader;