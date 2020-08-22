import React from 'react';
import './Immunization.scss';
import ImmunizationImage from '../../assets/immunization.jpg';
import PageHeader from '../../components/PageHeader';
import BasicCard from '../../components/BasicCard/BasicCard';

const Immunization = () => {
    return (
        <div className="immunization--wrapper">
            <PageHeader pageTitle='IMMUNIZATION' pageImage={ImmunizationImage}/>
            <p className="description">
                We are a Medicare part B mass immunizer, providing all vaccines you need.            
            </p>
            <BasicCard title='No Appointment/Waiting in Line' image={ImmunizationImage}>
                <p>
                    Drop-in immunizations are available
                </p>
            </BasicCard>
            <BasicCard title='Home Visit' image={ImmunizationImage}>
                <p>
                    If you are unable to come to the pharmacy, please give us a call to schedule a home visit by our immunizers.
                </p>
            </BasicCard>

            
        </div>
    )
}

export default Immunization;
