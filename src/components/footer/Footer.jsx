import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/images/logo.png";

const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className="bg-[#34529e] overflow-hidden w-full ">
      <div className="mx-auto max-w-screen-2xl px-4 pb-6  sm:px-6 lg:px-8 lg:pt-10">
        <div className="flex lg:flex-row flex-col justify-center lg:justify-between">
          <div className="flex flex-col justify-center ">
            <div className=" flex justify-center gap-6 lg:justify-start  ">
              <NavLink to="/">
                <div className="flex items-center">
                  <div className="mr-4  mb-[-12px] ">
                    <img
                      src={Logo}
                      alt="Logo"
                      className=" w-[200px] ml-[10px] px-4 pb-2"
                    />
                  </div>
                </div>
              </NavLink>
            </div>
            <p className="mt-6 font-bold lg:text-justify md:text-[100%] text-[80%]  text-center leading-relaxed text-white lg:max-w-xs ml-[20px] mr-[20px] ">
              Temple of learning is an 24+ year old brand who guided and successfully help many aspirants reached their dream careers.
            </p>
          </div>
          <div className="lg:text-start max-md:mt-4 text-center ">
              <p className="font-bold text-[25px] uppercase text-white  ">
                POPULAR COURSES
              </p>
              <div className='md:my-5 mb-2 flex justify-center h-[4px] max-md:mx-auto w-[60%] bg-white' />
              <ul className="md:mt-8 space-y-2 text-[80%] md:text-[100%]">
                <li>
                  <p
                    className="text-white transition "
        
                  >
                    CUET
                  </p>
                </li>

                <li>
                  <p
                    className="text-white transition "
                    
                  >
                    MANAGEMENT
                  </p>
                </li>

                <li>
                  <p
                    className="text-white transition "
                    
                  >
                    MASS COMMUNICATION
                  </p>
                </li>

                <li>
                  <p
                    className="text-white transition "
                 
                  >
                    LAW
                  </p>
                </li>
                <li>
                  <p
                    className="text-white transition "
                 
                  >
                    HOTEL MANAGEMENT
                  </p>
                </li>
                <li>
                  <p
                    className="text-white transition "
                 
                  >BCOM
                  </p>
                </li>
                <li>
                  <p
                    className="text-white transition "
               
                  >PSYCHOLOGY
                  </p>
                </li>
              </ul>
            </div>
            <div className="lg:text-start max-md:mt-4 text-center">
              <p className="font-bold text-[25px] uppercase text-white  ">
                OUR PROGRAMS
              </p>
              <div className='md:my-5 mb-2 flex justify-center h-[4px] max-md:mx-auto w-[60%] bg-white' />
              <ul className="md:mt-8 space-y-2 text-[80%] md:text-[100%]">
                <li>
                  <p className="text-white transition  whitespace-nowrap">
                    2 Year Program
                  </p>
                </li>

                <li>
                  <p className="text-white transition  whitespace-nowrap">
                    2 Year Program
                  </p>
                </li>

                <li>
                  <p className="text-white  transition  whitespace-nowrap">
                    Crash Course
                  </p>
                </li>

                <li>
                  <p className="text-white transition   whitespace-nowrap">
                    9th Class
                  </p>
                </li>
                <li>
                  <p className="text-white transition   whitespace-nowrap">
                    10th Class
                  </p>
                </li>
              </ul>
            </div>
            <div className="lg:text-start mr-7 max-md:mt-4 text-center ">
              <p className="font-bold m text-[25px] uppercase text-white  ">
                Social Media
              </p>
              <div className='md:my-5 mb-2 flex justify-center h-[4px] max-md:mx-auto w-[60%] bg-white' />
              <ul className=" flex gap-4  justify-center text-[30px] md:justify-start items-center">
                <NavLink href="https://www.facebook.com/tol.leadtheway/">
                  <i className="fa-brands text-white fa-facebook-f"></i>
                </NavLink>
                <NavLink href="https://twitter.com/tolEdu">
                  <i className="fa-brands text-white fa-twitter"></i>
                </NavLink>
                <NavLink href="https://www.linkedin.com/in/tol-education-403299131/">
                  <i className="fa-brands text-white fa-linkedin-in"></i>
                </NavLink>
                <NavLink href="#">
                  <i className="fa-brands text-white fa-google-plus-g"></i>
                </NavLink>
              </ul>
            </div>
        </div>
        <div className="md:mt-12 mt-2 border-t border-gray-100 pt-6 ml-[20px] mr-[20px]">
          <div className="text-center flex-col flex  md:flex-row md:justify-between sm:text-left">
            <div className="flex max-md:flex-col md:gap-5 font-bold">
              <p className="mt-4 md:text-[100%] text-[90%] text-white sm:order-first sm:mt-0">
                &copy; {updatedDate} TestKnock
              </p>
              <p className="block text-white sm:inline">
                All rights reserved.
              </p>
            </div>

            <p className="flex sm:flex-row flex-col font-bold  gap-[10px] max-md:justify-center  md:text-[100%] text-[90%] ">
              <NavLink
                className=" whitespace-nowrap  text-white   underline transition hover:text-green-200"
                to="/"
              >
                Terms & Conditions
              </NavLink>
              <NavLink
                className="whitespace-nowrap text-white  underline transition hover:text-green-200"
                to="/"
              >
                Privacy Policy
              </NavLink>
            </p>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
