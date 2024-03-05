import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';

const GSIU = () => {
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
                  Gobind Singh Indraprastha University
                </h2>
              </div>
              <div className="col about-company-s2-slider-wrapper">
                <p className="ph-justify"><b className='b-container'>Eligibility:</b></p>
                <p className='ph-justify'>Minimum 50% in Senior Secondary (XIIth) with English as a subject. Age should be less than 21 years as on 1st August</p>
                <p className="ph-justify"><b className='b-container'>Selection :</b> Objective-type written exam to be held in 21st May 2017</p>

                <p className="ph-justify"><b className='b-container'>WRITTEN TEST PATTERN :</b></p>
                <div className="tab-pane fade show active" id="pills-home">
                  <table className="custom-table1">
                    <thead className='component1'>
                      <tr>
                        <th>Total Marks</th>
                        <th>Total Questions</th>
                        <th>Marking Scheme</th>
                        <th>Duration of Test</th>
                        <th>Subjects</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>600</td>
                        <td>150</td>
                        <td>Positive Marks = +4 ,</td>
                        <td>2.5 Hours</td>
                        <td>English Language & Comprehension – 30</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Negative Marks = -1</td>
                        <td></td>
                        <td>Logical Reasoning – 40</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Current Affairs - 30</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>General Awareness – 30</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Service Aptitude – 20</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>(NO Mathematics)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="ph-justify"><b className='b-container'>Exam Date: 21st May 2017</b></p>
              <p className="ph-justify"><b className='b-container'>Fees: Approx. Rs. 40,000 per annum</b></p>
              <p className="ph-justify"><b className='b-container'>No. of Seats: 120</b></p>
              <p className="ph-justify"><b className='b-container'>Course Curriculum:</b></p>
              <div className="tab-pane fade show active" id="pills-home">
                <table className="custom-table1">
                  <thead className='component1'>
                    <tr>
                      <th>FIRST SEMESTER</th>
                      <th>SECOND SEMESTER</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Food Production & Patisserie-I</td>
                      <td>Food Production & Patisserie-II</td>
                    </tr>
                    <tr>
                      <td>Front Office Operations -I</td>
                      <td>Front Office Operations -II</td>
                    </tr>
                    <tr>
                      <td>Food & Beverage Service -I</td>
                      <td>Food & Beverage Service-II</td>
                    </tr>
                    <tr>
                      <td>Housekeeping Operations-I</td>
                      <td>Housekeeping Operations-II</td>
                    </tr>
                    <tr>
                      <td>Introduction to Book Keeping & Accounts</td>
                      <td>Hygiene, Sanitation & First Aid</td>
                    </tr>
                    <tr>
                      <td>Introduction to the Hospitality</td>
                      <td>Accountancy for Hospitality Industry</td>
                    </tr>
                    <tr>
                      <td>Mgmt & Tourism</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Business Communication</td>
                      <td>PC Tools for Hospitality Industry-I</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="tab-pane fade show active" id="pills-home">
                <table className="custom-table1">
                  <thead className='component1'>
                    <tr>
                      <th>THIRD SEMESTER</th>
                      <th>FOURTH SEMESTER</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Food Production & Patisserie-III</td>
                      <td>Food Production & Patisserie-IV</td>
                    </tr>
                    <tr>
                      <td>Front Office Operations III</td>
                      <td>Front Office Operations IV</td>
                    </tr>
                    <tr>
                      <td>Food & Beverage Service-III</td>
                      <td>Food & Beverage Service- IV</td>
                    </tr>
                    <tr>
                      <td>Housekeeping Operations III</td>
                      <td>Housekeeping Operations-IV</td>
                    </tr>
                    <tr>
                      <td>Food Science & Nutrition</td>
                      <td>Hotel Engineering</td>
                    </tr>
                    <tr>
                      <td>PC Tools for Hospitality Industry-II</td>
                      <td>Material Management & Development</td>
                    </tr>
                    <tr>
                      <td>Tourism Product, Services & Management</td>
                      <td>Principles of Management</td>
                    </tr>
                    <tr>
                      <td>Summer Training Report</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Environmental Studies</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="tab-pane fade show active" id="pills-home">
                <table className="custom-table1">
                  <thead className='component1'>
                    <tr>
                      <th>FIFTH SEMESTER</th>
                      <th>SIXTH SEMESTER</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Food Production & Patisserie-V</td>
                      <td>-Functional Exposure Training</td>
                    </tr>
                    <tr>
                      <td>Front Office Operations-V</td>
                      <td>As per training Programme Designed followed by Project Report</td>
                    </tr>
                    <tr>
                      <td>Food & Beverage Service V</td>
                      <td>and Project Presentation during Semester End Examination.</td>
                    </tr>
                    <tr>
                      <td>Housekeeping Operations V</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Research Project Design & Methodology</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Hotel Law & Licensing</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Facility Planning</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="tab-pane fade show active" id="pills-home">
                <table className="custom-table1">
                  <thead className='component1'>
                    <tr>
                      <th>SEVENTH SEMESTER</th>
                      <th>EIGHT SEMESTER</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Advance Food Production Management-I</td>
                      <td>Advance Food Production Mgmt-II</td>
                    </tr>
                    <tr>
                      <td>Rooms Division Management -I</td>
                      <td>Advance Rooms Division Mgmt-II</td>
                    </tr>
                    <tr>
                      <td>Advance Food & Beverage</td>
                      <td>Advance Food & Beverage Services Management -</td>
                    </tr>
                    <tr>
                      <td>Service Management -I</td>
                      <td>II</td>
                    </tr>
                    <tr>
                      <td>Advance Housekeeping Operation</td>
                      <td>Entrepreneurship Development & Business </td>
                    </tr>
                    <tr>
                      <td>Mgmt-I</td>
                      <td>Strategies</td>
                    </tr>
                    <tr>
                      <td>Financial Management - I</td>
                      <td>Financial Management-II</td>
                    </tr>
                    <tr>
                      <td>Managing Hospitality Human</td>
                      <td>Managing Hospitality Human Resources-II</td>
                    </tr>
                    <tr>
                      <td>Resources-I</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Hospitality Service Marketing & Sales</td>
                      <td>Integrated Marketing Communication</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Project Report</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <div className='flex justify-center'>
          <Link to="/login" className="register-button1">Register</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GSIU;
