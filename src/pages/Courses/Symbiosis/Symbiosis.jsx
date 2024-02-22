import {useState} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/footer/Footer';

const Symbiosis = () => {

    const [courses] = useState([
        {
          title: "COURSE(S) OFFERED:",
          description: "Bachelor of Business Administration (BBA) & BSc Economics",
        },
        {
          title: "NUMBER OF SEATS:",
          description: "BBA – 780Seats, BSC Economics – 180 Seats",
        },
        {
          title: "ELIGIBILITY CRITERIA: ",
          description: "Std. XII pass with minimum 50 % marks (45 % for SC / ST). Students with conditional passing (compartment yet to be declared) are eligible for admission as per SIU rules. For those students who wish to take up Business Analytics as a specialization, proficiency in Mathematics and Statistics is a must.",
        },
        {
            title: "SELECTION/ADMISSION PROCESS:",
            description: "Candidates have to appear for Symbiosis Entrance Test (SET). Candidates will be shortlisted on the basis of their performance in SET and a shortlist shall be declared. Shortlisted candidates will be called for a further process, the PI WAT (Personal Interaction and Writing Ability Test). The final merit lists shall be declared upon the combined score consisting of SET Scores plus performance in PI WAT, with both having equal weightage",
          },
          {
            title: "ENTRANCE PATTERN:",
            description: "",
          },
          {
            title: "Seats Availability",
            description: "",
          },
          
      ]);
      const [otherInfo] = useState([
        {
            title: "NEGATIVE MARKING:",
            description: "No Negative Marking.",
        },
        {
            title: "MARKING SCHEME:",
            description: "+1 for correct answer",
        },
        {
            title: "EXPECTED ENTRANCE DATE:",
            description: "MAY 1st Week",
        },
    ]);

  return (
   <div className="">
      <div>
        <Navbar/>
      </div>
      <div className="main max-w-[1280px] mx-auto relative overflow-hidden text-left text-base text-steelblue-200 font-inter">
        <div className="bg-[#C4F7D1] absolute inset-0 z-[-1] filter blur-[75px] w-56 h-48 border-black top-32 ">
        </div>
        <div className="relative ">
          <p className=" mt-8 ml-8 text-4xl font-semibold underline-offset-2">Symbiosis Center for Management </p>
        </div>
        {courses.map((course, index) => (
          <div key={index} className="mt-6 ml-8 mr-8 justify-center">
            <b className='text-[#0D88CB]'>{course.title}</b>
            <span className="block mt-2">{course.description}</span>
          </div>
        ))}
      
        <div className="mt-8 ml-8 w-[1200px]">
            <div className="self-stretch rounded bg-darkslategray overflow-hidden ">
                <table className="w-full ">
                    <thead>
                        <tr className="bg-[#0D88CB] text-white">
                            <th className="py-3 px-4 font-semibold">Section</th>
                            <th className="py-3 px-4 font-semibold">Number of Questions</th>
                            <th className="py-3 px-4 font-semibold">TOTAL Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">General English</td>
                            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">40</td>
                            <td className="border-t border-solid border-steelblue-100 border-l border-r py-3 px-4">40</td>
                        </tr>
                        <tr className="">
                            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Quantitative</td>
                            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">40</td>
                            <td className="border-t border-solid border-steelblue-100 border-l border-r py-3 px-4">40</td>
                        </tr>
                        <tr className="">
                            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">General Awareness</td>
                            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">40</td>
                            <td className="border-t border-solid border-steelblue-100 border-l border-r py-3 px-4">40</td>
                        </tr>
                        <tr className="">
                            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Analytical & Logical Reasoning</td>
                            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">30</td>
                            <td className="border-t border-solid border-steelblue-100 border-l border-r py-3 px-4">30</td>
                        </tr>
                        <tr className="">
                            <td className="border-t border-b border-solid border-steelblue-100 border-l py-3 px-4">TOTAL</td>
                            <td className="border-t  border-b border-solid border-steelblue-100 border-l py-3 px-4">150</td>
                            <td className="border-t  border-b  border-solid border-steelblue-100 border-l border-r py-3 px-4">150</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {otherInfo.map((info, index) => (
            <div key={index} className="mt-6 ml-8 ">
                <b className='text-[#0D88CB]'>{info.title}</b>
                <span className="block mt-2">{info.description}</span>
            </div>
        ))}
        <div className='flex justify-center mt-6'>
          <Link to="/login" className="register-button">Register</Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Symbiosis
