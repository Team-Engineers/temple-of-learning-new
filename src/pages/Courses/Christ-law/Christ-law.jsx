import React from 'react'
import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
function Christ() {
    return (
        <div className=''>
            <div>
                <Navbar />
            </div>
            <div className="main max-w-[1280px] mx-auto relative overflow-hidden text-left text-base text-steelblue-200 font-inter mt-8 ml-8 mr-8 justify-center">
                <div className="bg-[#C4F7D1] absolute inset-0 z-[-1] filter blur-[75px] w-56 h-48 border-black top-32 "></div>
                <div className="relative ">
                    <p className="text-4xl font-semibold underline-offset-2 ml-8">Christ University Law</p>
                </div>
                <div className='mt-6 ml-8 mr-8 justify-center'>
                    <b className='text-[#0D88CB] '> Courses </b>
                    <ul className="list-disc pl-5 pt-3">
                        <li className="mb-3">BA LLB</li>
                        <li className="mb-3">BBA LLB</li>
                    </ul>
                    <b className='text-[#0D88CB]'> Eligibility</b>
                    <p className='pt-3'>A pass in Class 12 (10+2)/ PUC or equivalent with a minimum of 45% marks at the final examination is the minimum eligibility for appearing for SLCU Law Entrance Examination. The candidates should also be below the age of 20 years as on July 01, 2017.</p>
                    <b className='text-[#0D88CB]'> Selection Process:</b>
                </div>
                <div className="mt-8 ml-8 w-[1080px]">
                <div className="self-stretch rounded bg-darkslategray overflow-hidden">
                    <table className="">
                        <thead>
                            <tr className="bg-[#0D88CB] text-white">
                                <th  className="py-3 px-4 font-semibold">Date</th>
                                <th  className="py-3 px-4 font-semibold">Particulars/Events</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">8, December 2016</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Application available online</td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">30 April 2017</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Entrance Test (ET)</td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">April end 2017 onwards (for next 2/3 days)</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Micro Presentation (MP) & Personal Interview (PI)</td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">May 1st week, 2017</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Publishing of Final selection list</td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Exam Date : 30 April 2017</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Result Date:</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                            </tr>
                            <tr>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">May 2017</td>
                                <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <div className=' mt-6 ml-8 mr-8 justify-center'>
                <b className='text-[#0D88CB]'>Test Pattern:</b>
                <ul className="list-disc pl-5 pt-3">
                        <li className="mb-3">Duration : 2hours</li>
                        <li className="mb-3">120 Minutes - 120 Questions - 120 Marks</li>
                        <li className="mb-3">Each Correct Answer carries 1 mark and each Wrong Answer carries -0.25</li>
                    </ul>
                </div>
                <div className="tab-pane fade show active"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
      <table className="table-auto w-full ml-8">
        <thead>
          <tr className="bg-[#0D88CB]  text-white text-lg">
            <th className="px-4 py-2">Topic</th>
            <th className="px-4 py-2">Questions</th>
            <th className="px-4 py-2">Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">English Language Comprehension Skills Verbal Reasoning</td>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">30</td>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">30</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">General Knowledge, Current Affairs</td>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">25</td>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">25</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Quantitative Aptitude, Numerical Ability, Fundamental Mathematical Operations</td>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">25</td>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">25</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Reasoning: Critical, Analytical and Logical</td>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">20</td>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">20</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Data Analysis and Interpretation</td>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">20</td>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">20</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Total</td>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">120</td>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">120</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
      <b className="pt-6 pb-6 text-[#0D88CB] ">COURSE CURRICULUM(B.A., LL.B. (HONS.) 2015-16):</b>
      <table className="table-auto w-full  mb-3 mt-6">
        <thead>
          <tr className="bg-[#0D88CB] text-white text-lg">
            <th className="px-4 py-2">FIRST SEMESTER</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL111 Political Theory – I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL132 English</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL143 Principles of Economics</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL154 Computer Fundamentals</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL165 Indian Legal and Constitutional History</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL166 Law of Torts</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
      <table className="table-auto w-full  mb-3 mt-3">
        <thead>
          <tr className="bg-[#0D88CB] text-white text-lg">
            <th className="px-4 py-2">SECOND SEMESTER</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL211 Political Theory – II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL232 Communicative English</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL243 Institutional Economics</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL254 Computer Programming</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL265 Legal Methods</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL266 Law of Consumer Protection and Motor</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Vehicles Act</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
      <table className="table-auto w-full  mb-3 mt-3">
        <thead>
          <tr className="bg-[#0D88CB] text-white text-lg">
            <th className="px-4 py-2">THIRD SEMESTER</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL311 Indian Government and Politics - I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL352 Law and Society</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL383 Philosophy of Law</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL364 Legal Language and Legal Writing</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL365 Contract – I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL386 Law of Freedom of Information and</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Prevention of Corruption</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
     
      <table className="table-auto w-full  mb-3 mt-3">
        <thead>
          <tr className="bg-[#0D88CB] text-white text-lg">
            <th className="px-4 py-2">FOURTH SEMESTER</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL411 Indian Government and Politics - II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL452 Law and Economics</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL463 Family Law – I</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL464 Jurisprudence</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL465 Contract – II</td>
            <td></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL466 Property Law</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
     
     <table className="table-auto w-full  mb-3 mt-3">
       <thead>
         <tr className="bg-[#0D88CB] text-white text-lg">
           <th className="px-4 py-2">FIFTH SEMESTER</th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL511 Nation States and International</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Terrorism</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL562 Company Law – I</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL563 Family Law – II</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL564 Constitutional Law – I</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL585 Principles of Criminal Law</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL566 Environmental Law</td>
           <td></td>
         </tr>
       </tbody>
     </table>
   </div>
   <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
     
     <table className="table-auto w-full  mb-3 mt-3">
       <thead>
         <tr className="bg-[#0D88CB] text-white text-lg">
           <th className="px-4 py-2">SIXTH SEMESTER</th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL611 International Relations</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL662 Criminal Law – I</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL663 Company Law – II</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL664 Constitutional Law – II</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL685 Intellectual Property Law</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL666 Labour and Industrial Law – I</td>
           <td></td>
         </tr>
       </tbody>
     </table>
   </div>
   <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
     
     <table className="table-auto w-full  mb-3 mt-3">
       <thead>
         <tr className="bg-[#0D88CB] text-white text-lg">
           <th className="px-4 py-2">SEVENTH SEMESTER</th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL781 Cyber Law</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL762 Administrative Law</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL783 Law of Banking</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL784 Law of Insurance</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL765 Public International Law</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL766 Labour and Industrial Law – II</td>
           <td></td>
         </tr>
       </tbody>
     </table>
   </div>
   <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
     
     <table className="table-auto w-full  mb-3 mt-3">
       <thead>
         <tr className="bg-[#0D88CB] text-white text-lg">
           <th className="px-4 py-2">EIGHTH SEMESTER</th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL811 Law of International Institutions</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL882 Telecommunication Law and Regulation</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL883 Law of e-Commerce</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL884 Interpretation of Statutes</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL865 Criminal Law – II</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL866 Civil Procedure Code and Limitation Act</td>
           <td></td>
         </tr>
       </tbody>
     </table>
   </div>
   <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
     
     <table className="table-auto w-full  mb-3 mt-3">
       <thead>
         <tr className="bg-[#0D88CB] text-white text-lg">
           <th className="px-4 py-2">NINTH SEMESTER</th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL961 Law of Taxation</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL982 Medical and Health Law</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL963 Law of Evidence</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL984 Competition Law</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL975 Drafting, Pleading and Conveyancing</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL976 Alternative Dispute Resolution</td>
           <td></td>
         </tr>
       </tbody>
     </table>
   </div>
   <div className="tab-pane fade show active mt-6 ml-8 mr-8 justify-center"  role="tabpanel" aria-labelledby="pills-home-tab" style={{ overflowX: 'auto' }}>
     
     <table className="table-auto w-full  mb-3 mt-3">
       <thead>
         <tr className="bg-[#0D88CB] text-white text-lg">
           <th className="px-4 py-2">TENTH SEMESTER</th>
           <th></th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL1061 Human Rights</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL1082 Conflict of Laws</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL1083 Dissertation</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL1075 Moot Court and Internship</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL1074 Public Interest Litigation, Legal Aid and</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">BAL1076 Professional Ethics and Professional</td>
           <td></td>
         </tr>
         <tr>
           <td className="px-4 py-2 border-t border-solid border-steelblue-100 border-l">Para Legal Services Accounting System</td>
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

export default Christ
