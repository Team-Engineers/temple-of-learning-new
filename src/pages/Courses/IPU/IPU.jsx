import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';

export default function IPU() {
    const [courses] = useState([
        {
            title: "COURSE:",
            description: "Delhi-based Guru Gobind Singh Indraprastha University (GGSIPU) has announced a new degree course, Bachelor of Commerce (Honours), starting academic year 2013-14. This comes close on the heels of Delhi University breaking away from traditional commerce courses such as BCom (Hons) and BCom (Pass). B.Com is a newly introduced course at Guru Gobind Singh Indraprastha University which has hit with a high number of 12,000 applications just two days before the registration process for the academic session 2013-14 comes to an end, with B.Com being the third most opted course in the University, after the Engineering and Law programmes",
        },
        {
            title: "ELIGIBILITY:",
            description: "The University notification says the Eligibility criteria to join B.Com is a candidate must have 50% in aggregate in 10+2 examination / senior school for admission to B.Com with pass in five subjects (One language and four elective subjects) or an examination recognized as equivalent to that.",
        },
        {
            title: "SEATS:",
            description: "The University has only 1000 seats to offer the other one-eighth numbers is to be offered in Delhi University colleges. About 60 seats will be offered at each affiliated institutions offering the course.",
        },
        {
            title: "Entrance Test Date: 30th May 2017 Entrance Test Pattern:"
        }
    ]);
    return (
        <div className="">
            <div>
                <Navbar />
            </div>
            <div className="main max-w-[1280px] mx-auto relative overflow-hidden text-left text-base text-steelblue-200 font-inter">
                <div className="bg-[#C4F7D1] absolute inset-0 z-[-1] filter blur-[75px] w-56 h-48 border-black top-32 ">
                </div>
                <div className="relative ">
                    <p className=" mt-8 ml-8 text-4xl font-semibold underline-offset-2">IP University B.COM</p>
                </div>
                {courses.map((course, index) => (
                    <div key={index} className="mt-6 ml-8 mr-8 justify-center">
                        <b className='text-[#0D88CB]'>{course.title}</b>
                        <span className="block mt-2">{course.description}</span>
                    </div>
                ))}
                <div className="mt-8 ml-8 w-[1200px]">
                    <div className="self-stretch rounded bg-darkslategray overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#0D88CB] text-white">
                                    <th className="py-3 px-4 font-semibold">S. No.</th>
                                    <th className="py-3 px-4 font-semibold">Description</th>
                                    <th className="py-3 px-4 font-semibold"> Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">1</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">General English</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l border-r py-3 px-4">25%</td>

                                </tr>
                                <tr className="">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">2</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Logical reasoning</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l border-r py-3 px-4">	25%</td>

                                </tr>
                                <tr className="">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">3</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l border-r py-3 px-4">20</td>

                                </tr>
                                <tr className="">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Fundamental Accounting</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Data interpretation</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l border-r py-3 px-4">35%</td>

                                </tr>
                                <tr className="">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">4</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">	Basic general awareness</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l border-r py-3 px-4">15%</td>

                                </tr>
                                <tr>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4 col-span-2">Total</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">100%</td>
                                    <td className='border-t border-r'></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='mt-6 ml-8 mr-8 justify-center'>
                    <b className='text-[#0D88CB]'>Program Course Fee: </b>
                    <p className=' justify-center pt-3 pb-3'>NA</p>
                    <b className='text-[#0D88CB]'>Course Curriculum: </b>
                    <p className=' justify-center pt-3'>Info Not available (Total 120)</p>
                </div>
            </div>
                <div className='flex justify-center'>
    <Link to="/login" className="relative bg-[#0D88CB] px-[100px] rounded-3xl p-3 flex text-center justify-center text-white text-[30px] items-center my-5 ">Register</Link>
  </div>
  <Footer/>
        </div>
    )
}
