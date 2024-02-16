import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import BurgerAndMenu from "../burgerAndMenu/BurgerAndMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [isCoursesPopupOpen, setIsCoursesPopupOpen] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', query);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleCoursesButtonClick = () => {
    setIsCoursesPopupOpen(true);
  };

  const closeCoursesPopup = () => {
    setIsCoursesPopupOpen(false);
  };

  return (
    <header
      className={`relative top-0 left-0 w-full z-50 flex lg:h-[5vw] h-[70px] items-center justify-between px-4 py-2 logo-header ${location.pathname === "/" && !isScrolled ? "bg-transparent" : ""
        } transition-all duration-300 ease-in-out`}
    >
      <div className="flex gap-[8vw]  items-center">
        <Link to="/">
          <div className="mr-4">
            <img
              src={Logo}
              alt="Logo"
              className="px-4"
            />
          </div>
        </Link>
        <div>
          <form onSubmit={handleSubmit} className="relative">
            <div>
              <input
                type="text"
                placeholder="Search for anything.."
                value={query}
                className="p-2 px-3 text-black font-bold rounded-3xl w-[25vw] border-[3px] border-black pl-10"
                onChange={handleInputChange}
              />
              <i className="fas text-black fa-search absolute right-0 p-3 border-[2px] border-black rounded-full bg-[#C8F031] "></i>
              <button className="absolute" type="submit"></button>
            </div>
          </form>
        </div>
      </div>
      <div className="md:flex hidden">
        <nav className="flex justify-center items-center text-[1.3vw] space-x-10 px-10">
          <Link
            to="/"
            className={` font-bold whitespace-nowrap hover:underline ${location.pathname === "/" && !isScrolled ? "text-black" : ""
              }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={` font-bold whitespace-nowrap hover:underline ${location.pathname === "/" && !isScrolled ? "text-black" : ""
              }`}
          >
            About
          </Link>
          <button
            className={` font-bold whitespace-nowrap hover:underline ${location.pathname === "/" && !isScrolled ? "text-black" : ""
              }`} 
            onClick={handleCoursesButtonClick}
          >
            Courses
          </button>
          <Link
            to="/contact"
            className={` font-bold whitespace-nowrap hover:underline ${location.pathname === "/" && !isScrolled ? "text-black" : ""
              }`}
          >
            Contact
          </Link>
          <Link
            to="/signin"
            className={` font-bold rounded-3xl px-5 py-2  flex justify-center items-center bg-[#C8F031] whitespace-nowrap hover:underline ${location.pathname === "/" && !isScrolled ? "text-black" : ""
              }`}
          >
            Login/Signup
          </Link>
        </nav>
      </div>
      <div className="md:hidden flex ">
        <BurgerAndMenu />
      </div>

      {/* Full-screen popup */}
      {isCoursesPopupOpen && (
        <div onClick={closeCoursesPopup} className="fixed  top-0 left-0 overflow-hidden w-screen h-screen  bg-opacity-75 flex justify-center items-center">
          <div className="bg-[#0000003e] z-10 backdrop-blur-[30px] w-[90vw] overflow-hidden mx-auto h-[88vh] top-[3vh] relative	 p-[1vw] rounded-lg">
            <h2 className="text-[2vw] font-bold -[3vw]">Cuet</h2>
            <div className="flex justify-between mx-[5vw]">
            <div>
        <h1 className="leading-[3.2vh]">
          <p className="text-[2vw] ml-[10px] mb-[2vh]  font-medium text-[#0D88CB]">
            Management
          </p>
          <Link to="/dujat">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              DU JAT
            </p>
          </Link>
          <Link to="/cucet">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              CUCET
            </p>
          </Link>
          <Link to="/iim-indore-ipm">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              IIM Indore, IPM
            </p>
          </Link>
          <Link to="/iim-rohtak-ipm">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              IIM Rohtak, IPM
            </p>
          </Link>
          <Link to="/iim-bodhgaya-ipm">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              IIM Bodhgaya, IPM
            </p>
          </Link>
          <Link to="/iim-ranchi-ipm">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              IIM Ranchi, IPM
            </p>
          </Link>
          <Link to="/iim-jammu">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              IIM Jammu
            </p>
          </Link>
          <Link to="/nmims-npat">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              NMIMS (NPAT)
            </p>
          </Link>
          <Link to="/symbiosis-management">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Symbiosis Center for Management
            </p>
          </Link>
          <Link to="/indraprastha-university">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Indraprastha University
            </p>
          </Link>
          <Link to="/christ-university">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Christ University
            </p>
          </Link>
          <Link to="/jamia-millia-university">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Jamia Millia University
            </p>
          </Link>
          <Link to="/st-xaviers-mumbai">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              St Xavier's College, Mumbai
            </p>
          </Link>
          <Link to="/management-others">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Others
            </p>
          </Link>
        </h1>
     
        <h1>
          <p className="text-[2vw] ml-[10px]  font-medium text-[#0D88CB]">
            Mass Communication
          </p>
          <Link to="/ipcw">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              IPCW University
            </p>
          </Link>
          <Link to="/du-ba-hons">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Delhi University BA (Hons)
            </p>
          </Link>
          <Link to="/ip-university-bjmc">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              IP University (BJMC)
            </p>
          </Link>
          <Link to="/symbiosis-masscomm">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Symbiosis Institute
            </p>
          </Link>
          <Link to="/st-xaviers-mumbai-masscomm">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              St Xavier's College, Mumbai
            </p>
          </Link>
          <Link to="/masscomm-others">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Others
            </p>
          </Link>
        </h1>
      </div>
      <div>
        <h1>
          <Link to="/law">
            <p className="text-[2vw] ml-[10px]  font-medium text-[#0D88CB]">
              Law
            </p>
          </Link>
          <Link to="/clat">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              CLAT
            </p>
          </Link>
          <Link to="/national-law-university-delhi">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              National Law University, Delhi
            </p>
          </Link>
          <Link to="/ip-university-law">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              IP University Law
            </p>
          </Link>
          <Link to="/christ-university-law">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Christ University
            </p>
          </Link>
          <Link to="/jamia-millia-islamia-law">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Jamia Millia Islamia
            </p>
          </Link>
          <Link to="/nmims-school-of-law">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              NMIMS - School of Law
            </p>
          </Link>
          <Link to="/symbiosis-law-college">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Symbiosis Law College
            </p>
          </Link>
          <Link to="/law-others">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Others
            </p>
          </Link>
        </h1>
        <h1>
          <Link to="/hotel-management">
            <p className="text-[2vw] ml-[10px]  font-medium text-[#0D88CB]">
              Hotel Management
            </p>
          </Link>
          <Link to="/nchmct">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              NCHMCT
            </p>
          </Link>
          <Link to="/wgsha-manipal">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              WGSHA, Manipal
            </p>
          </Link>
          <Link to="/christ-university-hotel-management">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Christ University
            </p>
          </Link>
          <Link to="/ip-university-hotel-management">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              COBIND Singh IP University
            </p>
          </Link>
          <Link to="/ihm-aurangabad">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              IHM, Aurangabad
            </p>
          </Link>
          <Link to="/hotel-management-others">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Others
            </p>
          </Link>
        </h1>
      </div>

      <div>
        <h1>
          <Link to="/bcom">
            <p className="text-[2vw] ml-[10px]  font-medium text-[#0D88CB]">
              B.COM
            </p>
          </Link>
          <Link to="/ip-university">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              IP University
            </p>
          </Link>
          <Link to="/nmims-asmc">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              NMIMS (ASMSC)
            </p>
          </Link>
          <Link to="/christ-university-bcom">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Christ University B.COM
            </p>
          </Link>
          <Link to="/symbiosis-college-pune">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Symbiosis College AC, Pune
            </p>
          </Link>
          <Link to="/bcom-others">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Others
            </p>
          </Link>
        </h1>
        <h1>
          <Link to="/psychology">
            <p className="text-[2vw] ml-[10px]  font-medium text-[#0D88CB]">
              Psychology
            </p>
          </Link>
          <Link to="/dij-psychology">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              DIJ (Psychology)
            </p>
          </Link>
          <Link to="/christ-university-psychology">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Christ University (Psychology)
            </p>
          </Link>
          <Link to="/jamia-millia-psychology">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Jamia Millia Islamia University (Psychology)
            </p>
          </Link>
          <Link to="/bhu-uet-psychology">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Banaras Hindu University (BHU-UET)
            </p>
          </Link>
          <Link to="/mount-carmel-psychology">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Mount Carmel College (Psychology)
            </p>
          </Link>
          <Link to="/amu-psychology">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Aligarh Muslim University (Psychology)
            </p>
          </Link>
          <Link to="/psychology-others">
            <p className="hover:bg-blue-400 text-[1.3vw] hover:text-white hover:shadow-black  rounded-xl px-2">
              Others
            </p>
          </Link>
        </h1>
      </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
