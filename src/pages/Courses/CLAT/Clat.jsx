import { useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/Footer';

export default function Clat() {
  const [courses] = useState([
    {
      title: "",
      description: "Total Questions: 150 questions",
    },
    {
      title: "Marking Scheme:",
      description: "Each correct answer will get a score of +1 marks, each wrong answer will get a score of -0.25 marks.",
    },
    {
      title: "Date of Examination:",
      description: "The CLAT 2022 exam will be conducted on 10 May, 2022. Registrations will open on 1 January, 2022 and remain open until 31 March, 2022.",
    },
    {
      title: "Total Seats:",
      description: " 2598",
    },
    {
      title: "Subject overview: ",
      description: "As per CLAT Consortium",
    },
  ]);

  return (
    <div className=''>
      <div>
        <Navbar/>
      </div>
      <div className="main max-w-[1280px] mx-auto relative overflow-hidden text-left text-base text-steelblue-200 font-inter mt-8 ml-8 mr-8 justify-center">
        <div className="bg-[#C4F7D1] absolute inset-0 z-[-1] filter blur-[75px] w-56 h-48 border-black top-32 "></div>
        <div className="relative ">
          <p className="text-4xl font-semibold underline-offset-2 ml-8">Common Law Aptitude Test</p>
        </div>
        <div>
          <p className="mt-6 ml-8 mr-8 justify-center"> The Common Law Admission Test (CLAT) is a national level entrance exam for admissions to undergraduate (UG) and postgraduate (PG) law programmes offered by 22 National Law Universities around the country.</p>
        </div>
        <div className='mt-6 ml-8 mr-8 justify-center'> 
          <b className='text-[#0D88CB] '>Eligibility : </b>
          <ul className="list-disc pl-5 pt-3">
            <li className="mb-3 ">There will be no upper age limit for UG Programme in CLAT 2022.</li>
            <li className="mb-3 ">As regards minimum percentage of marks in the qualifying examination (i.e., 10+2 or an equivalent examination), the candidates must have secured:</li>
            <li className="mb-3 ">Forty five percent (45%) marks or its equivalent grade in case of candidates belonging to General / OBC / PWD / NRI / PIO / OCI categories</li>
            <li className="mb-3 ">Forty Percent (40%) marks or equivalent in case of candidates belonging to SC/ST categories.</li>
            <li className="mb-3 ">Candidates who are appearing in the qualifying examination in March/April, 2022 are also eligible to appear in CLAT 2022 examination. However, they shall be required to produce an evidence of their passing the qualifying examination at the time of admission, failing which they shall lose their right to be considered for admission.</li>
          </ul>
        </div>
        <div className='mt-6 ml-8 mr-8 justify-center'>
          <b className='text-[#0D88CB] '>Written Test (CLAT) pattern</b>
          <ul className=' list-disc pl-5 pt-3'>
            <li className="mb-3 ">Duration : 2 hours</li>
            <li className="mb-3 ">Mode: Offline</li>
            <li className="mb-3 ">Sections – </li>
          </ul>
        </div>
        <div className="mt-8 ml-8 w-[1080px]">
          <div className="self-stretch rounded bg-darkslategray overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0D88CB] text-white">
                  <th className="py-3 px-4 font-semibold">Section</th>
                  <th className="py-3 px-4 font-semibold">	Number of Questions (roughly)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">English Language</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20%</td>
                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Current Affairs and GK</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">25%</td>
                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Legal Reasoning</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">25%</td>
                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Logical Reasoning</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">20%</td>
                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Quantitative Techniques</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">10%</td>
                </tr>                
              </tbody>
            </table>
          </div>
        </div>
        {courses.map((course, index) => (
          <div key={index} className="mt-6 ml-8 mr-8 justify-center">
            <b className='text-[#0D88CB]'>{course.title}</b>
            <span className="block mt-2">{course.description}</span>
          </div>
        ))}
        <div className="mt-6 ml-8 mr-8 justify-center">
            <b className='text-[#0D88CB]'>English Language</b>
            <p className=' justify-center pt-3'>In this section of the UG-CLAT 2022, you will be provided passages of about 450 words each. These passages will be derived from contemporary or historically significant fiction and non-fiction writing, and would be of a standard that a 12th standard student may be able to read in about 5-7 minutes.</p>
            <p className=' justify-center pt-3'>Each passage will be followed by a series of questions that will require you to demonstrate your comprehension and language skills, including your abilities to:</p>
            <ul  className=' list-disc pl-5 pt-3'>
                <li className="mb-3 ">Contemporary events of significance from India and the world;</li>
                <li className="mb-3 ">Arts and culture;</li>
                <li className="mb-3 ">International affairs; and</li>
                <li className="mb-3 ">Historical events of continuing significance.</li>
            </ul>

        </div>
        <div className="mt-6  ml-8 mr-8  justify-center">
            <b className='text-[#0D88CB] justify-center'>Legal Reasoning</b>
            <p className=' justify-center pt-3'>In this section, you will be expected to read passages of around 450 words each. The passages may relate to fact situations or scenarios involving legal matters, public policy questions or moral philosophical enquiries. You will not require any prior knowledge of law. You will benefit from a general awareness of contemporary legal and moral issues to better apply general principles or propositions to the given fact scenarios.</p>
            <p className=' justify-center pt-3'>Each passage would be followed by a series of questions that will require you to:</p>
            <ul  className='list-disc pl-5 pt-3'>
                <li>Identify and infer the rules and principles set out in the passage;</li>
                <li>Apply such rules and principles to various fact situations; and</li>
                <li>Understand how changes to the rules or principles may alter their application to various fact situations.</li>
            </ul>
        </div>
        <div className="mt-6 ml-8 mr-8  justify-center">
            <b className='text-[#0D88CB] justify-center'>Logical Reasoning</b>
            <p className=' justify-center  pt-3'>The Logical Reasoning section of the UG-CLAT 2022 will include a series of short passages of about 300 words each. Each passage will be followed by one or more questions that will require you to:</p>
            <ul  className='list-disc pl-5 pt-3'>
                <li className="mb-3 ">Recognize an argument, its premises and conclusions;</li>
                <li className="mb-3 ">Read and identify the arguments set out in the passage;</li>
                <li className="mb-3 ">Critically analyse patterns of reasoning, and assess how conclusions may depend on particular premises or evidence;</li>
                <li className="mb-3 ">Infer what follows from the passage and apply these inferences to new situations;</li>
                <li className="mb-3 ">Draw relationships and analogies, identify contradictions and equivalence, and assess the effectiveness of arguments.</li>
            </ul>
        </div>
        <div className="mt-6 ml-8 mr-8 justify-center">
            <b className='text-[#0D88CB] justify-center'>Quantitative Techniques</b>
            <p className=' justify-center pt-3'>The Quantitative Techniques section of the UG-CLAT 2022 will include short sets of facts or propositions, graphs, or other textual, pictorial or diagrammatic representations of numerical information, followed by a series of questions. You will be required to derive information from such passages, graphs, or other representations, and apply mathematical operations on such information.</p>
            <p className=' justify-center pt-3'>The questions will require you to:</p>
            <ul  className='list-disc pl-5 pt-3'>
                <li  className="mb-3 ">Derive, infer, and manipulate numerical information set out in such passages, graphs, or other representations; and</li>
                <li  className="mb-3 ">Apply various 10th standard mathematical operations on such information, including from areas such as ratios and proportions, basic algebra, mensuration and statistical estimation.</li>
            </ul>
        </div>
      </div>
      <div className='flex justify-center'>
    <Link to="/login" className="relative bg-[#0D88CB] px-[100px] rounded-3xl p-3 flex text-center justify-center text-white text-[30px] items-center my-5 ">Register</Link>
  </div>
  <Footer/>
    </div>  
   

  );
}
