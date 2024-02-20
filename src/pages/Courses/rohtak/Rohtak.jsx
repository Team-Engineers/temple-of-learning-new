import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import './Rohtak.css'; 

const Rohtak = () => {
  return (
    <div>
        <Navbar />
      
    <main id="body-content" className="main-content">
      
      <section className="about-company-s2 section-padding">
        <div className="container-section">
          <div className="row">
            <div className="col-sm-12 wow fadeInDown" data-wow-duration="0" data-wow-delay="0s">
              <h2 className="heading-main-container">
                IIM Rohtak, IPM
              </h2>
            </div>
            <div className="col about-company-s2-slider-wrapper">
              <p className="paragraph-justify"><b className='b'>COURSE(S) OFFERED: </b><b>Five Year Integrated Programme in Management (IPM)</b></p>
              <p className="paragraph-justify"><b className='b'>NUMBER OF SEATS: </b><b>150</b></p>
              <p className="paragraph-justify"><b className='b'>ELIGIBILITY CRITERIA:</b></p>
              <p className="paragraph-justify"><b className='b'>General, NC-OBC and EWS Category:</b><b> Minimum 60% in standard X/ SSC and standard XII/ HSC or equivalent examinations, Maximum 20 years of age as on July 31, 2020</b>.</p>
              <p className="paragraph-justify"><b className='b'>SC, ST and PWD (DAP) Category:</b><b> Minimum 55% in standard X/ SSC and standard XII/ HSC or equivalent examinations, Maximum 20 years of age as on July 31, 2020.</b></p>
              <p className="paragraph-justify"><b className='b'>SELECTION/ADMISSION PROCESS:</b><b>The candidates will be selected on the basis of overall performance in Aptitude Test (AT), Written Ability Test (WAT), Personal Interview (PI) & Past Academics. The final Merit List will be generated based on the composite score as mentioned below:</b></p>
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
                      <th>Aptitude Test Score </th>
                      <th>50</th>
                    </tr>
                    <tr>
                      <th>Personal Interview(PI)</th>
                      <th>30</th>
                    </tr>
                    <tr>
                      <th>Written Ability Test(WAT)</th>
                      <th>10</th>
                    </tr>
                    <tr>
                      <th className='sol'>Past Academics</th>
                      <th className='sol'>10</th>
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
                      <th>Quantitative Ability</th>
                      <th>40</th>
                      <th>40 minutes</th>
                    </tr>
                    <tr>
                      <th>Logical Reasoning</th>
                      <th>40</th>
                      <th>40 minutes</th>
                    </tr>
                    <tr>
                      <th className='sol'>Verbal Ability</th>
                      <th className='sol'>40</th>
                      <th className='sol'>40 minutes</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="paragraph-justify"><b className='b'>NEGATIVE MARKING:</b> <b>YES</b></p>
              <p className="paragraph-justify"><b className='b'>MARKING SCHEME:</b><b>+4 Correct answer & -1 for incorrect.</b></p>
              <p className="paragraph-justify"><b className='b'>EXPECTED ENTRANCE DATE:</b><b>MAY 2<sup>nd</sup> Week</b></p>
            </div>
          </div>
        </div> 
      </section>
      <div className='flex justify-center'>
        <Link to="/login" className="relative bg-[#0D88CB] px-[80px] rounded-3xl p-2 flex text-center justify-center text-white text-[30px] items-center my-6 ">Register</Link>

      </div>
     </main>
     <div>
        <Footer/>
      </div>
      </div>
  );
};

export default Rohtak;
