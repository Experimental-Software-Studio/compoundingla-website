import React from 'react';
import PageHeader from '../../components/PageHeader';
import RefillImage from '../../assets/refill-min.jpg';
import submitForm from '../../formSubmit';
import './Refill.scss';

const Refill = () => {
    return (
        <div className="refill--wrapper">
            <PageHeader pageTitle='REFILL' pageImage={RefillImage} />
            <p>All fields are required.</p>
            <form
                onSubmit={submitForm}
                action="https://formspree.io/xoqkopjg"
                method="POST"
            >
                <input id="fname" name="first name" placeholder="First Name" type='text'/>
                <input id="lname" name="last name" placeholder="Last Name" type='text'/>
                <input id="email" name="email" placeholder="Email Address" type='email'/>
                <input id="phone" name="phone number" placeholder="Telephone Number" type='tel'/>
                <input id="prescription" name="prescription number" placeholder="Prescription #"  type='text'/>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Refill;