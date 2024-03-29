import React from 'react';
import AboutImage from '../assets/images/About1.png';
import Navbar from '../components/Navbar/Navbar';

const About = () => {
    return (
        <div className='container mx-auto h-screen'>
            <Navbar />
            <div className="heading ">
                <h1 className='h1 font-bold text-[40px] mx-[2vw] my-10'>About Us</h1>
            </div>
            <div className='flex  mx-[2vw]'>
                <div className='paragraph max-w-[55vw] mb-20'>
                    <p className='p1 my-1'>Temple of Learning is an educational institution that remains committed to emerging as one of the leading institutes, thereby transforming the budding youth into successful individuals. Temple of Learning means ‘the first one’: just as the name suggests, we leave no stone unturned in catering to the aspirations of several students. The flourishing organization has been adept in providing aid to more than 80,000 students, thriving to pave their careers remarkably in the race for success. At Temple of Learning, we attempt to enhance the overall personalities of individuals who splurge both with intelligence and prowess.</p>

                    <p className='p2 my-5'>At Temple of Learning, we attempt to enhance the overall personalities of individuals who splurge both with intelligence and prowess. This leading organization is the epitome of hard work, blended with aspiration and perseverance. Its optimistic approach helps many achieve their career goals by brushing their strengths. Just as our ethos suggests, Temple of learning ‘Leads the Way’, urging dynamic individuals to overcome their weaknesses and pitfalls. It adheres to delivering a peripheral direction where success is the epicenter of everything.</p>

                    <p className='p3 my-1'>Throughout the years of rapid evolution, the institute altogether has been embracing brilliance, knowledge and education that help students foster and discover their aptitude. Temple of learning directs students to cling on to these stimulating aptitudes, so that they can compete, excel and ace in a number of entrance examinations, framing a bright picture of their future.</p>
                </div>
                <div className="image-container ">
                    <img src={AboutImage} alt="About" className="about-image h-[60vh] w-[50vw]" />
                </div>
            </div>
            <div className="gradient-ellipse "></div>
            <div className='relative top-10'>
                <div className="gradient-ellipse-2 "></div>
            </div>
        </div>
    );
}

export default About;
