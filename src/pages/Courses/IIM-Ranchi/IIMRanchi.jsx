import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';

const IIMRanchi = () => {
    const [courses] = useState([
        {
            title: "PROGRAM OVERVIEW",
            description: "The Integrated Programme in Management (IPM) of IIM Ranchi is a full-time 5-year blended course of business studies from undergraduate to postgraduate level (Integrated BBA-MBA). Students will be awarded a Master of Business Administration (MBA) degree at the end of the programme.",
        },
        {
            title: "SEATS : 120",
            description: "",
        },
        {
            title: "ELIGIBILITY",
            description: "",
        },
        {
            title: "Qualifying Exam:",
            description: "Candidates should have passed the 10th standard/Secondary/SSC Examination and the 12th standard/Higher Secondary/HSC Examination (or equivalent) with 60% (55% for candidates from SC/ST/PwD) or more marks.",
        },
        {
            title: "AGE LIMIT:There will not be any age limit for the applicants.",
            description: "",
        },
        {
            title: "SELECTION PROCESS:",
            description: "Admission to the programme will be based on SAT Score, Written Ability Test, Personal Interview, and overall Academic Performance at the secondary and the higher secondary levels.",
        },
        {
            title: "COURSE STRUCTURE:",
            description: "The program is designed to provide a multidisciplinary foundation borrowing from humanities, social sciences, arts, and sciences. The program’s cross-disciplinary business core builds on such a foundation. It comprehensively covers management, marketing, accounting, finance, economics, information systems, data science, and strategic management. Lectures, classroom discussions, experiential lessons, case analyses, simulations, group projects, internships, and mentorships create a learning environment that is active and immersive. Additionally, the program offers life-skill courses that focus on their holistic development as professionally and socially responsible individuals. Students will get the opportunity to learn and grow in a premier business school and develop capabilities that send signals to the marketplace.A detailed course curriculum will be available soon.",
        },
        {
            title: "PROGRAM FEES:",
            description: "The total fees for the first three years of the program will be around INR 14 Lakhs. The fees for the next two years will be equal to the MBA program fees set for that year. These fees do not include hostel room rent and mess charges.",
        },
        
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
                    <p className=" mt-8 ml-8 text-4xl font-semibold underline-offset-2">IIM Ranchi, IPM</p>
                </div>
                {courses.map((course, index) => (
                    <div key={index} className="mt-6 ml-8 mr-8 justify-center">
                        <b className='text-[#0D88CB]'>{course.title}</b>
                        <span className="block mt-2">{course.description}</span>
                    </div>
                ))}
                <div className="mt-6 ml-8 justify-center">
                    <b className="text-[#0D88CB]">Why Central Universities Common Entrance Test 2022 [CUCET]?</b>
                    <ul className="list-disc pl-5">
                        <li className="mt-4 text-[#0D88CB] font-semibold">Is there an exit option after 3 years?</li>
                        <li className='mt-2 list-none'> <b>Ans:</b> Yes, you can exit the program with a BBA degree after 3 years on successful completion of all the course requirements. </li>
                        <li className="mt-3 text-[#0D88CB] font-semibold">Which of the dates in 2022 should I take the SAT?</li>
                        <li className='mt-2 list-none'><b>Ans:</b> Yes, you can exit the program with a BBA degree after 3 years on successful completion of all the course requirements. </li>
                        <li className="mt-3 text-[#0D88CB] font-semibold">How do I send the SAT scores to IIM Ranchi?</li>
                        <li className='mt-2 list-none'><b>Ans:</b> Yes, you can exit the program with a BBA degree after 3 years on successful completion of all the course requirements. </li>
                        <li className="mt-3 text-[#0D88CB] font-semibold">Can I take the SAT multiple times and send the best score?</li>
                        <li className='mt-2 list-none'><b>Ans:</b> Yes, you can exit the program with a BBA degree after 3 years on successful completion of all the course requirements. </li>
                        <li className="mt-3 text-[#0D88CB] font-semibold">I already have a valid SAT score from previous years. Would you accept that score?</li>
                        <li className='mt-2 list-none'><b>Ans:</b> Yes, you can exit the program with a BBA degree after 3 years on successful completion of all the course requirements. </li>
                        <li className="mt-3 text-[#0D88CB] font-semibold">Is there a quota for International Applicants/NRI Candidates?</li>
                        <li className='mt-2 list-none'><b>Ans:</b> Yes, you can exit the program with a BBA degree after 3 years on successful completion of all the course requirements. </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center'>
        <Link to="/login" className="relative bg-[#0D88CB] px-[100px] rounded-3xl flex text-center justify-center text-white text-[30px] items-center my-5 ">Register</Link>

      </div>
      <Footer/>
        </div>
    )
}

export default IIMRanchi;
