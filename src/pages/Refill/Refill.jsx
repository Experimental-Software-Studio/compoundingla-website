import React, {useState} from 'react';
import PageHeader from '../PageHeader';
import RefillImage from '../../assets/refill.jpg';
import './Refill.scss';

const Refill = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [prescription, setPrescription] = useState('');
    
    const handleChange = (e) => {
        console.log(e.target);
    }
    const submit = (e) => {
        e.preventDefault();
        console.log("submit");
    }
    return (
        <div className="refill--wrapper">
            <PageHeader pageTitle='REFILL' pageImage={RefillImage} />
            <form>
                <input id="fname" onChange={handleChange} type='text'/>
                <button onClick={submit}>submit</button>
            </form>
        </div>
    )
}

export default Refill;