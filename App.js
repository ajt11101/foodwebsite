import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar.js";
// import Textform from "./components/Textform";

function App() {
  const [mode, setMode] = useState("light");

  const pageMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="Textutils" mode={mode} changeMode={pageMode} />
      <div className="container">
        {/* <Textform heading="Enter your text" mode={mode}/> */}
        <About />
      </div>
    </>
  );
}

export default App;
