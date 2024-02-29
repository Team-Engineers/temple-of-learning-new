import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/footer/Footer';
// import './Jamaia.css';


const JAMIA = () => {
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
                    jamia-millia-university
                </h2>
              </div>
              <div className="col about-company-s2-slider-wrapper">
                <p className="ph-justify"><b className='b-container'>Course Offered: Bachelor of Business Administration</b></p>
                <p className="ph-justify"><b className='b-container'>Eligibility:</b> Senior Secondary School Certificate or an equivalent examination with not less than 50% marks in aggregate of best 5-papers</p>
                <p className="ph-justify"><b className='b-container'>Total Seats :</b> 44</p>

                <p className="ph-justify"><b className='b-container'>Programme/Course Fee:</b> Rs. 13,000 per annum</p>
                <p className="ph-justify"><b className='b-container'>Selection Process:</b> 19th May 2017</p>
                <p className="ph-justify"><b className='b-container'>Duration :</b> 105 minutes, 100 Questions</p>
                <p className="ph-justify"><b className='b-container'>Objective Questions on:</b></p>
                <p className="ph-justify">Language Skills, General Awareness, Reasoning and Numerical AbilityMax. Marks – 100 ; 0.25 mark for each wrong answer</p>
               <p className="ph-justify"><b className='b-container'>Entrance Syllabus:</b></p>
               <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
                     <li><p className="ph-justify">Language Skills: 20</p></li>
                    <li><p className="ph-justify">General Awareness: 40</p></li>
                    <li><p className="ph-justify">Reasoning: 20</p></li>
                    <li><p className="ph-justify">Numerical Ability: 20</p></li>
                </ul>
            
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

export default JAMIA;
