import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import MyInfo from "../components/MyInfo";

const AboutMe = () => {
  return (
    <div className="about-me">
      <Navbar />
      <MyInfo />
      <Footer />      
    </div>
  )
}

export default AboutMe