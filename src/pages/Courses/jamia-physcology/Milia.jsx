import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';

const MILIA = () => {
  return (
    <div>
      <Navbar />

      <main id="body-content" className="main-content max-w-[1200px] mx-auto overflow-hidden">
        <div className="bg-[#C4F7D1] absolute inset-0 z-[-1] filter blur-[75px] w-56 h-48 border-black top-32 "></div>
        <section className="about-company-s2 section-padding">
          <div className="container-section">
            <div className="row">
              <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
                <h2 className="heading-main-containers">Jamia Millia Islamia University (Psychology)</h2>
              </div>
              <div className="col about-company-s2-slider-wrapper">
                <p className="ph-justify"><b className='b-container'>PSYCHOLOGY</b></p>
                <p className="ph-justify">Are you inquisitive about the human mind and behaviors? Do you enjoy reading people closely and analyzing their every step? Are you good at listening to people and empathizing with them? Are you the person people turn to when looking for any advice? Then, Psychology is the field for you! This program generally offers education in human behavior and related sciences, along with core psychology course work.</p>
                <p className="ph-justify"><b className='b-container'>Why Psychology?</b></p>
                <p className="ph-justify">It helps broaden the realm of human behaviors and magnify the understanding of how a mind works. A major in Psychology opens up several interesting opportunities for a candidate. Having a good understanding of the human mind and behaviors can help you excel in a wide variety of career paths.</p>
                <p className="ph-justify"><b className='b-container'>Career Prospects</b></p>
                <ul style={{listStyle:'disc',margin:'1.5rem'}}>
                  <li><p className="p-justify">Teaching</p></li>
                  <li><p className="ph-justify">Career Counselling</p></li>
                  <li><p className="ph-justify">Clinical Psychology</p></li>
                  <li><p className="ph-justify">Research</p></li>
                  <li><p className="ph-justify">Forensic Psychologist</p></li>
                  <li><p className="ph-justify">Rehabilitation Counsellor</p></li>
                  <li><p className="ph-justify">Market Researcher</p></li>
                </ul>
                <p className="ph-justify"><b className='b-container'>Colleges</b></p>
              </div>
              <div className="col">
                <div className="tab-pane fade show active custom-table-wrapper">
                  <table className="custom-table1">
                    <thead className='component1'>
                      <tr>
                        <th>Name Of college/University</th>
                        <th>Seats</th>
                        <th>Entrance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>University of Delhi (17 Colleges)</td>
                        <td>922</td>
                        <td>Merit based</td>
                      </tr>
                      <tr>
                        <td>Christ University (Triple Major Program)</td>
                        <td>NA</td>
                        <td>CUET+PI+SA</td>
                      </tr>
                      <tr>
                        <td>Jamia Millia Islamia</td>
                        <td>42</td>
                        <td>Ent. Test</td>
                      </tr>
                      <tr>
                        <td>Banaras Hindu University</td>
                        <td>100</td>
                        <td>UET</td>
                      </tr>
                      <tr>
                        <td>University of Hyderabad (Integrated Masters in Psychology)</td>
                        <td>20</td>
                        <td>Ent. Test</td>
                      </tr>
                      <tr>
                        <td>MIT-World Peace University, Pune</td>
                        <td>60</td>
                        <td>UG-PET+PI+Merit Based</td>
                      </tr>
                      <tr>
                        <td>Mount Carmel College, Bangalore</td>
                        <td>40</td>
                        <td>Ent. Test</td>
                      </tr>
                      <tr>
                        <td>Aligarh Muslim University</td>
                        <td>85</td>
                        <td>CET</td>
                      </tr>
                      <tr>
                        <td>G.D. Goenka University, Gurgaon</td>
                        <td>NA</td>
                        <td>GATA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade show active custom-table-wrapper">
                  <table className="custom-table1">
                    <thead className='component1'>
                      <tr>
                        <th>COURSE:</th>
                        <th>B.A. (Hons.) Psychology</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>NO. OF SEATS</td>
                        <td>42</td>
                      </tr>
                      <tr>
                        <td>ELIGIBILITY</td>
                        <td>Senior Secondary School Certificate or an equivalent examination with not less than 50% marks in aggregate of best 5-papers.</td>
                      </tr>
                      <tr>
                        <td>STAGES - 1</td>
                        <td>Written Exam</td>
                      </tr>
                      <tr>
                        <td>MODE</td>
                        <td>OFFLINE</td>
                      </tr>
                      <tr>
                        <td>PATTERN</td>
                        <td>
                          <div>
                            Number of Questions:
                            <br />
                            1. General Awareness – 40 Qs
                            <br />
                            2. Logical Reasoning – 20 Qs
                            <br />
                            3. Quantitative Aptitude – 20 Qs
                            <br />
                            4. Verbal Ability – 20 Qs
                            <br />
                            Total – 100 Qs (MCQ)
                            <br />
                            Marking Scheme:
                            <br />
                            Right Answer: +1
                            <br />
                            Wrong Answer: -0.25
                            <br />
                            Maximum Marks: 100
                            <br />
                            Total Duration: 105 Minutes
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>CRITERIA FOR SELECTION</td>
                        <td>Final Ranks are compiled from the overall Jamia BBA Score.</td>
                      </tr>
                      <tr>
                        <td>CUT OFFS (CLOSING CUT OFFS)</td>
                        <td>65+ Marks in the written exam is a good benchmark for Final Selection.</td>
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

      <Footer />
    </div>
  );
};

export default MILIA;
