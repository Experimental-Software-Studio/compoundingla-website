import React from 'react';
import './Compounding.scss';
import CompoundingImageHeader from '../../assets/compounding-header.jpg';
import CompoundingImage from '../../assets/compounding-min.jpg';
import CompoundingImage2 from '../../assets/compounding-2-min.jpg';
import CompoundingImage3 from '../../assets/compounding-3-min.jpg';
import PageHeader from '../../components/PageHeader';
import BasicCard from '../../components/BasicCard';
import HorizontalBanner from '../../components/HorizontalBanner';
import submitForm from '../../formSubmit';

const Compounding = () => {
    return (
        <div className="compounding--wrapper">
            <PageHeader pageTitle='COMPOUNDING' pageImage={CompoundingImageHeader}/>
            <p className="description">
                Our compounding pharmacist has extensive experience in compounding and pharmaceutical formulations. We prepare custom medications to dispense them in various forms such as lotions, creams, suppositories, transdermal gels, and more. In addition, we can also follow a doctor’s unique prescription to make a medication stronger or weaker as it best fits each patient, or even add a preferred flavoring. 
            </p>
            <BasicCard title='Adult and Pediatric Compounding' image={CompoundingImage}>
                <p>
                    Most commonly compounded products:
                    <br />
                    Magic MouthWash
                    <br />
                    Enalapril Oral Suspension
                    <br />
                    Carvedilol Oral Suspension 
                </p>
            </BasicCard>
            <BasicCard title='Vet Compounding' image={CompoundingImage2}>
                 <p>
                    Amitriptyline Oral Liquid 
                    <br />
                    Amitriptyline (Cat/Topical)
                    <br />
                    Amlodipine (Cat/Topical)
                    <br />
                    Atenolol (Cat/Topical)
                    <br />
                    Expand to see more.
                </p>
            </BasicCard>
            <BasicCard title='Customized Compounding Services' image={CompoundingImage3}>
                <p>
                    Using our expertise in formulation development, we assist clients/patients develop a customized compound/product to be brought to the market.
                </p>
            </BasicCard>
            <HorizontalBanner title='Contact Form'/>
            <p className="description centered">All fields are required.</p>
            <form 
                onSubmit={submitForm}
                action="https://formspree.io/xvowjvoz"
                method="POST"
                encType="multipart/form-data"
            >
                <input id="fname" name="first name" placeholder="First Name" type='text'/>
                <input id="lname" name="last name" placeholder="Last Name" type='text'/>
                <input id="email" name="email" placeholder="Email Address" type='email'/>
                <input id="phone" name="phone number" placeholder="Telephone Number" type='tel'/>

                <p className="centered description">Please type in the prescription name.</p>

                <input id="prescription" name="prescription" placeholder="Prescription" type='text'/>

                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Compounding;