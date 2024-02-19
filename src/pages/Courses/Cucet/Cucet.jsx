import { useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/Footer';

const Cucet = () => {
  const [courses] = useState([
    {
      title: "CUCET 2022 Notification, Exam Dates & Application Form",
      description: "The Executive Council of University released a notice on December 17 2022, stating that the CUCET exam for UG and PG courses in central universities can be conducted from the academic year 2022-23 through NTA. The admission notifications are likely to be released in the month of March 2022.The Central University Common Entrance Test is a national level exam conducted by one of the central universities and the government recommends conducting CUCET for the 54 Central Universities from the academic session 2022-2023.",
    },
    {
      title: "Latest Update:",
      description: "CUCET Exam notifications have been released for the academic year 2022-23. On October 3rd 2022 the provisional answer keys along with the question paper and recorded responses have been uploaded on the official website. Check CUCET Latest Updates to know more.",
    },
    {
      title: "What is CUCET Exam 2022?",
      description: "",
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
          <p className=" mt-8 ml-8 text-4xl font-semibold underline-offset-2">CUCET</p>
        </div>
        {courses.map((course, index) => (
          <div key={index} className="mt-6 ml-8 mr-8 justify-center">
            <b className='text-[#0D88CB]'>{course.title}</b>
            <span className="block mt-2">{course.description}</span>
          </div>
        ))}
        <div className="mt-6 ml-8 mr-8 justify-center">
          <ul className="list-disc">
            <li className="mb-3" >As discussed above, CUCET is a national-level entrance test offering admissions to UG, PG and integrated programs in 54 central universities across India.</li>
            <li className="mb-3" >Previously, the students were evaluated based on12th marks, but now you are required to appear for a common aptitude test and clear the exam with qualifying marks.</li>
            <li className="mb-3" >7 member committee will recommend the modalities for this aptitude test.</li>
            <li className="mb-3" >The exam is a computer-based test that will commence shortly for the 2022-2023 batch and is conducted twice a year by NTA.</li>
            <li className="mb-3" >Delhi University, Banaras Hindu University, Jamia Milia Islamia, Jawahar Lal Nehru University and many other universities are going to conduct this exam for the first time as per the recent recommendation.</li>
            <li className="mb-3" > NEP decided to discard the merit-based competition for admission to such universities instead to conduct the common entrance test.</li>
          </ul>
        </div>
        <div className="mt-6 ml-8 mr-8 justify-center">
          <b className="text-[#0D88CB]">Why Central Universities Common Entrance Test 2022 [CUCET]?</b>
          <ul className="list-disc">
            <li className="mt-4">It was observed that there is huge competition in top universities with high cut-off marks, so the exam was introduced to reduce the high cut-off standards for entering these prestigious colleges.</li>
            <li className="mt-3">The exam is a centralized test for top universities like Delhi University, Banaras Hindu University, Central University of Punjab, and Jawaharlal Nehru University.</li>
            <li className="mt-3">Instead of appearing for multiple entrance tests, you can focus on a single aptitude test to get admission to these top universities.</li>
          </ul>
        </div>
        <div className="mt-6 ml-8 mr-8 justify-center">
          <b className="text-[#0D88CB]">CUCET Exam Date 2022</b>
          <ul className="list-disc">
            <li className="mt-4">The notification or final recommendation on the exam will be released soon.</li>
            <li className="mt-3">The expected CUCET Exam Date for the release of the application form is in the last week of March 2022 or the first week of April 2022.</li>
            <li className="mt-3">Enlisted below are important events related to this entrance:</li>
          </ul>
        </div>
        <div className="mt-8 ml-8 w-[1080px]">
          <div className="self-stretch rounded bg-darkslategray overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0D88CB] text-white">
                  <th className="py-3 px-4 font-semibold">Events</th>
                  <th className="py-3 px-4 font-semibold">Dates (Tentative)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">The application form link will be active from</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">	April 2022</td>


                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Last date to submit applications</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">May 2022</td>


                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Form correction window will be activated from</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">May 2022</td>

                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Release of admit card</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">	May 2022</td>


                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">CUCET 2022 Exam</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">June 2022</td>

                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Provisional CUCET answer key</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">June 2022</td>

                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Objections against Answer key</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">June 2022</td>
                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Objections against Answer key</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">June 2022</td>
                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Final answer key</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">June 2022</td>
                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">The result will be declared on</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">July 2022</td>
                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">CUCET 2022 merit list</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">July 2022</td>
                </tr>
                <tr className="">
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">Counselling of CUCET 2022</td>
                  <td className="border-t border-solid border-steelblue-100 border-l py-3 px-4">July 2022</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 ml-8 mr-8 justify-center">
          <b className="text-[#0D88CB]">Eligibility Criteria</b>
          <ul className="list-disc">
            <li className="mt-4">You should have passed the 12th standard with a minimum of 60%</li>
            <li className="mt-3">You can apply if you are studying in class 12, however, you will need to submit the documents during verification.</li>
            <li className="mt-3">The previous eligibility shall vary as per each course and university you apply to.</li>
            <li className="mt-3">The previous eligibility shall vary as per each course and university you apply to.</li>
            <li className="mt-3">For UG courses, the minimum qualification shall be 50% for the general category in class 12. 5% relaxation shall be given to SC/ST students.</li>
            <li className="mt-3">PG applicants belonging to the general category must have 55% aggregate marks in the bachelor's degree. 5% relaxation to SC/ST students will be given.</li>
            <li className="mt-3">PhD applicants who have qualified CSIR UGC NET (JRF), GATE, NBHM will have to mandatorily register for the exam.</li>
          </ul>
        </div>
        <div className="mt-6 ml-8 mr-8 justify-center">
          <b className="text-[#0D88CB] mb-4">CUCET 2022 Application form</b>
          <p className="mt-4 mb-3">The application window shall open in online mode in the month of April 2022. There is a common registration process for UG, PG, and PhD students.</p>
          <p>Here are the steps to fill the CUCET Application Form:</p>
          <ul className="list-disc">
            <li className="mt-4">Register yourself as a new user on the official website by filling in your personal details</li>
            <li className="mt-3">Login again to fill in the educational qualification, basic details, and communication information in the form</li>
            <li className="mt-3">Upload the required documents like photograph, the signature.</li>
            <li className="mt-3">Paying the application fee in online or offline mode is the last step</li>
            <li className="mt-3">Choose desired payment mode and pay accordingly</li>
            <li className="mt-3">Preview the form before submission.</li>
            <li className="mt-3">Make sure there are no errors</li>
            <li className="mt-3">Print the final submitted form for future reference</li>
          </ul>
        </div>
        <div className="mt-6 ml-8 mr-8 justify-center">
          <b className="text-[#0D88CB]">CUCET Application fees</b>
          <p className='mt-4 mb-4'>The fee varies according to the mode of payment. PwD candidates are exempted from paying any application fee</p>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead className="bg-[#0D88CB] text-white text-lg">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left border-t border-solid border-steelblue-100 border-l">Category</th>
                  <th scope="col" className="px-6 py-3 text-left border-t border-solid border-steelblue-100 border-l">Payment through online/debit/credit card</th>
                  <th scope="colgroup" className="px-6 py-3 text-left border-t border-solid border-steelblue-100 border-l" colspan="3">Payment through Challan</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <th scope="row" className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">Application Fees*</th>
                  <td className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">Application Fee</td>
                  <td className="px-6 py-4 border-t border-solid border-steelblue-100 border-l"></td>
                  <td className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">Bank Commission</td>
                  <td className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">Total Fee to be paid</td>
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">General/OBC</th>
                  <td className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">INR 800 for three PUs</td>
                  <td className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">INR 800</td>
                  <td className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">INR 50</td>
                  <td className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">INR 850</td>
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">SC/ST</th>
                  <td className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">INR 350 for three PUs</td>
                  <td className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">INR 350</td>
                  <td className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">INR 50</td>
                  <td className="px-6 py-4 border-t border-solid border-steelblue-100 border-l">INR 400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6 ml-8 mr-8 justify-center">
          <b className="text-[#0D88CB] ">Exam Pattern 2022</b>
          <p className="text-justify mt-3 mb-3">Based on the news published in the TOI newspaper, the question paper would comprise of subjects listed below:</p>
          <ul className="list-disc pl-5">
            <li className="text-justify mb-2">Verbal Ability</li>
            <li className="text-justify mb-2">Quantitative Ability</li>
            <li className="text-justify mb-2">Logical Reasoning</li>
            <li className="text-justify mb-2">Subject-specific test (to be chosen by the student while filling the form)</li>
          </ul>
          <p className="text-justify mt-3 mb-3">The information above is provided based on the pattern and syllabus of 2022, current affairs can be added to the pattern. However, there is no clarity yet as the notification is to be soon released by the government.</p>
          <p className="text-justify">The pattern followed previously is enlisted below. In the new CUCET Exam Pattern the number of questions shall vary.</p>
        </div>
        <div className="mt-6 ml-8 mr-8 justify-center" >
          <b className="text-[#0D88CB]">CUCET Application fees</b>
          <p className="text-justify mb-4">The fee varies according to the mode of payment. PwD candidates are exempted from paying any application fee.</p>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead className='bg-[#0D88CB] text-white text-lg'>
                <tr >
                  <th className="border-t border-solid border-steelblue-100 border-l px-4 py-2">Mode of the exam</th>
                  <th className="border-t border-solid border-steelblue-100 border-l px-4 py-2">Online</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">Medium of the exam</td>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">English</td>
                </tr>
                <tr>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">Type of Questions</td>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">Objective/ MCQ type</td>
                </tr>
                <tr>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">Sections or Parts</td>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">Part A: Aptitude and English<br />Part B: Domain Knowledge</td>
                </tr>
                <tr>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">Number of Questions*</td>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">Part A: 25 MCQs<br />Part B: 75 MCQs</td>
                </tr>
                <tr>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">Duration</td>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">2 hours</td>
                </tr>
                <tr>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">Pattern</td>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">OMR Pattern</td>
                </tr>
                <tr>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">Marking scheme</td>
                  <td className="border-t border-solid border-steelblue-100 border-l px-4 py-2">Correct Answer: +1 Mark<br />Incorrect Answer: -0.25 Mark</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="col col-lg-12 col-xs-12 about-company-s2-slider-wrapper">
            <p className="text-justify font-bold text-[#0D88CB] mt-3 mb-3">Top Universities for CUCET Admissions</p>
            <p className="text-justify">With NTA Common Aptitude Test, you can get admission into any of the 54 universities. Let us understand about the top universities below:</p>
            <p className="text-justify font-bold text-[#0D88CB] mt-3 mb-3">Jamia Millia Islamia</p>
            <ul className="list-disc pl-5">
              <li className="text-justify mb-3">This is the first university you can target after giving CUCET. This university was ranked the best central university of India in rankings released by the ministry of education in 2020.</li>
              <li className="text-justify mb-3">Located in Delhi, this university offers 56 Undergraduate courses.</li>
              <li className="text-justify mb-3">Some of the popular courses at JMI include mass communication, law, architecture, engineering, social work.</li>
            </ul>
            <p className="text-justify font-bold text-[#0D88CB] mt-3 mb-3">Jawaharlal Nehru University</p>
            <ul className="list-disc pl-5">
              <li className="text-justify mb-3">JNU is the top 2nd university in Delhi and it is the high-ranking university by NIRF every year.</li>
              <li className="text-justify mb-3">The university is known for foreign language courses at the UG level.</li>
              <li className="text-justify mb-3">It has been conducting its own entrance exam for the selection of students to different courses.</li>
              <li className="text-justify mb-3">This is awarded as the best university by the President of India.</li>
            </ul>
            <p className="text-justify font-bold text-[#0D88CB] mt-3 mb-3">Banaras Hindi University</p>
            <ul className="list-disc pl-5">
              <li className="text-justify mb-3">As per the NIRF ranking, BHU is ranked at 3 among the other universities.</li>
              <li className="text-justify mb-3">This is a popular fully residential university located in Varanasi.</li>
              <li className="text-justify mb-3">Some of the popular courses at BHU include Agricultural Science, Environment, and sustainable development. Medicine, Law, Arts, Commerce, social sciences, and performing arts.</li>
            </ul>
            <p className="text-justify font-bold text-[#0D88CB] mt-3 mb-3">University of Delhi</p>
            <ul className="list-disc pl-5">
              <li className="text-justify mb-3">Is one of the top universities for various UG courses. More than 5.5 lakh students registered for Delhi University in 2020.</li>
              <li className="text-justify mb-3">20 colleges under the University of Delhi are placed in the top 50 NIRF of India.</li>
              <li className="text-justify mb-3">University is known for its various courses like Social science, Economics, History, English, Psychology, Geography, Political Science</li>
              <li className="text-justify mb-3">High competition at DU is coming to an end due to the common aptitude test.</li>
            </ul>
            <p className="text-justify font-bold text-[#0D88CB] mt-3 mb-3">Aligarh Muslim University</p>
            <ul className="list-disc pl-5">
              <li className="text-justify mb-3">Other religious students can also apply however, the majority is for Muslims.</li>
              <li className="text-justify mb-3">One of the oldest universities has off campuses in West Bengal and Kerala.</li>
              <li className="text-justify mb-3">This university is ranked at 17 for overall universities ranking.</li>
              <li className="text-justify mb-3">Some of the popular courses at Aligarh include engineering, law, medicine, social work, management.</li>
            </ul>
            <p className="text-justify font-bold text-[#0D88CB] mt-3 mb-3">CUCET 2022 Syllabus: Expected Topics</p>
            <p className="text-justify mb-3">Given are the expected topics for UG or Integrated courses offered through this entrance exam.</p>
            <p className="text-justify font-bold text-[#0D88CB] mt-3 mb-3">CUCET Expected Topics for Non-Engineering Courses</p>
            <p className="text-justify mb-3">There will be only one test paper for this session. The question paper will comprise 100 MCQs from the following discipline. i.e. English, Numerical Aptitude/Data Interpretation, Analytical Skills, Reasoning, General Aptitude, General Knowledge.</p>
            <p className="text-justify font-bold text-[#0D88CB] mt-3 mb-3">CUCET Expected Topics for Engineering Courses</p>
            <p className="text-justify mb-3">Part A will comprise 25 MCQs from the following discipline. i.e. English, Numerical Aptitude/Data Interpretation, Analytical Skills, Reasoning, General Aptitude, General Knowledge.</p>
            <p className="text-justify mb-3">Part B is a domain knowledge-based section that will check topics related to Physics, Chemistry, and Biology.</p>
            <p className="text-justify mb-3">You must answer Section I (Physics) & II (Chemistry). From Section III and Section IV, only one section either Mathematics (Section III) or Biology (Section IV) should be attempted and answered. In case, a candidate answers both Mathematics and Biology Sections, the best of three sections i.e. Section I, II, and either III or IV will be evaluated and considered for result preparation.</p>
            <p className="text-justify font-bold text-[#0D88CB] mt-3 mb-3">How will SuperGrads Students be benefited?</p>
            <ul className="list-disc pl-5">
              <li className="text-justify mb-3">Along with regular entrance exams like IPMAT, St. Xaviers, CUET, AAT, TISS BAT, students can now target other colleges under Delhi University.</li>
              <li className="text-justify mb-3">You can choose the course of your choice and prepare for the aptitude test better.</li>
              <li className="text-justify mb-3">The pressure of securing a high percentage is now stopped.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Link to="/login" className="relative bg-[#0D88CB] px-[100px] rounded-3xl p-4 flex text-center justify-center text-white text-[30px] items-center my-5 ">Register</Link>

      </div>
      <Footer/>
    </div>

  )
};

export default Cucet;
