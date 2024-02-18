import React, { useState } from 'react';
import './Style.css';
import PhoneIcon from './Phone.png';
import EnvelopeIcon from './Envelope.png'
import FacebookIcon from './Facebook.png';
import LinkdinIcon from './LinkedIn.png';
import InstagramIcon from './Instagram.png';
import LocationIcon from './Location.png';
import GoogleIcon from './Google.png';
import Ellipse from './Ellipse 7.png';

function Contact() {
    const [firstName, setFirstName] = useState(''); // Default value for first name
    const [lastName, setLastName] = useState(''); // Default value for last name
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [school, setSchool] = useState('');
    const [state, setState] = useState('');
    const [classCourse, setClassCourse] = useState('');
    const [inquiry, setInquiry] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
      
    };

    return (
        <div className="contact-container">
            <h1 className='heading-container'>Request a Call</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' className="placeholder-style" required />
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' className="placeholder-style1" required />
                </div>
                <div className="form-group">
                    <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' className="placeholder-style2" required />
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'className="placeholder-style3" required />
                </div>
                <div className="form-group">
                    <input type="text" id="school" value={school} onChange={(e) => setSchool(e.target.value)} placeholder='School' className="placeholder-style4" />
                </div>
                <div className="form-group">
                    <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} placeholder='state' className="placeholder-style5" />
                </div>
                <div className="form-group">
                    <input type="text" id="classCourse" value={classCourse} onChange={(e) => setClassCourse(e.target.value)} placeholder='Class/Course' className="placeholder-style6" />
                </div>
                <div className="form-group">
                    <textarea id="inquiry" value={inquiry} onChange={(e) => setInquiry(e.target.value)} placeholder='Inquiry about available programs' className="placeholder-style7" />
                </div>
                <button className='button' type="submit">Request</button>
            </form>
            <div class="contact-card">
                 <h2>Contact Us</h2>
                <p>Our team will get in touch with you promptly upon form submission.</p>
            <div class="contact-details">
                <p className='p1'>
                <img src={PhoneIcon} alt="Phone" className="phone-icon" />
                    +91-98100 33495 <br/>
                    011-45 019 365</p>
                <p className='p3'> <img src={EnvelopeIcon} alt="envelope" className="envelope-icon" />info@templeoflearning.com</p>
                <p className='p4'> <img src={LocationIcon} alt="location" className="location-icon" />Head Office <br/>
                L-3, Kanchanjunga Building <br/> Barakhamba Road,<br/>Connaught Place <br/> New Delhi - 110001</p>
                <div class="social-icons">
                     <img src={FacebookIcon} alt="Facebook" class="icon" />
                    <img src={InstagramIcon} alt="Instagram" class="icon" />
                    <img src={GoogleIcon} alt="Google" class="icon" />
                    <img src={LinkdinIcon} alt="LinkedIn" class="icon" />
            </div>

                <div className="eclipse">
                <img src={Ellipse} alt="ellipse" class="eclipse" />
                </div>
            </div>
        </div>

        </div>
    );
}

export default Contact;
