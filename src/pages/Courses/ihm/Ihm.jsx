import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';
// import './Ipcw.css';


const IHM = () => {
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
                <p className="ph-justify"><b className='b-container'>COURSES:</b></p>
                <ol style={{ listStyleType: 'decimal',margin: '1.5rem' }}>
                              <li><p className='ph-justify'>4 Year BA(Honours) in Hotel Management</p></li>
                              <li><p className='ph-justify'>4 Year BA(Honours) Culinary Arts</p></li>
                            </ol>

                <p className="ph-justify">After 1st & 2nd Year, students can opt to continue education in either UK(University of Huddersfield) or in India itself.</p>


                <p className="ph-justify"><b className='b-container'>ELIGIBILITY CRITERIA:</b></p>
                <p className="ph-justify">Successful completion of the Std.XII (10+2) or equivalent examination in any stream with English as the medium of instruction.</p>
                <p className="ph-justify"><b className='b-container'>SELECTION PROCEDURE:</b></p>
                <p className="ph-justify">Electronic Profiling + Group Discussion + Writing a Statement of Purpose and Personal Interview in July/August 2017</p>
                <p className="ph-justify">Final Selection will be collective assessment of your Profiling (weightage - 20%), Statement of Purpose and Group Discussion (weightage – 30%) and a Personal Interview (weightage – 50%)</p>
                <p className="ph-justify"><b className='b-container'>During Personal Interview they will be seeking talent in the following five areas:</b></p>
                <ul style={{listStyleType: 'disc',margin:'1.5rem'}}>
                      <li><p class="ph-justify">Communication Skills</p></li>
                      <li><p class="ph-justify">Analytical Skills</p></li>
                      <li><p class="ph-justify">General Awareness</p></li>
                      <li><p class="ph-justify">Service Orientation</p></li>
                      <li><p class="ph-justify">Personality Factors</p></li>
                    </ul>
                    <p class="ph-justify"><b className='b-container'>COURSE CURRICULUM:</b></p>


                <div className="tab-pane fade show active" id="pills-home">
                  <table className="custom-table1">
                    <thead className='component1'>
                      <tr>
                        <th>Course Structure (UK)</th>
                       <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                         <td>4 Year BA (Honours) Hotel Management</td>
                        <td>4 Year BA (Honours) Culinary Arts</td>
                      </tr>
                      <tr>
                          <td>Year I – Hotel Management Foundation Level </td>
                        <td>Year I – Culinary Arts Foundation Level</td>
                      </tr>
                      <tr>
                         <td>(120 credits)</td>
                        <td>(120 credits)</td>
                      </tr>
                      <tr>
                          <td>Year II – Hotel Management Intermediate Level </td>
                        <td>Year II – Culinary Arts Intermediate Level</td>
                      </tr>
                       <tr>
                         <td>(240 credits)</td>
                        <td>(240 credits)</td>
                      </tr>
                      <tr>
                          <td>Year III – Hotel Management Honours Level</td>
                        <td>Year III – Culinary Arts Honours Level</td>
                      </tr>
                       <tr>
                         <td>(Sandwich Year - 120-S Level Credits)</td>
                        <td>(360 credits)</td>
                      </tr>
                      <tr>
                          <td>Year IV – Hotel Management Honours Level</td>
                        <td>Year IV – Culinary Arts Honours Level </td>
                      </tr>
                       <tr>
                         <td>(360 credits)</td>
                        <td>(Sandwich Year - 120-S Level Credits)</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade show active" id="pills-home">
                  <table className="custom-table1">
                    <thead className='component1'>
                      <tr>
                        <th>Course Structure (India)</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                       <td>4 Year BA (Honours) Hotel Management</td>
                      <td>4 Year BA (Honours) Culinary Arts</td>
                    </tr>
                    <tr>
                       <td>Year I – Hotel Management Foundation Level</td>
                      <td>Year I – Culinary Arts Foundation Level</td>
                    </tr>
                     <tr>
                       <td>(120 credits)</td>
                      <td>(120 credits)</td>
                    </tr>
                     <tr>
                       <td>Year II – Hotel Management Intermediate Level</td>
                      <td>Year II – Culinary Arts Intermediate Level </td>
                    </tr>
                     <tr>
                       <td>(240 credits)</td>
                      <td>(240 credits)</td>
                    </tr>
                     <tr>
                       <td>Year III – Hotel Management Honours Level </td>
                      <td>Year III – Culinary Arts Honours Level </td>
                    </tr>
                     <tr>
                       <td>(360 credits)</td>
                      <td>(360 credits)</td>
                    </tr>
                     <tr>
                       <td>Year IV – Hotel Management Honours Level </td>
                      <td>Year IV – Culinary Arts Honours Level</td>
                    </tr>
                     <tr>
                       <td>(Sandwich Year - 120-S Level Credits)</td>
                      <td>(Sandwich Year - 120-S Level Credits)</td>
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default IHM;
