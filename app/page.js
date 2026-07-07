import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Project from "./components/project";
export default function Home() {
  return (
   <>
     <Navbar/>
     <Hero/>
     <div className="bg-white h-px  opacity-22"> </div>
     <Skill/>
     <div className="bg-white h-px opacity-22"> </div>
     <Project/>
    
     <Footer/>
   </>
  );
}
