import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";
import Description from "./components/Home/Description";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";
import Login from './components/auth/Login';
import SignUp from './components/auth/Signup';
import Events from "./components/Home/Events";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar always visible */}
        <Navbar />
        
        {/* Define routes for different sections */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the signup page */}
          <Route path="/signup" element={<SignUp />} />
          {/* Route for the signin page */}
          <Route path="/signin" element={<Login />} />
        </Routes>
        
        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

// Home component containing Hero, Description, Contact, and Events
function Home() {
  return (
    <div>
      <Hero />
      <Description />
      <Contact />
      
    </div>
  );
}

export default App;
