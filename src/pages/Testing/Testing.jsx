import React, {useState, useEffect} from 'react';
import validator from 'validator';
import HorizontalBanner from '../../components/HorizontalBanner/HorizontalBanner';
import PageHeader from '../../components/PageHeader';
import BasicCard from '../../components/BasicCard';
import TestingImageHeader from '../../assets/testing-header.jpg';
import TestingImage from '../../assets/testing.jpg';
import './Testing.scss';

const Testing = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [testType, setTestType] = useState(1);

    const handleChange = setInput => e => {
        e.preventDefault();
        if(e.target.value.length >= 200) return;
        setInput(e.target.value);
    }
    const onTestSelect = (e) => {
        setTestType(Number(e.target.value));
    }
    const submit = (e) => {
        e.preventDefault();
        if(!validator.isEmail(email)) return;
        let data = {
            fname: fname,
            lname: lname,
            email: email,
            type: testType === 1 ? "Covid-19 virus detection (PCR)" : "Covid-19 antibody detection"
        };
        console.log("Submitting form...", data);
    }

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
            <form>
                <input id="fname" placeholder="First Name" onChange={handleChange(setFname)} type='text'/>
                <input id="lname" placeholder="Last Name" onChange={handleChange(setLname)} type='text'/>
                <input id="email" placeholder="Email Address" onChange={handleChange(setEmail)} type='email'/>

                <p className="description test">Test Type:</p>
                <div className="radio-holder">
                    <label>
                        <input type="radio" value={1} checked={testType === 1} onChange={onTestSelect} />
                        Covid-19 virus detection (PCR)
                    </label>
                    <label>
                        <input type="radio" value={2} checked={testType === 2} onChange={onTestSelect} />
                        Covid-19 antibody detection 
                    </label>
                </div>
                <button onClick={submit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Testing;