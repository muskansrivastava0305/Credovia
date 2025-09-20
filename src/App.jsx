import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CoreOffering from "./Pages/CoreOffering";
import Howit from "./Pages/Howit";
import Why from "./Pages/Why";
import CTA from "./Pages/CTA";
import Navbar from "./Pages/Navbar";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route
          path="/ "
          element={
            <>
              <Home />
              <About />
              <CoreOffering />
              <Howit />
              <Why />
              <CTA />
            </>
          }
        />
      </Routes>
    </div>
  );
}
