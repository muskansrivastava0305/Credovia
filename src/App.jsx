import React from "react";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CoreOffering from "./Pages/CoreOffering";
import Howit from "./Pages/Howit";
import Why from "./Pages/Why";
import CTA from "./Pages/CTA";
import Footer from "./Pages/Footer";
import Connect from "./Pages/Connect";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

    
      <Home />
      <About />
      <CoreOffering />
      <Howit />
      <Why />
      <Connect />
      <CTA />
      <Footer />
    </div>
  );
}
