import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [message, setmessage] = useState(null);

  const removeColorMode = () => {
    document.body.classList.remove("green");
    document.body.classList.remove("red");
    document.body.classList.remove("brown");
    document.body.classList.remove("yellow");
    document.body.classList.remove("black");
    document.body.classList.remove("white");
  };

  const togglemode = (cls) => {
    removeColorMode();
    if (cls) {
      document.body.style.backgroundColor = cls;
      // document.body.style.color = "white" 
    } 
    if(cls === "green" || cls === "black" || cls === "#5C4033"){
      document.body.style.color = "white"
    }
    else{
       document.body.style.color = "black"
    }
    
  };

  const showMessage = (msg) => {
    setmessage(msg);
    setTimeout(() => {
      setmessage(null);
    }, 2000);
  };
  return (
    <Router>
      {/* value Passing Throw Props */}
      <Navbar
        title="Logo Here"
        service="Help-Page"
        togglemode={togglemode}
        removeColorMode={removeColorMode}
      />
      <Alert message={message} />
      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              togglemode={togglemode}
              removeColorMode={removeColorMode}
              showMessage={showMessage}
            />
          }
        />
        <Route path="/about"  element={ <About togglemode={togglemode} removeColorMode={removeColorMode} /> } />
      </Routes>
    </Router>
  );
}

export default App;
