import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message = null }) => {
  //show the alert message when click the any button
  if (!message) {
    return null;
  }
   else {
    return (
      <div className="flex justify-center items-center">
      <p className=" p-4 z-10 md:top-4 md:p-5 lg:p-6 xl:px-7 xl:py-6  bg-slate-300 text-gray-800 font-semibold absolute top-1  rounded-xl shadow-lg ">
        {message}
      </p>
    </div>
    
    );
  }
};

Alert.propTypes = {
  message: PropTypes.string,
};

export default Alert;
