import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer'
import AboutUs from '../components/home/AboutUs'
import WhyJoin from '../components/home/WhyJoin'
import Arsenal from '../components/home/Arsenal'
import CallBack from '../components/home/CallBack'
import Testimonials from '../components/home/Testimonials'

const HomePage = () => {
  return (
    <div className=' overflow-hidden'>
        <Navbar/>
        <AboutUs/>
        <Arsenal/>
        <WhyJoin/>
        <Testimonials/>
        <CallBack/>
        <Footer/>
    </div>
  )
}

export default HomePage