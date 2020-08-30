import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';
import validator from 'validator';
import RefillImage from '../../assets/refill-min.jpg';
import submitForm from '../../formSubmit';
import './Refill.scss';

const Refill = () => {
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
        submitForm('refill', data);
    }
    return (
        <div className="refill--wrapper">
            <PageHeader pageTitle='REFILL' pageImage={RefillImage} />
            <p>All fields are required.</p>
            <form>
                <input id="fname" placeholder="First Name" onChange={handleChange(setFname)} type='text'/>
                <input id="lname" placeholder="Last Name" onChange={handleChange(setLname)} type='text'/>
                <input id="email" placeholder="Email Address" onChange={handleChange(setEmail)} type='email'/>
                <input id="phone" placeholder="Telephone Number" onChange={handleChange(setPhone)} type='tel'/>
                <input id="prescription" placeholder="Prescription #" onChange={handleChange(setPrescription)} type='text'/>
                <button onClick={submit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Refill;