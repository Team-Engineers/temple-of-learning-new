import React from 'react';
import girlImage from '../../assets/images/girl.png';
import './banner.css';

const Banner = () => {
    return (
        <div className="relativ flex h-screen justify-center items-center mx-[100px]">
            <div className="text-container flex flex-col gap-[3vw]">
                <div>
                <h1 className='h1'>
                    <b>Empowering Excellence through<br /> Professional Growth and<br /> Lifelong Learning.</b>
                </h1>
                </div>
                <p className=''>Transform Your Career with Live Tech Bootcamps and<br /> Online Classes - Ignite Your Journey or Supercharge Your Success!</p>
                <div className="button-container mt-[3vw] ">
                    <button className="button1">Get Started</button>
                    <button className="button">Explore Courses</button>
                </div>
            </div>
            <div className="image-container ">
                <img src={girlImage} alt="Girl" className=" relative  w-[30vw] h-[60vh]" />
            </div>
            <div className="gradient-ellipse"></div>
            <div className="gradient-ellipse1"></div>
        </div>
    );
}

export default Banner;
