import { useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/Footer';

function SymbiosisLaw() {
    const [courses] = useState([
        {
          title: "Courses Available & Seats:",
          description: "",
        },
        {
          title: "SLS, Pune :",
          description: "Total 300 Seats [ B.A., L.L.B. (Hons.) :- 120 Seats+ B.B.A., L.L.B. (Hons.):- 180 Seats]",
        },
        {
          title: "SLS, Noida:",
          description: "Total 180 Seats [BBA.LL.B - 120 seats and BA.LL.B - 60 seats]",
        },
        {
            title: "SLS, Hyderabad: ",
            description: "Total Seats 240 seats [ 120 seats of BBA, LL.B and 120 seats of BA, LL.B.]",
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
        <p className="text-4xl font-semibold underline-offset-2 ml-8">Symbiosis Law College</p>
      </div>
      {courses.map((course, index) => (
          <div key={index} className="mt-6 ml-8 mr-8 justify-center">
            <b className='text-[#0D88CB]'>{course.title}</b>
            <span className="block mt-2">{course.description}</span>
          </div>
        ))}
      
      <div className="mt-6 ml-8 mr-8 justify-center">
      <b className='text-[#0D88CB]'>Admission Process and Eligibility: (as per 2017 Notification) </b>
      <ul className="list-disc pl-5 pt-3">
        <li className="mb-3">XII pass from any branch with minimum 50% marks for general category and 45% for students of SC and ST category.</li>
        <li className="mb-3">Qualifying the Symbiosis Entrance Test (SET) on 6th May 2017 + Personal interview & Writing Ability Test</li>
        <li className="mb-3">SLS – Pune : 50 Marks (SET) + 25 Marks (PI) + 20 Marks (WAT)+5 Marks (Academic Profile</li>
        <li className="mb-3">SLS-Noida : 50 Marks (SET) + 30 Marks (PI) + 20 Marks (WAT)</li>
        <li className="mb-3">SLS-Hyderabad : 50 Marks (SET) + 25 Marks (PI) + 20 Marks (WAT)+5 Marks (Academic Profile)</li>
      </ul>
      <b className='text-[#0D88CB]'>Selection is done in two phases:</b>
      <ul className="list-disc pl-5 pt-3">
        <li className="mb-3">Short list of PI-WAT will be prepared on the base of the SET score.</li>
        <li className="mb-3">The short listed candidates will be invited for Personal Interview (PI) and Written Ability Test (WAT) at respective Centres.</li>
      </ul>
      </div>
     <div  className="mt-6 ml-8 mr-8 justify-center">
      <b className="text-[#0D88CB]"><b>Entrance Pattern:</b> Duration 2.5 hours</b>
        </div>
        <div className="mt-8 ml-8 w-[1080px]">
          <div className="self-stretch rounded bg-darkslategray overflow-hidden">  
      <table className="w-full">
        <thead>
          <tr className="bg-[#0D88CB] text-white" >
            <th className="py-3 px-4 font-semibold">Sr. No.</th>
            <th className="py-3 px-4 font-semibold">Section</th>
            <th className="py-3 px-4 font-semibold">Number of Questions</th>
            <th className="py-3 px-4 font-semibold">Total Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">1</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4" >Logical Reasoning</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">30</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4" >30</td>
          </tr>
          <tr>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">2</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Legal Reasoning</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4" >30</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4" >30</td>
          </tr>
          <tr>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4" >3</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Analytical Reasoning</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4" >30</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4" >30</td>
          </tr>
          <tr>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4" >4</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Reading Comprehension</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4" >30</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">30</td>
          </tr>
          <tr>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">5</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">General Knowledge</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">30</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">30</td>
          </tr>
          <tr>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Total</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">150</td>
            <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">150</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
      <b className="pt-6 pb-6 text-[#0D88CB] block">COURSE CURRICULUM(B.A., LL.B. (HONS.) 2015-16):</b>
      <b className="pt-6 pb-6 text-[#0D88CB] block">Bachelor of Arts and Bachelor of Laws (B.A. LL.B.) 2014-19</b>
      <table className="table-auto w-full  mb-3 mt-6">
        <thead>
          <tr className="bg-[#0D88CB] text-white text-lg">
            <th className="px-4 py-2">Semester I</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Course Title</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l"> English</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Law of Torts including MV Accident and Consumer Protection Laws I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Jurisprudence (Legal Method, Indian Legal System, and Basic Theory of Law)</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">History I (History of Law and Legal Institutions in Ancient and Medieval India)</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Sociology</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Fundamentals of IT</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Foundations of Ethics</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
    
      <table className="table-auto w-full  mb-3 mt-6">
        <thead>
          <tr className="bg-[#0D88CB] text-white text-lg">
            <th className="px-4 py-2">Semester II</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Law of Contract</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Law of Tort including MV Accident and Consumer Protection Laws II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">English (Advanced)</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">History II (History of Law and Legal Institutions in Medieval and Modern India)</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Political Science I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Legal Database</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Philosophy of Life and Lifestyle</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Total</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Integrated Disaster Management</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
      <table className="table-auto w-full  mb-3 mt-6">
        <thead>
          <tr className="bg-[#0D88CB] text-white text-lg">
            <th className="px-4 py-2">Semester III</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Elective Course: Choose Any One of the following:</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Basic Sanskrit I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Basic German I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Basic French I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Basic Spanish I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Basic Hindi I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Basic Marathi I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Compulsory Courses</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Special Contract</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Constitutional Law I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Family Law I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Economics</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Basic Spanish I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Political Science II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Concept of Wealth and Prosperity</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center" role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
      <table className="table-auto w-full  mb-3 mt-6">
        <thead>
          <tr className="bg-[#0D88CB] text-white text-lg">
            <th className="px-4 py-2">Semester IV</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Elective Course: Choose Second Part of elective selected in Semester III</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Illustration: If one chose German I in Semester III, then he/she must choose German II in Semester IV</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Basic Sanskrit II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Basic German II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Basic French II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Basic Spanish II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Basic Hindi II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Basic Marathi II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Compulsory Courses</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Law of Crimes Paper I: Penal Code</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Constitutional Law II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Family Law II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Effective Communication Skills</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Political Science III</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Legal Reasoning and Logic</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Case Studies: Interlinking and Hyperlinking</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center" role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
      <table className="table-auto w-full  mb-3 mt-6">
        <thead>
          <tr className="bg-[#0D88CB] text-white text-lg">
            <th className="px-4 py-2">Semester V</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Law of Crimes Paper II: Criminal Procedure Code I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Property Law</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Company Law I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Administrative Law</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Environmental Law</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Liberal Arts I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Liberal Arts II</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
   <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
     
     <table className="table-auto w-full  mb-3 mt-3">
       <thead>
         <tr className="bg-[#0D88CB] text-white text-lg">
           <th className="px-4 py-2">Semester VI</th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Law of Crimes Paper III: Criminal Procedure Code II</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Company Law II</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Philosophy of Law and Ethics</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Public Administration</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Public International Law</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Inter Institute Course I</td>
           <td></td>
         </tr> 
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Inter Institute Course II</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Inter Institute Course III</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Internship</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Global Immersion Programme</td>
           <td></td>
         </tr>
       </tbody>
     </table>
   </div>
   <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
     
     <table className="table-auto w-full  mb-3 mt-3">
       <thead>
         <tr className="bg-[#0D88CB] text-white text-lg">
           <th className="px-4 py-2">Semester VII</th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Civil Procedure Code and Limitation Act I</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Principles of Taxation Law</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">* Elective : Choose Any Two of the following</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Human Rights Law and Practice</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Gender Justice and Feminist Jurisprudence</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Humanitarian and Refugee Law</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Merger and Acquisitions</td>
           <td></td>
         </tr> <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">International Trade and Economics</td>
           <td></td>
         </tr> <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Humanitarian and Refugee Law</td>
           <td></td>
         </tr> <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Banking Law</td>
           <td></td>
         </tr> <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Insurance Law</td>
           <td></td>
         </tr>
       </tbody>
     </table>
   </div>
   <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center" role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
      <table className="table-auto w-full  mb-3 mt-3">
        <thead>
          <tr className="bg-[#0D88CB] text-white text-lg">
            <th className="px-4 py-2"> Semester VIII</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Law of Evidence</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Civil Procedure Code and Limitation Act II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Forensic Science</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Elective[1]: Choose Any Two of the Following</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">International Criminal Law</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Penology and Victimology</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Media Law</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Information Technology Law</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">International Banking and Finance</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Trade in Intellectual Property</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">General Agreement on Tariff and Trade</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">International Organization</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center" role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
      <table className="table-auto w-full  mb-3 mt-3">
        <thead>
          <tr className="bg-[#0D88CB] text-white text-lg">
            <th className="px-4 py-2">Semester IX</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Compulsory Courses</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Labour and Industrial Law</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Drafting, Pleading and Conveyance (Clinical Course I)[1]</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Alternative Dispute Resolution (Clinical Course II)[2]</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Elective[3]: Choose Any One of the Following</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Comparative Criminal Procedure</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Comparative Constitution</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Investment Law</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Trade and Services in Emigration</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center" role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
      <table className="table-auto w-full  mb-3 mt-3">
        <thead>
          <tr className="bg-[#0D88CB] text-white text-lg">
            <th className="px-4 py-2">Semester X</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Professional Ethics and Professional Accounting System (Clinical Course III)[1]</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Moot Court Exercise and Internship (Clinical Course IV)[2]</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Projects and Presentation</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Elective: Choose Any One of the Following</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Financial and Systemic Fraud</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">UNCITRAL Model Codes</td>
            <td></td>
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

export default SymbiosisLaw
