import React from "react";
import { motion } from "framer-motion";
import BgImage from "../assets/img.jpg";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen md:h-[700px] bg-black flex flex-col md:flex-row items-center justify-between px-6 md:pl-16 overflow-hidden">

      {/* Left Content */}
      <div className="relative z-20 text-center md:text-left text-white max-w-xl space-y-6 md:-mr-32">
        {/* Headings */}
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-yellow-400">
            Turning Crypto Into Confidence
          </span>
        </h1>
        <h2 className="text-2xl md:text-xl font-bold">
          Credovia is your trusted crypto consultation partner, helping
          investors in the UK, US, Germany, Netherlands, Greece, and India make
          smarter and safer investment decisions. With AI-powered insights and
          global expertise, we guide you through the volatility of crypto
          markets and build a reliable pathway to long-term wealth.
        </h2>

        {/* Decorative xxxxxxx */}
        <div className="flex gap-2 justify-center md:justify-start text-yellow-500 text-lg">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i}>×</span>
          ))}
        </div>

        <button className=" bg-yellow-500 px-3 py-3 font-bold text-black rounded-xl">Book Your Consultation</button>

        {/* Footer Text */}
      </div>

      {/* Right Rotating Bitcoin */}
      <div className="relative flex justify-center items-center w-full md:w-auto mt-10 md:mt-0">
        <motion.div
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full relative"
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {/* Light black overlay */}
          {/* <div className="absolute inset-0 bg-black/100 bg-opacity-20 rounded-full"></div> */}
        </motion.div>
      </div>

    </div>
  );
}
