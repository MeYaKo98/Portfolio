import React from "react";

import "./App.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
