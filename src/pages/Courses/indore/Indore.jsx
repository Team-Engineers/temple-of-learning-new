import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import './Indore.css';

const IIMIndore = () => {
  return (
    <div>
      <Navbar />

      <main id="body-content" className="main-content max-w-[1200px] mx-auto overflow-hidden">
        <div className="bg-[#C4F7D1] absolute inset-0 z-[-1] filter blur-[75px] w-56 h-48 border-black top-32 "></div>
        <section className="about-company-s2 section-padding">
          <div className="container-section">
            <div className="row">
              <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
                <h2 className="heading-main-containers">
                  IIM Indore, IPM
                </h2>
              </div>
              <div className="col about-company-s2-slider-wrapper">
                <p className="ph-justify">IIM Indore offers a five year regular and full time academic programme called “Integrated Programme in Management”, upon successful completion of all program requirements, students will be issued certificate of “Integrated Diploma in Management” by IIM Indore</p>
                <p className="ph-justify"><b className='b-container'>Eligibility:</b></p>
                <p className="ph-justify"><b className='b-container'>ELIGIBILITY CRITERIA:</b></p>
                <ul>
                    <li><p className="ph-justify">60% aggregate marks at Secondary/ X Std/ Equivalent and at Higher Secondary/XII/+2 level/ Equivalent for General and NC-OBC category candidates ;Maximum 20 years of age as on July 31, 2017.</p></li>
                    <li><p className="ph-justify">55% aggregate marks at Secondary/ X Std/ Equivalent and at Higher Secondary/XII/+2 level/ Equivalent for SC/ST/PWD; Maximum 22 years of age as on July 31,2017.</p></li>
                </ul>
                <p className="ph-justify">The candidates will be selected on the basis of overall performance in Computer based Aptitude Test and Personal Interview.</p>
                <p className="ph-justify"><b className='b-container'>Selection Process:</b></p>
                <p className="ph-justify">The candidates will be selected on the basis of overall performance in Aptitude Test (IPMAT), Written Ability Test (WAT) and Personal Interview (P1). The selection process is as follows:</p>
                <p className='ph-justify'><b className='b-container'>Stage 1:</b>Computer based Aptitude Test (IPMAT)</p>
                <p className='ph-justify'><b className='b-container'>Stage 2:</b>WAT (Written Ability Test) + PI(Personal Interview)</p>

                <div className="tab-pane fade show active" id="pills-home">
                  <table className="custom-table1">
                    <thead className='component1'>
                      <tr>
                        <th>Component</th>
                        <th>Weightage %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Aptitude Test Score (ATS) </td>
                        <td>50</td>
                      </tr>
                      <tr>
                        <td>Personal Interview(PI)</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>Written Ability Test(WAT)</td>
                        <td>15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col">
                <div className="tab-pane fade show active custom-table-wrapper">
                  <p className="ph-justify"><b className='b-container'>Test Pattern:</b></p>
                  <p className="ph-justify">AT will be of objective‐type nature.</p>
                  <p className="ph-justify"><b className='b-container'>Number of Sections:</b>Quantitative Ability and Verbal Ability.</p>
                  <p className="ph-justify"><b className='b-container'>Total Question:</b>100 questions</p>
                  <p className="ph-justify"><b className='b-container'>Time Duration:</b>2 Hours</p>
                  <p className="ph-justify"><b className='b-container'>Candidates must answer the sections in a pre-specified order:</b></p>
                  <ul>
                    <li><p className="ph-justify"><b className='b-container'>Duration:</b>2 Hours</p></li>
                    <li><p className="ph-justify"><b className='b-container'>Section-</b></p></li>
                  </ul>

                  <table className="custom-table1">
                    <thead className='component1'>
                      <tr>
                        <th>Section</th>
                        <th>Number of Questions</th>
                        <th>Time Duration for each section</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>QA(MCQ)</td>
                        <td>40</td>
                        <td>40 minutes</td>
                      </tr>
                      <tr>
                        <td>QA (Short Answers)</td>
                        <td>20</td>
                        <td>40 minutes(No Negative Marking)</td>
                      </tr>
                      <tr>
                        <td className='sol'>VA (MCQ)</td>
                        <td className='sol'>40</td>
                        <td className='sol'>40 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="ph-justify"><b className='b-container'>*Candidates must answer the sections in a pre-specified order:</b></p>
                <ul>
                    <li><p className="ph-justify"><b className='b-container'>Total Questions:</b>100 Question</p></li>
                    <li><p className="ph-justify"><b className='b-container'>Marking Scheme: </b>Each correct answer will get a score of +4 marks, each wrong answer will get a score of -1 mark. QA (Short Answer) will not have negative marking.</p></li>
                    <li><p className="ph-justify"><b className='b-container'>Date of Examination: </b>30th April</p></li>
                    <li><p className="ph-justify"><b className='b-container'>Total Seats:</b>120</p></li>
            </ul>
            <p className="ph-justify"><b className='b-container'>Test Pattern:</b></p>
            <ul>
                    <li><p className="ph-justify"><b className='b-container'>Duration:</b>30 Minutes</p></li>
                    <li><p className="ph-justify"><b className='b-container'>Word Limit: </b>150 Words</p></li>
                    <li><p className="ph-justify"><b className='b-container'>Date of Examination: </b>30th April</p></li>
                    <li><p className="ph-justify">Candidates are made to write an essay on subjective or topics of current relevance</p></li>
            </ul>
            <p className="ph-justify"><b className='b-container'>Personal Interview (PI)</b></p>
            <ul>
                    <li><p className="ph-justify"><b className='b-container'>Duration:</b> 15-20 minutes each.</p></li>
                    <li><p className="ph-justify">Strong focus on Academics and Current Affairs.</p></li>
            </ul>

            <p className="ph-justify"><b className='b-container'>Fee Structure:</b></p>
            <p className="ph-justify">Tuition fee for the programme for the first 3 years would be Rs. 4 Lakhs per annum for the first three years and Course fee for the fourth and fifth years would be Rs.16 Lakhs.</p>
            <p className="ph-justify"><b className='b-container'>Course Curriculum:</b></p>
            <p className="ph-justify">IPM is a five year Integrated Programme in Management, with entry after 12th Class. The objective of this programme is to provide a holistic, yet management oriented education to school leaving students. The programme follows the trimester system, with 3 terms per year.</p>
              </div>
            </div>
          </div>
        </section>

        <div className='flex justify-center'>
          <Link to="/login" className="register-button1">Register</Link>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default IIMIndore;
