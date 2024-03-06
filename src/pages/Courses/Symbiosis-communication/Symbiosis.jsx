import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';
// import './Nmims.css';


const SYMB = () => {
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
                Symbiosis Institute of Media & Communication
                </h2>
              </div>
              <div className="col about-company-s2-slider-wrapper">
              <p class="ph-justify"><b className='b-container'>Course: B.A (MC)</b></p>
              <p class="ph-justify"><b className='b-container'>Intake:</b> 120 seats</p>
              <p class="ph-justify"><b className='b-container'>Admission Process and Eligibility: (as per 2017 Notification)</b></p>
              <ol style={{listStyle:'decimal',margin:'1.5rem'}}>
                                        <li>
                                            <p class="ph-justify">XII pass from any branch with minimum 50% marks for
                                                general category and 45% for students of SC and ST category.</p>
                                        </li>
                                        <li>
                                            <p class="ph-justify">Qualifying the<b className='b-container'> Symbiosis Entrance Test (SET) on 6th
                                                    May 2017 + </b>Personal interview & Writing Ability Test + Studio
                                                Test.</p>
                                        </li>
                </ol>
                <p class="ph-justify"><b className='b-container'>SCMC : 30 Marks (SET) + 30 Marks (PI) + 10 Marks (WAT)+10
                                            Marks (Studio Test) + 20(Academic Profile)</b></p>
                <div className="tab-pane fade show active" id="pills-home">
                  <table className="custom-table1">
                    <thead className='component1'>
                      <tr>
                      <th>Sr. No.</th>
                      <th>Section</th>
                      <th>Number of Questions</th>
                      <th>Total Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>General English</td>
                        <td>40</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Quantitative</td>
                        <td>40</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>General Awareness</td>
                        <td>40</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Analytical & Logical Reasoning</td>
                        <td>30</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total</td>
                        <td>150</td>
                        <td>150</td>
                    </tr>

                    </tbody>
                  </table>
                </div>
              </div>
              <p class="ph-justify"><b className='b-container'>Each question carries One mark and NO negative marking</b> </p>
                <p class="ph-justify"><b className='b-container'>Duration: 150 minutes</b></p>
                <p class="ph-justify"><b className='b-container'>Course Fee:</b> Rs 2,50,000 per annum</p>
              <div className="col">
                <div className="tab-pane fade show active custom-table-wrapper">
              <p class="ph-justify"><b className='b-container'>CURRICULUM</b></p>
                  <table className="custom-table1">
                    <thead className='component1'>
                      <tr>
                      <th>Year</th>
                      <th>Semester</th>
                      <th>Course Outline</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                     <td>First Year</td>
                     <td>Semester I</td>
                     <td>Foundation - 1</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td>Semester II</td>
                     <td>Foundation - 2</td>
                 </tr>
                 <tr>
                     <td>Second Year</td>
                     <td>Semester III</td>
                     <td>Mass Communication - 1</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td></td>
                     <td>Communication Management - 1</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td>Semester IV</td>
                     <td>Mass Communication - 2</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td></td>
                     <td>Communication Management - 2</td>
                 </tr>
                 <tr>
                     <td>Third Year</td>
                     <td>Semester V</td>
                     <td>Mass Communication - 3</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td></td>
                     <td>Journalism - 1</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td></td>
                     <td>Audio-Visual Production - 1</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td></td>
                     <td>Communication Management - 3</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td></td>
                     <td>Advertising - 1</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td></td>
                     <td>Public Relations - 1</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td>Semester VI</td>
                     <td>Mass Communication - 4</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td></td>
                     <td>Journalism - 2</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td></td>
                     <td>Audio-Visual Production - 2</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td></td>
                     <td>Communication Management – 4</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td></td>
                     <td>Advertising – 2</td>
                 </tr>
                 <tr>
                     <td></td>
                     <td></td>
                     <td>Public Relations – 2</td>
                 </tr>

                    </tbody>
                  </table>
                </div>
                
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

export default SYMB;
