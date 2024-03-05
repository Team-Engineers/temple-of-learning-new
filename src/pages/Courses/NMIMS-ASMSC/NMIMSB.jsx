import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';


function NMIMSB() {
    const [courses] = useState([
        {
            title: "COURSE:",
            description: "3-year full time Bachelor of Commerce, Honours (B.Com (Hons.) program covering 4 subjects each trimester over 9 trimesters; which is 36 subjects in all.",
        },
        {
            title: "",
            description: "The emphasis of the B.Com (Hons.) course is to impart to the student's specialized skill sets in the areas of finance, accounting and taxation with a view to careers in financial services. While there is enough diversity in the knowledge base for the B. Com graduates to excel in any field of enterprise of their choice, the primary focus is for them to function as top notch executives in the financial services industry in different fields of operations.",
        },
        {
            title: "ELIGIBILITY:",
            description: "Must have obtained a minimum of 50% aggregate marks at 10+2 or equivalent examination for being eligible to B.Com. (Hons.) program.",
        },
        {
            description: "Candidate's passing in Mathematics/ Statistics at 10+2 or equivalent exam is compulsory."
        },
        {
            title: "SEATS: 120"
        },
        {
            title: "Entrance Test Pattern:",
            description: "NPAT (UG) 2017 for B.Com (Hons.) would be an objective type multiple-choice test. (There will be no descriptive type of questions)."
        },
        {
            description: "NPAT (UG) 2017 will comprise the following:"
        },
        {

            title: "Entrance Test Date: 30th May 2017 Entrance Test Pattern:"
        }
    ]);
    return (
        <div>
            <div className="">
                <div>
                    <Navbar />
                </div>
                <div className="main max-w-[1280px] mx-auto relative overflow-hidden text-left text-base text-steelblue-200 font-inter">
                    <div className="bg-[#C4F7D1] absolute inset-0 z-[-1] filter blur-[75px] w-56 h-48 border-black top-32 ">
                    </div>
                    <div className="relative ">
                        <p className=" mt-8 ml-8 text-4xl font-semibold underline-offset-2">NMIMS Anil Surendra Modi School Of Commerce</p>
                    </div>
                    {courses.map((course, index) => (
                        <div key={index} className="mt-6 ml-8 mr-8 justify-center">
                            <b className='text-[#0D88CB]'>{course.title}</b>
                            <span className="block mt-2">{course.description}</span>
                        </div>
                    ))}
                    <div className="mt-8 ml-8 w-[1200px]">
                        <div className="self-stretch rounded bg-darkslategray overflow-hidden"></div>
                        <table className="table-auto w-full">
                            <thead>
                                <tr className="bg-[#0D88CB] text-white">
                                    <th className="py-3 px-4 font-semibold">Section</th>
                                    <th className="py-3 px-4 font-semibold">Subject</th>
                                    <th className="py-3 px-4 font-semibold">Number of Questions</th>
                                    <th className="py-3 px-4 font-semibold">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=" ">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">1</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Proficiency in English Language</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">50</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">120 Minutes</td>
                                </tr>
                                <tr className=" ">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">2</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Quantitative & Numerical Ability</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">50</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                </tr>
                                <tr className=" ">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">3</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Reasoning & General Intelligence</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">50</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-6 ml-8 mr-8 justify-center mb-3'>
                        <p className='mb-3 mt-3'>For each question for which a wrong answer is marked, 1/4th of the marks allotted to those questions will be deducted as penalty. Type of questions and difficulty level of Tests will be on SAT Pattern.</p>
                    </div>
                    <div className='mt-6 ml-8 mr-8 justify-center'>
                        <b className='text-[#0D88CB]'>Program Course Fee: Rs 1,10,000 for 1st Year</b>
                    </div>
                    <div className='mt-6 ml-8 mr-8 justify-center'>
                        <b className='text-[#0D88CB]'>Entrance Test Date: 30th May 2017 Entrance Test Pattern:</b>
                    </div>
                    <div className="mt-8 ml-8 w-[1200px]">
                        <div className="self-stretch rounded bg-darkslategray overflow-hidden">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr className="bg-[#0D88CB] text-white">
                                        <th className="py-3 px-4 font-semibold">First Year (F.Y.B.Com.)</th>
                                        <th className="py-3 px-4 font-semibold">Second Year (S.Y.B.Com.)</th>
                                        <th className="py-3 px-4 font-semibold">Third Year (T.Y.B.Com.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-[#0D88CB] text-white">
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">(Semester – I, Semester – II)</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">(Semester – III, Semester – IV)</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">(Semester V& Semester VI)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Business Economics Paper I - Micro</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Business Economics Paper II</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Business Economics Paper - III</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Economics</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Development issues in the Indian economy</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Commerce Paper I - Business System</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Commerce Paper II : Fundamentals of Marketing & Human Resource</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Special Subjects: Financial accounting and auditing: Paper III, IV, V or Business Management Paper III, IV, V</td>
                                    </tr>
                                    <tr className=" ">
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Accounts and Financial Management</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Accounts and Financial Management</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Special Subjects: Financial accounting and auditing: Paper III, IV, V or Business Management Paper III, IV, V</td>
                                    </tr>
                                    <tr className=" ">
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Paper I</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Paper II</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Financial accounting and auditing: Paper </td>
                                    </tr>
                                    <tr className=" ">
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">III, IV, V or </td>
                                    </tr>
                                    <tr className=" ">
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Business Management Paper III, IV, V </td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Business Communication</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Business Law</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Applied Component Combinations (any one) : Advertising, Computer programming, Direct & Indirect Taxation and Psychology of Human Behaviour at Work, Computer Systems and Psychology of Human Behaviour at work, Export Marketing and Psychology of Human Behaviour at work, Computer Systems and Export Marketing</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Mathematical and Statistical Techniques</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Applied Component (any one) :</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Advertising</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Direct & Indirect Taxation and Psychology of Human Behaviour at Work</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Computer programming</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Psychology of Human Behaviour at Work</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Computer Systems and Psychology of Human Behaviour at work</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Human Behaviour at work</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Foundation Course Paper I</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Foundation Course Paper II</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Operations Research and Direct & </td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Indirect Taxation</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Computer Systems and Operations Research</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Export Marketing and Psychology of Human Behaviour at work</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Human Behaviour at work</td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Human Behaviour at work</td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                    </tr>
                                    <tr>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                                        <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Computer Systems and Export Marketing</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <Link to="/login" className="relative bg-[#0D88CB] px-[100px] rounded-3xl p-3 flex text-center justify-center text-white text-[30px] items-center my-5 ">Register</Link>
            </div>
            <Footer />
        </div>
    )
}

export default NMIMSB
