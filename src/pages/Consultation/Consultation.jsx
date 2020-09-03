import React from 'react';
import BasicCard from '../../components/BasicCard';
import ConsultationImage from '../../assets/consultation-min.jpg';
import ConsultationImage1 from '../../assets/consultation-1.png';
import ConsultationImage2 from '../../assets/consultation-2-min.jpg';
import './Consultation.scss';
import PageHeader from '../../components/PageHeader';

const Consultation = () => {
    return (
        <div className="consultation--wrapper">
            <PageHeader pageTitle='PHARMACOGENETIC TESTING AND CONSULTATION' pageImage={ConsultationImage}/>
            <p className="description">
                We offer both comprehensive and targeted pharmacogenomic testing. BOTH tests include pre-order screening and one hour in-person/telephone consultation with a pharmacist certified in pharmacogenomics. We use our expertise to identify the most suitable test panel and testing laboratory. We take care of the entire process for you. 
            </p>
            <BasicCard title='Comprehensive Pharmacogenomics Testing' image={ConsultationImage1}>
                <p>
                    Discover how your DNA can influence your health. Using insights backed by the latest science, see how your DNA can affect your chances of developing certain health conditions. Your personalized reports break down your genetic data, the science and your personalized medication and wellness needs. 
                </p>
            </BasicCard>
            <BasicCard title='Targeted Pharmacogenomic Testing' image={ConsultationImage2}>
                <h3>For mental health & psychiatric medications</h3>
                <p>
                    This test delves deep into your genes that affects specifically your medications on mental health. We analyze how your body metabolizes your medication and more importantly, how your receptors are reacting with your psychiatric medications. With this, we can achieve optimal efficacy and at the same time, minimize any side effects.
                </p>
            </BasicCard>

            <div className="videos">
                <div className="section">
                    <h3>What is Pharmacogenomic Testing?</h3>
                    <iframe title="https://www.youtube.com/embed/WSf6vyP11aQ" src="https://www.youtube.com/embed/WSf6vyP11aQ" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="section">
                    <h3>Pharmacogenomic Testing for Mental Health</h3>
                    <iframe title="https://www.youtube.com/embed/cqN1QwRpXMU" src="https://www.youtube.com/embed/cqN1QwRpXMU" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Consultation;