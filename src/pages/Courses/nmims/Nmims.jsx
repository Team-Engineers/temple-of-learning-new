import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';
// import './Nmims.css';


const NMIMS = () => {
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
                     NMIMS (NPAT)
                </h2>
              </div>
              <div className="col about-company-s2-slider-wrapper">
                <p className="ph-justify"><b className='b-container'>COURSE(S) OFFERED:</b></p>
                <p className="ph-justify">Bachelor of Business Administration (BBA), B.Sc (Finance), B.Com (Hons.) and B.Sc Economics AND BBA (Branding & Advertising)</p>

                <div className="tab-pane fade show active" id="pills-home">
                  <table className="custom-table1">
                    <thead className='component1'>
                      <tr>
                        <th>NMIMS CAMPUS</th>
                        <th>BBA</th>
                        <th>B.Com (H)</th>
                        <th>B.Sc. Finance	</th>
                        <th>B.Sc. Economics	</th>
                        <th>BBA (B&A)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mumbai Campus </td>
                        <td>600</td>
                        <td>180</td>
                        <td>180</td>
                        <td>180</td>
                        <td>120</td>

                      </tr>
                      <tr>
                        <td>Bengaluru Campus</td>
                        <td>120</td>
                        <td>120</td>
                        <td>60</td>
                        <td>60</td>
                        <td></td>

                      </tr>
                      <tr>
                        <td>Navi Mumbai Campus</td>
                        <td>180</td>
                        <td>120</td>
                        <td>60</td>
                        <td>60</td>
                        <td></td>

                      </tr>
                      <tr>
                        <td>Indore Campus</td>
                        <td>120</td>
                        <td>60</td>
                        <td>60</td>
                        <td></td>
                        <td></td>

                      </tr>
                      <tr>
                        <td>Dhule Campus</td>
                        <td>60</td>
                        <td>60</td>
                        <td></td>
                        <td></td>
                        <td></td>

                      </tr>
                      <tr>
                        <td>Hyderabad Campus</td>
                        <td>60</td>
                        <td>60</td>
                        <td></td>
                        <td></td>
                        <td></td>

                      </tr>
                      <tr>
                        <td>Chandigarh Campus</td>
                        <td>60</td>
                        <td>60</td>
                        <td></td>
                        <td></td>
                        <td></td>

                      </tr>
                      <tr>
                        <td>TOTAL</td>
                        <td>1260</td>
                        <td>660</td>
                        <td>360</td>
                        <td>300</td>
                        <td>120</td>

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col">
                <div className="tab-pane fade show active custom-table-wrapper">
                  <p className="ph-justify"><b className='b-container'>ELIGIBILITY CRITERIA:</b></p>
                  <p className="ph-justify">A candidate must have passed 10+2 or equivalent examination and must have obtained a minimum of 60% aggregate marks for being able to do BBA/B.Sc. Finance & B.Com (H) with Mathematics / Statistics at their 10+2 or equivalent examination in one or the first attempt.</p>
                  <p className="ph-justify">For<b className='b-container'> BBA (Branding & Advertising):</b> Mathematics or Statistics is not compulsory.</p>
                  <p className="ph-justify">For<b className='b-container'> SELECTION/ADMISSION PROCESS:</b>The candidates will be selected on the basis of Final Merit Ranks are compiled from the overall NPAT Score based on the “Course and Campus Preferences” as filled by candidates.</p>
                  <p className="ph-justify"><b className='b-container'>ENTRANCE PATTERN:</b></p>


                  <table className="custom-table1">
                    <thead className='component1'>
                      <tr>
                        <th>Section</th>
                        <th>Number of Questions</th>
                        <th>Time Duration for each section </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Quantitative Aptitude</td>
                        <td>40</td>
                        <td>100 minutes</td>
                      </tr>
                      <tr>
                        <td>Logical Reasoning</td>
                        <td>40</td>
                        <td>100 minutes</td>
                      </tr>
                      <tr>
                        <td className='sol'>Verbal Ability</td>
                        <td className='sol'>40</td>
                        <td className='sol'>100 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="ph-justify"><b className='b-container'>NEGATIVE MARKING:</b>No Negative Marking.</p>
                <p className="ph-justify"><b className='b-container'>MARKING SCHEME:</b>+1 for correct answer</p>
                <p className="ph-justify"><b className='b-container'>EXPECTED ENTRANCE DATE:</b>MAY 2nd Week</p>
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

export default NMIMS;
