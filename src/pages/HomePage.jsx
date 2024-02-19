import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer'
import AboutUs from '../components/home/AboutUs'
import Arsenal from '../components/home/Arsenal'
import CallBack from '../components/home/CallBack'
import Testimonials from '../components/home/Testimonials'
import WhyJoin from '../components/home/WhyJoin'

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