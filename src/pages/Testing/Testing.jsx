import React from 'react';
import HorizontalBanner from '../../components/HorizontalBanner';
import PageHeader from '../../components/PageHeader';
import BasicCard from '../../components/BasicCard';
import TestingImageHeader from '../../assets/testing-header-min.jpg';
import TestingImage from '../../assets/testing-min.jpg';
import submitForm from '../../formSubmit';
import './Testing.scss';

const Testing = () => {

    return (
        <div className="testing--wrapper">
            <PageHeader pageTitle='PHARMACOGENETIC TESTING AND CONSULTATION' pageImage={TestingImageHeader}/>
            <p className="description">
                We provide on-site Point-of-Care testing for:             
            </p>
            <BasicCard title='Covid-19 Diagnostic Test' image={TestingImage}>
                <p>
                    Rapid POC test for detection of the novel coronavirus, SARS-CoV-2, the causative agent of Covid-19.                 
                </p>
            </BasicCard>
            <BasicCard title='Covid-19 IgG/IgM Antibody Test' image={TestingImage}>
                <h3>For mental health & psychiatric medications</h3>
                <p>
                    Rapid POC test for detection of IgM and IgG antibody against the novel coronavirus, SARS-CoV-2, the causative agent of Covid-19. 
                </p>
            </BasicCard>

            <HorizontalBanner title='Contact Form'/>

            <p className="description">All fields are required.</p>
            <form
                onSubmit={submitForm}
                action="https://formspree.io/mlepyogz"
                method="POST"
            >
                <input id="fname" name="first name" placeholder="First Name" type='text'/>
                <input id="lname" name="last name" placeholder="Last Name" type='text'/>
                <input id="email" name="email" placeholder="Email Address" type='email'/>

                <p className="description test">Test Type:</p>
                <div className="radio-holder">
                    <label>
                        <input type="radio" name="test type" value="Covid-19 virus detection (PCR)" defaultChecked/>
                        Covid-19 virus detection (PCR)
                    </label>
                    <label>
                        <input type="radio" name="test type" value="Covid-19 antibody detection"/>
                        Covid-19 antibody detection 
                    </label>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Testing;