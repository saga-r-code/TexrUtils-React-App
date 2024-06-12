import React, { useState } from "react";
import PropTypes from "prop-types";

const TextForm = ({
  heading = "Try TextUtils - WordCount, CharcterCount, UpperCase and Lowercase Text Utility ",
  showMessage,
  togglemode,
}) => {
  //UpperCase text
  const handleclickupper = (e) => {
    e.preventDefault();
    let newtext = text.toUpperCase(); // change to uppercase
    settext(newtext);
    showMessage("Converted into uppercase");
  };

  //Lowercase text
  const handleclicklower = (e) => {
    e.preventDefault(); //for the reload stop
    let newtext = text.toLowerCase(); // change to uppercase
    settext(newtext);
    showMessage("Converted into lowercase");
  };

  //this is for the write value in box using e.target.value
  const handlechange = (e) => {
    settext(e.target.value);
  };

  //clear text
  const handleclear = (e) => {
    e.preventDefault();
    let newtext = ""; //clear the text
    settext(newtext); //this is for the write value in box
    showMessage("Successfully text cleared");
  };

  //Word count
  const wordcount = (count) => {
    return count.trim().split(/\s+/).filter(Boolean).length; //split(" ") also u can use

    //filter method use for the if user continues span the spacebar or tab then not count means false otherwise true
    //split(/\s+/) it include the (sapce tab or newline) and split method split the this things
    //trim is use for the whitepsace remove
  };

  //copy text
  const handlecopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    // showMessage(`Successfully text copy : ${text}`) //u can use for the if you want to show text also
    showMessage("Successfully text copy");
  };

  //romove extraspace
  const removeExtraSpaces = (e) => {
    e.preventDefault();
    let newtext = text.replace(/\s{2,}/g, " ").trim(); // remove extra spaces
    settext(newtext);
    showMessage("Extra spaces removed");

    // replace(/\s+/g, " ")  \s it include (sapce tab or newline)
    // + for the one more add and /g means its applied to find all matches in the string
    //.replace(" ") method is replace into the new string means substring
  };

  const [text, settext] = useState("");

  // text = "Text is: " wrong way to change state
  // useState("Text is") write way to change state
  return (
    <>
      <div className={`conatiner text-${togglemode}`}>
        <form className="w-10/12 md:w-1/2 m-auto mt-5">
         
          <h1 className="w-full text-lg md:text-xl md:font-bold pt-10 pb-5 underline underline-offset-5 decoration-double">{heading}</h1>
          <textarea
            id="message"
            value={text}
            onChange={handlechange}
            rows="8"
            placeholder="Enable the button, than enter text here...."
            className={`w-full px-3 py-2 bg-gray-400 border  rounded-lg focus:outline-blue-950 focus:shadow-outline placeholder:text-slate-900 placeholder:font-semibold`}
          ></textarea>

          <div className="btn text-white grid-cols-1 gap-3 my-3 grid md:grid-cols-2 lg:grid-cols-3   ">
            <button
             disabled ={text.length === 0}
              className="py-2 px-4 bg-blue-700  font-semibold md:font-bold rounded-lg shadow-md hover:bg-blue-600   active:bg-blue-900 transition duration-150 ease-in-out"
              onClick={handleclickupper}
            >
              Convert to Uppercase
            </button>

            <button
            disabled ={text.length === 0}
              className="py-2 px-5 bg-blue-700  font-semibold md:font-bold rounded-lg shadow-md hover:bg-blue-600   active:bg-blue-900 transition duration-150 ease-in-out"
              onClick={handleclicklower}
            >
              Convert to LowerCase
            </button>

            <button
             disabled ={text.length === 0}
              className="py-2 px-5 bg-blue-700  font-semibold md:font-bold rounded-lg shadow-md hover:bg-blue-600   active:bg-blue-900 transition duration-150 ease-in-out"
              onClick={handleclear}
            >
              Clear Text
            </button>

            <button
             disabled ={text.length === 0}
              className="py-2 px-5 bg-blue-700  font-semibold md:font-bold rounded-lg shadow-md hover:bg-blue-600   active:bg-blue-900 transition duration-150 ease-in-out"
              onClick={handlecopy}> Copy Text</button>

            <button
             disabled ={text.length === 0}
              className="py-2 px-5 bg-blue-700  font-semibold md:font-bold rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-900 transition duration-150 ease-in-out"
              onClick={removeExtraSpaces}
            >
              Remove Extra Spaces
            </button>

            {/* <button
              className="py-2 px-5 bg-blue-700 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-900 transition duration-150 ease-in-out"
              onClick={handleReplace}
            >
              Find And replace
            </button> */}
          </div>
        </form>
      </div>

      <div
        className={`conatiner w-10/12 md:w-1/2 m-auto my-10 `}
      >
        <h1 className="  text-xl font-semibold md:font-bold mb-1">Text Summary</h1>
        <p>Words is : {wordcount(text)} and Character is : {text.length}</p>
        {/* <p>Words is : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and Character is : {text.length}</p> e */}
        {/* //you can also us if element == 0 than not exist in array otherwise exist */}
        <p>Minutes to read : {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</p>

        <div className={`bg-${togglemode}  border-cyan-950 border-2 mt-5 py-4 px-3`}>
        <h2 className="text-lg font-semibold md:font-bold ">Preview</h2>
        <p className=" overflow-x-scroll "> 
        {text.length > 0 ? text : "Nothing to preview..."}
        </p>
        </div>

      </div>
    </>
  );
};

TextForm.propTypes = {
  heading: PropTypes.string,
  showMessage: PropTypes.func.isRequired,
};

export default TextForm;
