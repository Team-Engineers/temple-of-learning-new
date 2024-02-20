import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import './Rohtak.css';

const Rohtak = () => {
  return (
    <div>
      <Navbar />

      <main id="body-content" className="main-content max-w-[1200px] mx-auto overflow-hidden">
        <div className="bg-[#C4F7D1] absolute inset-0 z-[-1] filter blur-[75px] w-56 h-48 border-black top-32 "></div>
        <section className="about-company-s2 section-padding">
          <div className="container-section">
            <div className="row">
              <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
                <h2 className="heading-main-container">
                  IIM Rohtak, IPM
                </h2>
              </div>
              <div className="col about-company-s2-slider-wrapper">
                <p className="paragraph-justify"><b className='b'>COURSE(S) OFFERED: </b><b className='b1'>Five Year Integrated Programme in Management (IPM)</b></p>
                <p className="paragraph-justify"><b className='b'>NUMBER OF SEATS: </b><b className='b1'>150</b></p>
                <p className="paragraph-justify"><b className='b'>ELIGIBILITY CRITERIA:</b></p>
                <p className="paragraph-justify"><b className='b'>General, NC-OBC and EWS Category:</b><b className='b1'> Minimum 60% in standard X/ SSC and standard XII/ HSC or equivalent examinations, Maximum 20 years of age as on July 31, 2020</b>.</p>
                <p className="paragraph-justify"><b className='b'>SC, ST and PWD (DAP) Category:</b><b className='b1'> Minimum 55% in standard X/ SSC and standard XII/ HSC or equivalent examinations, Maximum 20 years of age as on July 31, 2020.</b></p>
                <p className="paragraph-justify"><b className='b'>SELECTION/ADMISSION PROCESS:</b><b className='b1'>The candidates will be selected on the basis of overall performance in Aptitude Test (AT), Written Ability Test (WAT), Personal Interview (PI) & Past Academics. The final Merit List will be generated based on the composite score as mentioned below:</b></p>
                <div className="tab-pane fade show active" id="pills-home">
                  <table className="custom-table">
                    <thead className='component'>
                      <tr>
                        <th>Component</th>
                        <th>Weightage %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Aptitude Test Score </td>
                        <td>50</td>
                      </tr>
                      <tr>
                        <td>Personal Interview(PI)</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>Written Ability Test(WAT)</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td className='sol'>Past Academics</td>
                        <td className='sol'>10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col">
                <div className="tab-pane fade show active custom-table-wrapper">
                  <p className="paragraph-justify"><b className='b'>ENTRANCE PATTERN</b></p>
                  <table className="custom-table">
                    <thead className='component'>
                      <tr>
                        <th>Section</th>
                        <th>Number of Questions</th>
                        <th>Time Duration for each section</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Quantitative Ability</td>
                        <td>40</td>
                        <td>40 minutes</td>
                      </tr>
                      <tr>
                        <td>Logical Reasoning</td>
                        <td>40</td>
                        <td>40 minutes</td>
                      </tr>
                      <tr>
                        <td className='sol'>Verbal Ability</td>
                        <td className='sol'>40</td>
                        <td className='sol'>40 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="paragraph-justify"><b className='b'>NEGATIVE MARKING:</b><b className='b1'>YES</b></p>
                <p className="paragraph-justify"><b className='b'>MARKING SCHEME:</b><b className='b1'> +4 Correct answer & -1 for incorrect.</b></p>
                <p className="paragraph-justify"><b className='b'>EXPECTED ENTRANCE DATE: </b><b className='b1'>MAY 2<sup>nd</sup> Week</b></p>
              </div>
            </div>
          </div>
        </section>

        <div className='flex justify-center'>
          <Link to="/login" className="register-button">Register</Link>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Rohtak;
