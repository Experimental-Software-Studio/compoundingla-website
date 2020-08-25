import React, {useState} from 'react';
import './Compounding.scss';
import CompoundingImageHeader from '../../assets/compounding-header.jpg';
import CompoundingImage from '../../assets/compounding-min.jpg';
import CompoundingImage2 from '../../assets/compounding-2.jpg';
import CompoundingImage3 from '../../assets/compounding-3.jpg';
import PageHeader from '../PageHeader';
import BasicCard from '../BasicCard/BasicCard';
import HorizontalBanner from '../../components/HorizontalBanner/HorizontalBanner';
import validator from 'validator';

const Compounding = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [prescription, setPrescription] = useState('');

    const handleChange = setInput => e => {
        e.preventDefault();
        if(e.target.value.length >= 150) return;
        setInput(e.target.value);
    }
    const submit = (e) => {
        e.preventDefault();
        if(!validator.isEmail(email) || !validator.isMobilePhone(phone)) return;
        let data = {
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            prescription: prescription
        };
        console.log(data);
    }
    const upload = (e) => {
        e.preventDefault();
        console.log('data');
    }

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
            <HorizontalBanner />
            <p className="description centered">All fields are required.</p>
            <form>
                <input id="fname" placeholder="First Name" onChange={handleChange(setFname)} type='text'/>
                <input id="lname" placeholder="Last Name" onChange={handleChange(setLname)} type='text'/>
                <input id="email" placeholder="Email Address" onChange={handleChange(setEmail)} type='email'/>
                <input id="phone" placeholder="Telephone Number" onChange={handleChange(setPhone)} type='tel'/>

                <p className="centered description">Please type in the prescription name or upload a file.</p>

                <input id="prescription" placeholder="Prescription" onChange={handleChange(setPrescription)} type='text'/>

                <button className="upload" onClick={upload}>UPLOAD FILE</button>
                <button onClick={submit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Compounding;