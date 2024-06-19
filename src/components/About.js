import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const About = ({ togglemode }) => {
  return (
    <div className={`p-2 my-20 m-auto md:w-8/12 text-${togglemode}`}>
      <section>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            <u>Transforming Text, Transforming Lives</u>
          </h1>
          <p className="mt-4 text-lg">
            At TextUtils, we believe that text has the power to inspire,
            educate, and connect people. Our mission is to provide innovative
            text-based solutions that make a positive impact on individuals and
            communities.
          </p>
        </div>
      </section>

      <section className={` py-20`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            <u>Unlock the Power of Text</u>
          </h2>
          <p className="mt-4 text-lg">
            Join the TextUtils community and discover how our text-based tools
            and services can help you achieve your goals, whether personal or
            professional.
          </p>
        </div>
      </section>

      <div className="flex justify-end items-end p-2">
        <footer className="footer text-sm ">
          <p>&copy; 2024 TextUtils. All rights reserved.</p>
          <p>
            Designed and developed by&nbsp;
            <Link
              to="https://github.com/saga-r-code"
              className="cursor-pointer"
              target="_blank"
            >
              <b>
                <u>Sagar Shah</u>
              </b>
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

About.prototype = {
  mode: PropTypes.string.isRequired,
};

export default About;
