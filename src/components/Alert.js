import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message = null }) => {
  //show the alert message when click the any button
  if (!message) {
    return null;
  }
   else {
    return (
      <div>
      <p className="w-1/4 h-[10%] z-10 flex justify-center items-center bg-slate-500 text-white absolute top-1 left-[38%] rounded-xl shadow-lg transform translate-y-1 translate-x-1">
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
