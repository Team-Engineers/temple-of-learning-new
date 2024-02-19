import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';
const DuJat = () => {
    const [courses] = useState([
        {
            title: "COURSE(S) OFFERED:",
            description: "BBA, BBA Finance & Accountancy, BBA Finance & International Business, BBA (H) & BBA Business Analytics – Lavasa, Pune Campus. B.Com (H), B.Com (Finance & Accountancy), B.Com (International Finance), B.Com (Strategic Finance Honours) & B.Com Professional AND (BA) Honours in Economics.",
        },
        {
            title: "ELIGIBILITY CRITERIA:",
            description: "",
        },
        {
            title: "For BBA & BBA (H), B.Com, B.Com (Finance & Accountancy):",
            description: "Eligibility for the programme is a pass at the +2 in any stream from any recognized Board in India.",
        },
        {
            title: "For B.Com (H) & B.Com (Strategic Finance Honours):",
            description: "Eligibility for the programme is a pass at the +2 level (Karnataka PUC / ISC / CBSE / NIOS / State Boards) with not less than 60% from any recognized Board in India.",
        },
        {
            title: "For BBA Finance and International Business:",
            description: "Basic eligibility for the programme is a minimum of 55% at the +2 level in any stream from any recognized Board in India.",
        },
        {
            title: " For BBA (Finance and Accountancy), B.Com (H), B.Com (Strategic Finance Honours), B.Com Professional AND B.Com (International Finance):",
            description: "Eligibility for the programme is a pass with a minimum of 60% at the +2 level from any recognized Board in India.",
        },
        {
            title: "For (BA) Honours in Economics: ",
            description: "Basic eligibility for the programme is a pass with minimum 55% at the +2 level in any stream from any recognized Board in India. Candidates should have studied Economics/ Mathematics/ Statistics at the +2 level",
        },
        {
            title: "SELECTION/ADMISSION PROCESS:",
            description: "BBA, B.Com (H), (BA) Honours in Economics: CHRIST Entrance Test, Skill Assessment, Micro Presentation (MP), Personal interview & Assessment of past performance in Class 10, Class 11/12. B.Com & B.Com (Finance & Accountancy): Selection for the programme will be based on the performance in class XII of the academic year.",
        },
        {
            title: "ENTRANCE PATTERN:",
            description: "Section Number of Questions TOTAL Marks Fundamental Accounting 20 20 Mathematics 20 20 Data Analysis & Interpatation 20 20 Reasoning 20 20 General English 20 20 English 20 20 Total 120 120",
        },
    ]);

    const [otherInfo] = useState([
        {
            title: "NEGATIVE MARKING:",
            description: "YES",
        },
        {
            title: "MARKING SCHEME:",
            description: "+1 for correct answer & -0.25 for incorrect answer",
        },
        {
            title: "EXPECTED ENTRANCE DATE:",
            description: "APRIL End Or MAY 1st Week",
        },
    ]);

    return (
        <>
            <Navbar />
            <div className="max-w-[1280px] mx-auto relative overflow-hidden text-left text-base text-steelblue-200 font-inter">
                <div className="absolute top-[82px] left-[-63px] rounded-[50%] bg-honeydew [filter:blur(200px)]" />
                <div className="absolute top-[880px] left-[946px] rounded-[50%] bg-khaki [filter:blur(200px)] w-[400px] h-[417px]" />

                <div className="mt-8 ml-8 text-4xl font-semibold ">DU JAT
                    <div className='h-[4px] my-2 bg-[#0082C8] w-[100px] ' />
                </div>


                {courses.map((course, index) => (
                    <div key={index} className="mt-6 ml-8">
                        <b className='text-[#0D88CB]'>{course.title}</b>
                        <span className="block mt-2">{course.description}</span>
                    </div>
                ))}

                <div className="mt-8 ml-8 w-[1080px]">
                    <div className="self-stretch rounded bg-darkslategray overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#0D88CB] text-white">
                                    <th className="py-3 px-4 font-semibold">Section</th>
                                    <th className="py-3 px-4 font-semibold">Number of Questions</th>
                                    <th className="py-3 px-4 font-semibold">TOTAL Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Fundamental Accounting</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>

                                </tr>
                                <tr className="">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Fundamental Accounting</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>

                                </tr>
                                <tr className="">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Fundamental Accounting</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>

                                </tr>
                                <tr className="">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Fundamental Accounting</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>

                                </tr>
                                <tr className="">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Fundamental Accounting</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>

                                </tr>
                                <tr className="">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Fundamental Accounting</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>

                                </tr>
                                <tr className="">
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Fundamental Accounting</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                                    <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {otherInfo.map((info, index) => (
                    <div key={index} className="mt-6 ml-8">
                        <b className='text-[#0D88CB]'>{info.title}</b>
                        <span className="block mt-2">{info.description}</span>
                    </div>
                ))}
                <div className='flex justify-center'>
                    <Link to="/login" className="relative bg-[#0D88CB] px-[100px] rounded-3xl p-4 flex text-center justify-center text-white text-[30px] items-center my-5 ">Register</Link>

                </div>

            </div>
            <Footer />
        </>
    );
};

export default DuJat;
