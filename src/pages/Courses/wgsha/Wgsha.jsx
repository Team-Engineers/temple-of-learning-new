import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';
// import './Delhi.css';


const WGSHA = () => {
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
                Welcomgroup Graduate School of Hotel Administration (WGSHA), Manipal
                </h2>
              </div>
              <div className="col about-company-s2-slider-wrapper">
              <p className="ph-justify"><b className='b-container'>Eligibility :</b></p>

                <p className="ph-justify">The candidates must have passed 10+2 or equivalent from any Board.</p>
                <p className="ph-justify"><b className='b-container'>No. of Seats:</b> 180</p>
                <p className="ph-justify"><b className='b-container'>Selection Procedure:</b> Admissions are done on the basis of marks obtained in the qualifying examination and there is no entrance test.</p>

               
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

export default WGSHA;
