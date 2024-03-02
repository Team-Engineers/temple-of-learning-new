import React from 'react'
import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
function Jamia() {
  return (
    <div className=''>
            <div>
                <Navbar />
            </div>
            <div className="main max-w-[1280px] mx-auto relative overflow-hidden text-left text-base text-steelblue-200 font-inter mt-8 ml-8 mr-8 justify-center">
                <div className="bg-[#C4F7D1] absolute inset-0 z-[-1] filter blur-[75px] w-56 h-48 border-black top-32 "></div>
                <div className="relative ">
                    <p className="text-4xl font-semibold underline-offset-2 ml-8">Jamia Millia Islamia Law</p>
                </div>
                <div className='mt-6 ml-8 mr-8 justify-center'>
                    <div className='justify-center'>
                   <b className='text-[#0D88CB]'>TOTAL SEATS :</b>
                   </div>
                   <div className='mt-2 mb-2'> 
                   <b className='text-[#0D88CB] '>Entrance Date:</b>
                   </div>
                   <div className='mt-2 mb-2'>
                   <b className='text-[#0D88CB]'>Eligibility:</b>
                   </div>
                   <ul>
                    <li>Passed the class XII examination in the 10 + 2 scheme or its equivalent in any discipline securing in the aggregate not less than 50% of the total marks in all the core subjects and English Language put together and</li>
                    <li>Age per Bar Council of India rules, the age bar for the candidates seeking admission into the programme is 20 years in case of general category applicants and 22 years in case of applicants from SC,ST and OBC as on 1st July of the year of admission.</li>
                   </ul>
                   <div className='mt-2 mb-2' >
                   <b className='text-[#0D88CB] mt-2 mb-2'>Total Seats :</b>
                   </div>
                   <p className='mb-3'>BA LLB(Hons) :60</p>
                   <p className='mb-3'>BA LLB(Hons) Self Financed: 60</p>
                </div>
                <div className='mt-6 ml-8 mr-8 justify-center'>
                    <b className='text-[#0D88CB]'>Admission Test:</b>
                   <ul className="list-disc pl-5 pt-3">
                    <li className="mb-3">Admission to the B.A.,LL.B. (Hons.) first year shall be made on the basis of an All-India Entrance Test.</li>
                    <li className="mb-3">The standard of Admission Test will be of class 12 (10+2 system) of the CBSE, Delhi. The test ordinarily will be of 2 Hours duration with 150 objective type questions</li>
                    <li className="mb-3">Legal language English including Comprehension 30</li>
                    <li className="mb-3">Current Affairs 30</li>
                    <li className="mb-3">Legal Aptitude/Legal Reasoning 40</li>
                    <li className="mb-3">General Studies 40</li>
                    <li className="mb-3">Elementary Mathematics (Numerical Ability) 10</li>
                   </ul>
                </div>
                <div className='mt-6 ml-8 mr-8 justify-center'>
                    <b className='text-[#0D88CB] '>Total 150 Questions</b>
                    <p className='mt-3'>Maximum Marks is 150 with Negative marking of 0.25</p>
                </div>
                <div className='mt-6 ml-8 mr-8 justify-center mb-3'>
                    <b className='text-[#0D88CB] '>Fee Structure : </b>
                    <p className='mb-3 mt-3'>BA LLB(Hons): Rs 10,300</p>
                    <p className='mb-3'>BA LLB(Hons) Self Financed : Rs 40,400</p>
                </div>
                <div className="mt-8 ml-48 w-[1080px] ">
          <div className="self-stretch rounded bg-darkslategray overflow-hidden flex justify-center">
            <table className="w-full ">
              <thead>
                <tr className="bg-[#0D88CB] text-white flex justify-center">
                  <th className="py-3 px-4 font-semibold">COURSE CURRICULUM : NOT AVAILABLE</th>
                  </tr>
                  </thead>
                  </table>
                  </div>
                </div>
    </div>
    <div className='flex justify-center'>
    <Link to="/login" className="relative bg-[#0D88CB] px-[100px] rounded-3xl p-3 flex text-center justify-center text-white text-[30px] items-center my-5 ">Register</Link>
  </div>
  <Footer/>
    </div>
  )
}

export default Jamia
