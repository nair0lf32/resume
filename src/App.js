import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './content/Home';
import About from './content/About';
import Education from './content/Education';
import Skills from './content/Skills';
import Contact from './content/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;