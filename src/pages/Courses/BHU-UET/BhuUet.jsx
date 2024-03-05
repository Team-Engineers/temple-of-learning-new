import React, { useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/Footer';

function BhuUet() {
    const [courses] = useState([
        {
            title: "PSYCHOLOGY",
            description: "Are you inquisitive about the human mind and behaviours? Do you enjoy reading people closely and analyzing their every step? Are you good at listening to people and empathizing with them? Are you the person people turn to when looking for any advice? Then, Psychology is the field for you! This program generally offers education in human behavior and related sciences, along with core psychology course work.",
        },
        {
            title: "Why Psychology?",
            description: "It helps broaden the realm of human behaviors and magnify the understanding of how a mind works. A major in Psychology opens up several interesting opportunities for a candidate. Having a good understanding of the human mind and behaviors can help you excel in a wide variety of career paths.",
        },
    ]);

    return (
        <div className=''>
            <div>
                <Navbar />
            </div>
            <div className="main max-w-[1280px] mx-auto relative overflow-hidden text-left text-base text-steelblue-200 font-inter mt-8 ml-8 mr-8 justify-center">
                <div className="bg-[#C4F7D1] absolute inset-0 z-[-1] filter blur-[75px] w-56 h-48 border-black top-32 "></div>
                <div className="relative ">
                    <p className="text-4xl font-semibold underline-offset-2 ml-8">Banaras Hindu University (BHU-UET)</p>
                </div>
                {courses.map((course, index) => (
                    <div key={index} className="mt-6 ml-8 mr-8 justify-center">
                        <b className='text-[#0D88CB]'>{course.title}</b>
                        <span className="block mt-2">{course.description}</span>
                    </div>
                ))}
                <div className='mt-6 ml-8 mr-8 justify-center'>
                    <b className='text-[#0D88CB]'>THE SCHOOL OF LAW OFFERS THE FOLLOWING 5-YEAR INTEGRATED PROGRAMS:</b>
                    <ul className="list-disc pl-5 pt-3">
                        <li className="mb-3">Teaching (Hons.)</li>
                        <li className="mb-3">Career Counselling</li>
                        <li className="mb-3">Clinical Psychology</li>
                        <li className="mb-3">Research</li>
                        <li className="mb-3">Forensic Psychologist</li>
                        <li className="mb-3">Rehabilitation Counsellor</li>
                        <li className="mb-3">Market Researcher</li>
                    </ul>
                </div>
                <div className="mt-8 ml-8 w-[1080px]">
                    <div className="self-stretch rounded bg-darkslategray overflow-hidden"></div>
                    <table className="table-auto min-w-full">
                        <thead>
                            <tr className="bg-[#0D88CB] text-white">
                                <th className="py-3 px-4 font-semibold">Name Of College/University</th>
                                <th className="py-3 px-4 font-semibold">Seats</th>
                                <th className="py-3 px-4 font-semibold">Entrance</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">University of Delhi (17 Colleges)</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">922</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Merit based</td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Christ University (Triple Major Program)</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">NA</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">CUET+PI+SA</td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Jamia Millia Islamia</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">42</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Ent. Test</td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Banaras Hindu University</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">100</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">UET</td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">University of Hyderabad (Integrated Masters in Psychology)</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Ent. Test</td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">MIT-World Peace University, Pune</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">60</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">UG-PET+PI+Merit Based</td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Mount Carmel College, Bangalore</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">40</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Ent. Test</td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Aligarh Muslim University</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">85</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">CET</td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">G.D. Goenka University, Gurgaon</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">NA</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">GATA</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-8 ml-8 w-[1080px]">
                    <div className="self-stretch rounded bg-darkslategray overflow-hidden">
                        <table className="table-auto min-w-full">
                            <thead>
                                <tr className="bg-[#0D88CB] text-white">
                                    <th className="py-3 px-4 font-semibold">COURSE:</th>
                                    <th className="py-3 px-4 font-semibold">B. A. (Hons.) Psychology</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">NO. OF SEATS</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Not Available</td>
                                </tr>
                                <tr>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">ELIGIBILITY</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Passed 10+2 or equivalent Examination securing a minimum of 50% marks in the aggregate.
                                        <br />
                                        AGE: Not to be more than 22 years on 1st July 2019 (applicant should be born on or after 1st July of 1997).
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">STAGES - 1</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Undergraduate Entrance Test (UET)</td>
                                </tr>
                                <tr>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">PATTERN</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">
                                        Number of Questions: Total - 120 Qs (MCQ) <br />
                                        These questions shall be based on General knowledge and Current Affairs, General Mental Ability/Reasoning, Numerical Ability and Language Comprehension. <br />
                                        Marking Scheme: <br />
                                        Right Answer: +3 <br />
                                        Wrong Answer: -0.25 <br />
                                        Maximum Marks: 360 <br />
                                        Total Duration: 120 minutes (Two hours)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div className='flex justify-center'>
            <Link to="/login" className="relative bg-[#0D88CB] px-[100px] rounded-3xl p-3 flex text-center justify-center text-white text-[30px] items-center my-5 ">Register</Link>
            </div>
            <Footer />
        </div>
    );
}

export default BhuUet;

