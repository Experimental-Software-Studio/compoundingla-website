import React from 'react';
import './Immunization.scss';
import ImmunizationImage from '../../assets/immunization-min';
import ImmunizationImage1 from '../../assets/immunization-1-min.jpg';
import ImmunizationImage2 from '../../assets/immunization-2-min.jpg';
import PageHeader from '../../components/PageHeader';
import BasicCard from '../../components/BasicCard/BasicCard';

const Immunization = () => {
    return (
        <div className="immunization--wrapper">
            <PageHeader pageTitle='IMMUNIZATION' pageImage={ImmunizationImage}/>
            <p className="description">
                We are a Medicare part B mass immunizer, providing all vaccines you need.            
            </p>
            <BasicCard title='No Appointment / Waiting in Line' image={ImmunizationImage1}>
                <p>
                    Drop-in immunizations are available
                </p>
            </BasicCard>
            <BasicCard title='Home Visit' image={ImmunizationImage2}>
                <p>
                    If you are unable to come to the pharmacy, please give us a call to schedule a home visit by our immunizers.
                </p>
            </BasicCard>
            <div className="videos">
                <div className="section">
                    <h3>Shingles Vaccine</h3>
                    <iframe title="https://www.youtube.com/embed/YqEv7ZoE6uw" src="https://www.youtube.com/embed/YqEv7ZoE6uw" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="section">
                    <h3>Flu Vaccine</h3>
                    <iframe title="https://www.youtube.com/embed/YNd6Hvgitwo" src="https://www.youtube.com/embed/YNd6Hvgitwo" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="section">
                    <h3>Pneumonia Vaccine</h3>
                    <iframe title="https://www.youtube.com/embed/SVX9kBOI3Pg" src="https://www.youtube.com/embed/SVX9kBOI3Pg" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Immunization;
