import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import BurgerAndMenu from "../burgerAndMenu/BurgerAndMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [query, setQuery] = useState('');

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
          <Link
            to="/courses"
            className={` font-bold whitespace-nowrap hover:underline ${location.pathname === "/" && !isScrolled ? "text-black" : ""
              }`}
          >
            Courses
          </Link>
          <Link
            to="/contact"
            className={` font-bold whitespace-nowrap hover:underline ${location.pathname === "/" && !isScrolled ? "text-black" : ""
              }`}
          >
            Contact
          </Link>
          <Link
            to="/signin"
            className={` font-bold rounded-3xl px-5 py-2 shadow-2xl flex justify-center items-center bg-[#C8F031] whitespace-nowrap hover:underline ${location.pathname === "/" && !isScrolled ? "text-black" : ""
              }`}
          >
            Login/Signup
          </Link>
        </nav>
      </div>
      <div className="md:hidden flex ">
        <BurgerAndMenu />
      </div>
    </header>
  );
};

export default Navbar;
