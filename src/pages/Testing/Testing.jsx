import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';
import BasicCard from '../../components/BasicCard';
import TestingImage from '../../assets/testing.jpg';
import validator from 'validator';
import './Testing.scss';
import HorizontalBanner from '../../components/HorizontalBanner/HorizontalBanner';

const Testing = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [testType, setTestType] = useState(1);

    const handleChange = setInput => e => {
        e.preventDefault();
        if(e.target.value.length >= 150) return;
        setInput(e.target.value);
    }
    const submit = (e) => {
        e.preventDefault();
        if(!validator.isEmail(email)) return;
        let data = {
            fname: fname,
            lname: lname,
            email: email
        };
        console.log(data);
    }

    return (
        <div className="testing--wrapper">
            <PageHeader pageTitle='PHARMACOGENETIC TESTING AND CONSULTATION' pageImage={TestingImage}/>
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

            <HorizontalBanner />

            <p className="description">All fields are required.</p>
            <form>
                <input id="fname" placeholder="First Name" onChange={handleChange(setFname)} type='text'/>
                <input id="lname" placeholder="Last Name" onChange={handleChange(setLname)} type='text'/>
                <input id="email" placeholder="Email Address" onChange={handleChange(setEmail)} type='text'/>

                <p className="description">Test Type:</p>

                <button onClick={submit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Testing;