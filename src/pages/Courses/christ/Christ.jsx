import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';
// import './Christ.css';


const CHRIST = () => {
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
                    Christ University
                </h2>
              </div>
              <div className="col about-company-s2-slider-wrapper">
                <p className="ph-justify"><b className='b-container'>COURSE(S) OFFERED:</b> BBA, BBA Finance & Accountancy, BBA Finance & International Business, BBA (H) &BBA Business Analytics – Lavasa, Pune Campus.
                B.Com (H), B.Com (Finance & Accountancy), B.Com (International Finance), B.Com (Strategic Finance Honours) & B.Com Professional AND (BA) Honours in Economics.</p>
                <p className="ph-justify"><b className='b-container'>ELIGIBILITY CRITERIA:</b></p>
                <p className="ph-justify"><b className='b-container'> For BBA&BBA (H), B.Com, B.Com (Finance & Accountancy):</b> Eligibility for the programme is a pass at the +2 in any stream from any recognized Board in India. </p>
                <p className="ph-justify"><b className='b-container'> B.Com (H) & B.Com (Strategic Finance Honours):</b>  Eligibility for the programme is a pass at the +2 level (Karnataka PUC / ISC / CBSE / NIOS / State Boards) with not less than 60% from any recognized Board in India.</p>

                <p className="ph-justify"><b className='b-container'>For BBA Finance and International Business:</b> Basic eligibility for the programme is a minimum of 55 % at the +2 level in any stream from any recognized Board in India. </p>
                <p className="ph-justify"><b className='b-container'>BBA (Finance and Accountancy), B.Com (H), B.Com (Strategic Finance Honours),B.ComProfessional AND B.Com (International Finance):</b> Eligibility for the programme is a pass with a minimum of 60% at the +2 level from any recognized Board in India. </p>
                <p className="ph-justify"><b className='b-container'> BBA (Finance and Accountancy), B.ComProfessional & B.Com (International Finance):</b> Eligibility for the programme is a pass with a minimum of 60% at the +2 level in either Commerce or Sciences stream from any recognized Board in India. </p>
                <p className="ph-justify"><b className='b-container'>(BA) Honours in Economics:</b> Basic eligibility for the programme is a pass with minimum 55% at the +2 level in any stream from any recognized Board in India. Candidates should have studied Economics/ Mathematics/ Statistics at the +2 level.</p>
                <p className="ph-justify"><b className='b-container'> SELECTION/ADMISSION PROCESS:</b> BBA, B.Com (H), (BA) Honours in Economics:CHRIST Entrance Test, Skill Assessment, Micro Presentation (MP), Personal interview& Assessment of past performance in Class 10, Class 11/12. </p>
                <p className="ph-justify"><b className='b-container'> B.Com B.Com (Finance & Accountancy):</b>Selection for the programme will be based on the performance in class XII of the academic year. </p>
              </div>
              <div className="col">
                <div className="tab-pane fade show active custom-table-wrapper">
                  <p className="ph-justify"><b className='b-container'>ENTRANCE PATTERN:</b></p>


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
                        <td>Fundamental Accounting	</td>
                        <td>20</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>Mathematics	</td>
                        <td>20</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>Data Analysis & Interpretation</td>
                        <td>20</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>Reasoning</td>
                        <td>20</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>General Knowledge</td>
                        <td>20</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>English</td>
                        <td>20</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td className='sol'>TOTAL</td>
                        <td className='sol'>120</td>
                        <td className='sol'>120</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="ph-justify"><b className='b-container'>NEGATIVE MARKING:</b>Yes</p>
                <p className="ph-justify"><b className='b-container'>MARKING SCHEME:</b>+1 for correct answer & - 0.25 for incorrect</p>
                <p className="ph-justify"><b className='b-container'>EXPECTED ENTRANCE DATE:</b>APRIL end or MAY 1nd Week</p>
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

export default CHRIST;
