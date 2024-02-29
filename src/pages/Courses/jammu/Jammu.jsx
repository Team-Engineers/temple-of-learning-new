import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';
// import './jammu.css';


const IIMJAMMU = () => {
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
                  IIM Jammu
                </h2>
              </div>
              <div className="col about-company-s2-slider-wrapper">
                <p className="ph-justify"><b className='b-container'>Eligibility:</b></p>
                <p className="ph-justify">Candidate should have passed Standard XII/HSC or equivalent examination in 2019, 2020 or appearing in 2022. Candidate should have a Minimum 60% in standard X/ SSC and standard XII/ HSC or equivalent examinations (55 % for the candidates from SC/ST/ PwD category).
                The percentage of marks obtained by the candidate in X and XII Standard would be calculated based on the aggregate marks of all subjects that appear in the mark sheet/grade sheet, irrespective of the Board’s regulation.</p>
                <p className="ph-justify"><b className='b-container'>Selection Process:</b></p>
                <p className="ph-justify">Composite merit list will be prepared based on Academic Background (percentage of marks in Xth and XIIth) and Admission Test as per the IPM Admission Policy.
                </p>

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
                        <td>Admission Test Score </td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>Xth</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>XIIth</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>Gender Diversity</td>
                        <td>10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col">
                <div className="tab-pane fade show active custom-table-wrapper">
                  <p className="ph-justify"><b className='b-container'>Entrance Test Pattern:</b></p>

                  <table className="custom-table1">
                    <thead className='component1'>
                      <tr>
                        <th>Section</th>
                        <th>Number of Questions</th>
                        <th>Time Duration </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Quantitative Ability(QA)</td>
                        <td>35</td>
                        <td>35 minutes</td>
                      </tr>
                      <tr>
                        <td>Verbal Ability(VA)</td>
                        <td>35</td>
                        <td>35 minutes</td>
                      </tr>
                      <tr>
                        <td className='sol'>Logical Reasoning (LR)</td>
                        <td className='sol'>30</td>
                        <td className='sol'>30 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
               <p className="ph-justify">Each question will carry 2 marks and 0.5 negative marks for each wrong answer.</p>
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

export default IIMJAMMU;
