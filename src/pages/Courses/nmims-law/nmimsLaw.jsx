import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/Footer';

function NMIMSLaw() {
  return (
    <div className=''>
    <div>
        <Navbar />
    </div>
    <div className="main max-w-[1280px] mx-auto relative overflow-hidden text-left text-base text-steelblue-200 font-inter mt-8 ml-8 mr-8 justify-center">
        <div className="bg-[#C4F7D1] absolute inset-0 z-[-1] filter blur-[75px] w-56 h-48 border-black top-32 "></div>
        <div className="relative ">
            <p className="text-4xl  font-semibold underline-offset-2 ml-8 ">Nmims School of law</p>
        </div>
        <div className='mt-6 ml-8 mr-8 justify-center'>
          <b className='text-[#0D88CB]'>THE SCHOOL OF LAW OFFERS THE FOLLOWING 5-YEAR INTEGRATED PROGRAMS:</b>
          <ul className="list-disc pl-5 pt-3">
            <li className="mb-3">B.A., LL.B. (Hons.)</li>
            <li className="mb-3">B.B.A., LL.B. (Hons.)</li>
          </ul>
        </div>
        <div className='mt-6 ml-8 mr-8 justify-center'>
          <b className='text-[#0D88CB]'>Eligibility:</b>
          <p className=' justify-center pt-3'>(a) Passed Higher Secondary School (10+2) or an equivalent examination in first attempt with minimum 50% marks. (b) Not completed 25 years of age as on the date specified in admission guidelines for the academic session.</p>
        </div>
        <div className='mt-6 ml-8 mr-8 justify-center'>
        <b className='text-[#0D88CB]'>Selection Criteria: </b>
        <p className=' justify-center pt-3 pb-3'> As per CLAT 2022</p>
        <b className='text-[#0D88CB]'>Seats Availability : </b>
        <p className=' justify-center pt-3'>60 each in each course (Total 120)</p>
        </div>
        </div>
        <div className='flex justify-center'>
    <Link to="/login" className="relative bg-[#0D88CB] px-[100px] rounded-3xl p-3 flex text-center justify-center text-white text-[30px] items-center my-5 ">Register</Link>
  </div>
  <Footer/>
        </div>
  )
}

export default NMIMSLaw 
