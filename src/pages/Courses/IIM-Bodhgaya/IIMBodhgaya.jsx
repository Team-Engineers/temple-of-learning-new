import { useState } from "react"
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';

const IIMBodhgaya = () => {
  const [courses] = useState([
    {
        title: "PROGRAM OVERVIEW",
        description: "In line with the growing need for trained managerial talent, IIM Bodh Gaya is starting five years integrated programme in management (IPM) from academic session 2022. The curriculum of this programme would offer experiential learning, international immersion and a holistic course curriculum. The objective of the programme is to prepare candidates from a foundation level for taking up leadership positions in corporates/government organizations.",
    },
    {
        title: "",
        description: "The IPM program is intended to make students to have a global perspective towards management practice. With an early induction to the programme and a rigorous and holistic curriculum, our students will demonstrate problem solving skills supported by appropriate analytical techniques and will use ethical and socially conscious judgment while analyzing business situations.",
    },
    {
        title: "",
        description: "Candidates successfully completing the course requirement of integrated programme in management would be awarded Bachelor of Business Management and Master of Business Administration by IIM Bodh Gaya. Candidates opting for exit after completing the requirement of first three years would be awarded Bachelor of Business Management.",
    },
    {
        title: "COURSE STRUCTURE",
        description:"The first three years of the IPM program would be based on semester system and the last two years would be based on the trimester system (as per the prevailing MBA course structure). At the end of 2nd year, students will have an option to undertake either of a) Rural and Social Immersion Project, b) A research-based project or c) a business internship. During the sixth semester of the program, students will have option to select a sector specific specialization. The course structure after the sixth semester would follow the MBA course structure.",
    },
    {
        title: "COURSE:",
        description: "Integrated Programme in Management (IPM)",
    },
    {
        title: "ELIGIBILITY",
        description: "",
    },
    {
        title: "Qualifying Exam:",
        description: "Candidates should have passed 10+2/XII/HSC examination in arts/commerce/science stream or equivalent with 60% (55% for candidates from SC/ST/PwD) or more in the year 2019, 2020 or appearing in 2022. The candidate must have passed class 10th examination with 60% (55% for candidates from SC/ST/PwD) or more in the year not before 2017.",
    },
    {
        title: "Age Limit:",
        description: "Candidate should have been born on or after August 01, 2001 (5 years relaxation for the candidates from SC/ST/PwD category will be given, i.e. born on or after August 01, 1996).",
    },
    {
      title: "SEATS:",
      description:"The admission to IIM BG-IPM would be through a Common Entrance Test and Personal Interview. Marks obtained in Entrance test and Personal interview would be computed for preparing the final merit list in the following ratio: Entrance Test: 70%; Personal Interview: 30%.",
  },
  {
    title: "SELECTION PROCESS:",
    description:"The admission to IIM BG-IPM would be through a Common Entrance Test and Personal Interview. Marks obtained in Entrance test and Personal interview would be computed for preparing the final merit list in the following ratio: Entrance Test: 70%; Personal Interview: 30%.",
},
{
  title: "FEE STRUCTURE:",
  description: "The fee inclusive of hostel would be Rs.4.5 LPA for the first three years. Candidates have to bear the mess charges as per prevailing rates of IIM Bodh Gaya. Tentative tuition fee for the 4th and 5th year would be as Rs.7.5 Lacs per year (approximately equivalent PGP fee for batch 2024-26). Candidates opting for international immersion would have to pay the applicable fee.",
},

    
]);
return (
  <div className="">
    <div>
      <Navbar />
    </div>
    <div className="main max-w-[1280px] mx-auto relative overflow-hidden text-left text-base text-steelblue-200 font-inter">
      <div className="bg-[#C4F7D1] absolute inset-0 z-[-1] filter blur-[75px] w-56 h-48 border-black top-32 "></div>
      <div className="relative ">
        <p className="mt-8 ml-8 text-4xl font-semibold underline-offset-2">IIM Ranchi, IPM</p>
      </div>
      {courses.map((course, index) => (
        <div key={index} className="mt-6 ml-8 mr-8 justify-center">
          <b className='text-[#0D88CB]'>{course.title}</b>
          <span className="block mt-2">{course.description}</span>
        </div>
      ))}
    </div>
    <div className='flex justify-center'>
        <Link to="/login" className="relative bg-[#0D88CB] px-[100px] rounded-3xl flex text-center justify-center text-white text-[30px] items-center my-5 ">Register</Link>

      </div>
    <Footer />
  </div>
);
}

export default IIMBodhgaya;