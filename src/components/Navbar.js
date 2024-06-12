import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import	image from '../Assets/Color Mode.png'

const Navbar = ({
  title = "Title Here",
  aboutText = "About",
  togglemode = "",
}) => {
  // default
  return (
    <div>
      <nav
        className={`bg-blue-950 text-white p-2 md:p-4`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex gap-4 md:gap-10 justify-center items-center">
            <li>
              <Link className="text-xl md:text-3xl font-bold cursor-pointer" to="/">
                {title}
              </Link>
            </li>
            <div className="flex justify-center items-center gap-3 md:gap-5 ">
              <li>
                <Link
                  className="hover:underline active:underline visited:underline focus:underline"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline active:underline visited:underline focus:underline"
                  to="/about"
                >
                  {aboutText}
                </Link>
              </li>
            </div>
          </ul>

          <div className="switch flex gap-5  w-full cursor-pointer justify-center items-center absolute right-0 top-14 px-4 py-2 bg-blue-200 md:p-0 md:bg-transparent md:w-fit  md:static md:flex-row ">
            <div className="bg-red-700  w-8 h-8 rounded-full shadow-lg hover:shadow-gray-500" onClick={()=>{togglemode('red')}}></div>
            <div className="bg-green-700  w-8 h-8 rounded-full shadow-lg hover:shadow-gray-500" onClick={()=>{togglemode('green')}}></div>
            <div className="bg-yellow-900 w-8 h-8 rounded-full shadow-lg hover:shadow-gray-500" onClick={()=>{togglemode('#5C4033')}}></div>
            <div className="bg-yellow-500  w-8 h-8 rounded-full shadow-lg hover:shadow-gray-500" onClick={()=>{togglemode('yellow')}}></div>
            <div className="bg-black w-8 h-8 rounded-full shadow-lg hover:shadow-gray-500" onClick={()=>{togglemode('black')}}></div>
            <div className="bg-white w-8 h-8 rounded-full shadow-lg hover:shadow-gray-500" onClick={()=>{togglemode('white')}}></div>
          </div>

          <div className="img visible md:hidden">
            <img src={image} alt="colorMode" className="w-12 h-10 mix-blend-screen" />
          </div>
        </div>
      </nav>
      <hr></hr>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  service: PropTypes.string,
  aboutText: PropTypes.string,
};

export default Navbar;
