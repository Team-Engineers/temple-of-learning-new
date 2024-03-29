import React, { useState } from 'react';
import Ellipse from '../../assets/contact/Ellipse 7.png';
import EnvelopeIcon from '../../assets/contact/Envelope.png';
import FacebookIcon from '../../assets/contact/Facebook.png';
import GoogleIcon from '../../assets/contact/Google.png';
import InstagramIcon from '../../assets/contact/Instagram.png';
import LinkdinIcon from '../../assets/contact/LinkedIn.png';
import LocationIcon from '../../assets/contact/Location.png';
import PhoneIcon from '../../assets/contact/Phone.png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './contact.css';

function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [school, setSchool] = useState('');
    const [state, setState] = useState('');
    const [classCourse, setClassCourse] = useState('');
    const [inquiry, setInquiry] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <div className='grid grid-cols-3'>
                    <div className="contact-card ">
                        <h2>Contact Us</h2>
                        <p className='p-container'>Our team will get in touch with you promptly upon form submission.</p>
                        <div className="contact-details">
                            <p className='p'>
                                <img src={PhoneIcon} alt="Phone" className="phone-icon" />
                                +91-98100 33495 <br />
                                011-45 019 365
                            </p>
                            <p className='p'>
                                <img src={EnvelopeIcon} alt="envelope" className="envelope-icon" />
                                info@templeoflearning.com
                            </p>
                            <p className='p'>
                                <img src={LocationIcon} alt="location" className="location-icon" />
                                Head Office <br />
                                L-3, Kanchanjunga Building <br />
                                Barakhamba Road,<br />
                                Connaught Place <br />
                                New Delhi - 110001
                            </p>
                            <div className="social-icons">
                                <img src={FacebookIcon} alt="Facebook" className="icon" />
                                <img src={InstagramIcon} alt="Instagram" className="icon" />
                                <img src={GoogleIcon} alt="Google" className="icon" />
                                <img src={LinkdinIcon} alt="LinkedIn" className="icon" />
                            </div>
                            <div className="eclipse">
                                <img src={Ellipse} alt="ellipse" className="eclipse" />
                            </div>
                        </div>
                    </div>
                    <div className='form-container max-w-[600px]'>
                        <h1 className='heading-container'>Request a Call</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' className="placeholder-style" required />
                                <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' className="placeholder-style" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' className="placeholder-style" required />
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className="placeholder-style" required />
                            </div>
                            <div className="form-group">
                                <input type="text" id="school" value={school} onChange={(e) => setSchool(e.target.value)} placeholder='School' className="placeholder-style" />
                                <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} placeholder='State' className="placeholder-style" />
                            </div>
                            <div className="form-group">
                                <input type="text" id="classCourse" value={classCourse} onChange={(e) => setClassCourse(e.target.value)} placeholder='Class/Course' className="placeholder-style1" />
                            </div>
                            <div className="form-group">
                                <textarea id="inquiry" value={inquiry} onChange={(e) => setInquiry(e.target.value)} placeholder='Inquiry about available programs' className="placeholder-style1" />
                            </div>
                            <button className='button' type="submit">Request</button>
                        </form>
                    </div>
                </div>
                <div className='circle'> </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
