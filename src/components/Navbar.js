import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({
  title = "Title Here",
  aboutText = "About",
  togglemode = "",
}) => {
  // default
  return (
    <div>
      <nav
        className={`bg-blue-950 text-white p-4`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex gap-10 justify-center items-center">
            <li>
              <Link className=" text-3xl font-bold cursor-pointer" to="/">
                {title}
              </Link>
            </li>
            <div className="flex gap-5 ">
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

          <div className="switch hidden md:flex gap-5 cursor-pointer">
            <div className="bg-red-700  w-8 h-8 rounded-full shadow-lg hover:shadow-gray-500" onClick={()=>{togglemode('red')}}></div>
            <div className="bg-green-700  w-8 h-8 rounded-full shadow-lg hover:shadow-gray-500" onClick={()=>{togglemode('green')}}></div>
            <div className="bg-yellow-900 w-8 h-8 rounded-full shadow-lg hover:shadow-gray-500" onClick={()=>{togglemode('#5C4033')}}></div>
            <div className="bg-yellow-500  w-8 h-8 rounded-full shadow-lg hover:shadow-gray-500" onClick={()=>{togglemode('yellow')}}></div>
            <div className="bg-black w-8 h-8 rounded-full shadow-lg hover:shadow-gray-500" onClick={()=>{togglemode('black')}}></div>
            <div className="bg-white w-8 h-8 rounded-full shadow-lg hover:shadow-gray-500" onClick={()=>{togglemode('white')}}></div>
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
