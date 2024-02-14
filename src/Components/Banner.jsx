import React from 'react';
import girlImage from '../image/girl.png'; 
import '../App.css';

const Banner = () => {
    return (
        <div className="banner-container">
             <div className="text-container">
                <h1 className='h1'>
                    <b>Empowering Excellence through<br /> Professional Growth and<br /> Lifelong Learning.</b>
                </h1>
                <p className='p'>Transform Your Career with Live Tech Bootcamps and<br/> Online Classes - Ignite Your Journey or Supercharge Your Success!</p>
                <div className="button-container">
                    <button className="button1">Get Started</button>
                    <button className="button">Explore Courses</button>
                </div>
            </div>
            <div className="image-container">
                <img src={girlImage} alt="Girl" className="banner-image" />
            </div>
            <div className="gradient-ellipse"></div>
            <div className="gradient-ellipse1"></div>
        </div>
    );
}

export default Banner;
