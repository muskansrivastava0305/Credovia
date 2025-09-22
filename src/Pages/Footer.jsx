import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left - Logo / Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Credovia</h2>
          <p className="text-sm mt-2">
            Turning Crypto Into Confidence
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#services" className="hover:text-yellow-400 transition">Services</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        {/* Right - Social Media */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-400 transition">🌐</a>
          <a href="#" className="hover:text-yellow-400 transition">🐦</a>
          <a href="#" className="hover:text-yellow-400 transition">📘</a>
          <a href="#" className="hover:text-yellow-400 transition">📸</a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Credovia. All rights reserved.
      </div>
    </footer>
  );
}
