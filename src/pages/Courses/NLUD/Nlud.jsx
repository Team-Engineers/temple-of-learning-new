import { useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/Footer';

function Nlud() {
    const [courses] = useState([
        {
            title:"COURSE(S) OFFERED:",
            description:" B.A. LL.B",
        },
        {
            title:"NUMBER OF SEATS:",
            description:"80Seats",
        },
        {
            title:"ELIGIBILITY CRITERIA:",
            description:"Senior Secondary School Examination (10+2 System) or Equivalent Examination with 50% marks.",
        },
        {
            title:"SELECTION/ADMISSION PROCESS: ",
            description:"Selection of candidates will be based on their merit/AIR (All India Rank) secured by the candidate in the AILET Entrance Exam.",
        },
        {
            title:"ENTRANCE PATTERN:"
        }
    ])
    const[marks]=useState([
        {
            title:"NEGATIVE MARKING:",
            description:"No Negative Marking.",
        },
        {
            title:"MARKING SCHEME:",
            description:"+1 for correct answer",
        },
        {
            title:"EXPECTED ENTRANCE DATE:",
            description:"JUNE 2nd Week",
        },
    ])
  return (
       <div className=''>
      <div>
        <Navbar/>
      </div>
      <div className="main max-w-[1280px] mx-auto relative overflow-hidden text-left text-base text-steelblue-200 font-inter mt-8 ml-8 mr-8 justify-center">
        <div className="bg-[#C4F7D1] absolute inset-0 z-[-1] filter blur-[75px] w-56 h-48 border-black top-32 "></div>
        <div className="relative ">
          <p className="text-4xl font-semibold underline-offset-2 ml-8">National Law University, Delhi</p>
        </div>
        {courses.map((course,index)=>(
             <div key={index} className="mt-6 ml-8 mr-8 justify-center">
             <b className='text-[#0D88CB]'>{course.title}</b>
             <span className="block mt-2">{course.description}</span>
           </div>
        ))}
        </div>
        <div className="mt-8 ml-8 w-[1080px]">
          <div className="self-stretch rounded bg-darkslategray overflow-hidden">
            <table className="ml-8">
              <thead>
                <tr className="bg-[#0D88CB] text-white">
                  <th className="py-3 px-4 font-semibold">Section</th>
                  <th className="py-3 px-4 font-semibold">	Number of Questions</th>
                  <th className="py-3 px-4 font-semibold">TOTAL Marks</th>

                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">English Language</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Logical Reasoning & Visual Reasoning</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Data Interpretation</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>

                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Mathematics</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">General Knowledge & General Awareness</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20</td>
                </tr>    
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">TOTAL</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">100</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">100</td>
                </tr>             
              </tbody>
            </table>
          </div>
        </div>
        <div className='ml-8 mt-8'>
        {marks.map((marks,index)=>(
             <div key={index} className="mt-6 ml-8 mr-8 justify-center">
             <b className='text-[#0D88CB]'>{marks.title}</b>
             <span className="block mt-2">{marks.description}</span>
           </div>
        ))}
        </div>
        <div className="mt-8 ml-8 w-[1080px]">
          <div className="self-stretch rounded bg-darkslategray overflow-hidden">
            <table className="ml-8">
              <thead>
                <tr className="bg-[#0D88CB] text-white">
                  <th className="py-3 px-4 font-semibold">College Name</th>
                  <th className="py-3 px-4 font-semibold"> Course Offered </th>
                  <th className="py-3 px-4 font-semibold">	Seats </th>
                  <th className="py-3 px-4 font-semibold">	Eligibility</th>
                  <th className="py-3 px-4 font-semibold"> Process	</th>
                  <th className="py-3 px-4 font-semibold"> Pattern	</th>
                  <th className="py-3 px-4 font-semibold">	Marking Scheme</th>
                  <th className="py-3 px-4 font-semibold">	Date</th>

                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Maharashtra Common Entrance Test</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">B.A. LL.B. B.B.A. LL.B. B.Com. LL.B.</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Approx 10,260</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">The candidate should have passed 12th from any recognized educational board with minimum 45% and 40% for SC/ST belonging to Maharashtra.</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Candidates who secure qualifying non Zero Score in CET 2020 are eligible to participate in the Centralized Admission Process (CAP). In order to participate in MH LLB CET CAP.</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">1. General Awareness - 30 2. Legal Awareness and Reasoning - 40 3. Logical and Analytical Reasoning - 40 4. Quantitative Aptitude - 10 5. English Comprehensive – 30 Total questions: 150</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Duration: 120 min. Right answer: +1 No negative marking</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">JUNE 1st Week</td>

                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Pune, Noida, Hyderabad, and Nagpur</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">B.A. LL.B. B.B.A. LL.B.</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">1080 seats</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">The candidate should have passed XII (10+2) examination from any recognized Board with a minimum of 45% marks (40% for S.C. /S.T. candidates).</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Selection will be based on SLAT(Symbiosis LAW Aptitude Test) followed by PI (Personal Interview) & WAT (Writing Ability Test).</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Logical Reasoning - 30 Legal Reasoning - 30 Analytical Reasoning - 30 Reading Comprehension - 30 General Knowledge - 30</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Duration: 150 min. Right answer: +1 No negative marking Total questions: 150</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">MAY 1st Week</td>

                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">8. Law School Admission Test (LSAT) India</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">B.A. LL.B. B.B.A. LL.B. B.Com. LL.B.</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">85+ Colleges</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Candidates should have qualified 12th board examination of 10+2 education system of CBSE or any other equivalent education board with minimum 50% marks.</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Selection will be based on LSAT–India Entrance Test</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Analytical Reasoning - 23 Logical Reasoning I - 23 Logical Reasoning II - 23 Reading Comprehension – 23 Total questions: 92</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Duration: 2 hours and 20 minutes Total No negative marking</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">MAY 3rd Week</td>
                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">IP University</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">B.A. LL.B. B.B.A. LL.B.</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">2545</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Candidates with an aggregate of 50% marks in 10 + 2 level examination from recognized state and central government board (for example, C.B.S.E) with compulsory English at 10+2 level.</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Selection will be based on CLAT (Common Admission Test) Score.</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">CLAT Pattern</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Same as CLAT</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Same as CLAT</td>
                </tr>                  
              </tbody>
            </table>
          </div>
        </div>
        <div className='flex justify-center'>
    <Link to="/login" className="relative bg-[#0D88CB] px-[100px] rounded-3xl p-3 flex text-center justify-center text-white text-[30px] items-center my-5 ">Register</Link>
  </div>
  <Footer/>
    </div>
  )
}

export default Nlud
