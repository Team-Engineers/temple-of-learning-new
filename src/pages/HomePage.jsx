import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/footer/Footer'
import AboutUs from '../Components/home/AboutUs'
import Arsenal from '../Components/home/Arsenal'
import CallBack from '../Components/home/CallBack'
import Testimonials from '../Components/home/Testimonials'
import WhyJoin from '../Components/home/WhyJoin'

const HomePage = () => {
  return (
    <div className=' overflow-hidden'>
      <Navbar />
      {/* <Banner /> */}
      <AboutUs />
      <Arsenal />
      <WhyJoin />
      <Testimonials />
      <CallBack />
      <Footer />
    </div>
  )
}

export default HomePage