import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';
// import './Xavier.css';


const XAVIER = () => {
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
                  St Xavier’s College, Mumbai
                </h2>
              </div>
              <div className="col about-company-s2-slider-wrapper">
              <p className="ph-justify"><b className='b-container'>COURSE(S) OFFERED:</b>Bachelor of Management Studies (BMS)</p>
              <p className="ph-justify"><b className='b-container'>NUMBER OF SEATS:</b>60Seats</p>
              <p className="ph-justify"><b className='b-container'>ELIGIBILITY CRITERIA:</b> The candidate belonging to General/Open category should have passed the final Examination of 10 + 2 system conducted by any recognized Central / State Board with at least 65% aggregate marks. Minimum percentage requirement for Christian Minority Candidate is 60% & SC/ST candidate is 55%.</p>
              <p className="ph-justify"><b className='b-container'>SELECTION/ADMISSION PROCESS:</b>Category-wise Final Merit list for the Admission will be computed as under:60% weightage to the score obtained in the online test. 40% weightage to the score obtained in the qualifying Class XII Examinations.</p>
              </div>
              <div className="col">
                <div className="tab-pane fade show active custom-table-wrapper">
                  <p className="ph-justify"><b className='b-container'>Entrance Pattern:</b></p>

                  <table className="custom-table1">
                    <thead className='component1'>
                      <tr>
                        <th>Section</th>
                        <th>Number of Questions</th>
                        <th>Total Marks </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>English</td>
                        <td>20</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>Logical Reasoning & Visual Reasoning</td>
                        <td>20</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td className='sol'>Data Interpretation</td>
                        <td className='sol'>20</td>
                        <td className='sol'>20</td>
                      </tr>
                      <tr>
                        <td>Mathematics</td>
                        <td>20</td>
                        <td>20</td>                     
                     </tr>
                      <tr>
                        <td>General Knowledge & General Awareness</td>
                        <td>20</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>TOTAL</td>
                        <td>100</td>
                        <td>100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
               <p className="ph-justify"><b className='b-container'> NEGATIVE MARKING:</b> No Negative Marking.</p>
               <p className="ph-justify"><b className='b-container'> MARKING SCHEME:</b> +1 for correct answer</p>
               <p className="ph-justify"><b className='b-container'> EXPECTED ENTRANCE DATE:</b> JUNE1nd Week</p>

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

export default XAVIER;
