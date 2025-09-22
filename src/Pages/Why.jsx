import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const uspData = [
  {
    id: 1,
    icon: "/icon-brain.svg",
    title: "AI-Driven Analysis",
    description: "Our proprietary AI analyzes millions of data points for real-time, predictive insights, giving you a significant market edge.",
    position: { top: '0%', left: '15%' }
  },
  {
    id: 2,
    icon: "/icon-shield.svg",
    title: "Risk-First Approach",
    description: "We prioritize capital preservation. Our dynamic models are designed to protect your investments from market volatility.",
    position: { top: '50%', left: '0%' }
  },
  {
    id: 3,
    icon: "/icon-globe.svg",
    title: "Global Consultation",
    description: "Access our expert advisory from anywhere. We serve clients in the UK, US, Germany, Netherlands, Greece, and India.",
    position: { top: '25%', left: '85%' }
  },
  {
    id: 4,
    icon: "/icon-users.svg",
    title: "Trusted By All",
    description: "From individual retail traders to large-scale institutional investors, our strategies are trusted to deliver results.",
    position: { top: '75%', left: '70%' }
  }
];
// Reusable component for the DESKTOP interactive nodes
const UspNode = ({ usp, onHover, isActive }) => {
  return (
    <motion.div
      className="absolute"
      style={{ top: usp.position.top, left: usp.position.left, transform: 'translate(-50%, -50%)' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 + usp.id * 0.2 }}
      onHoverStart={() => onHover(usp.id)}
      onHoverEnd={() => onHover(null)}
    >
      <motion.div
        className="w-24 h-24 rounded-full flex items-center justify-center cursor-pointer relative"
        style={{ backgroundColor: '#6E4816', border: `2px solid #D4AF37` }}
        animate={{ scale: isActive ? 1.2 : 1 }}
      >
        <img src={usp.icon} alt="" className="w-12 h-12" />
      </motion.div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute p-4 rounded-lg shadow-lg w-64"
            style={{
              backgroundColor: 'rgba(255, 245, 204, 0.95)',
              color: '#6E4816',
              top: '50%',
              left: usp.id === 3 || usp.id === 4 ? '-17rem' : '7rem',
              transform: 'translateY(-50%)',
              zIndex: 100
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-1">{usp.title}</h3>
            <p className="text-sm">{usp.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
const Why = () => {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <div 
    id="why"
    className="relative py-24 px-8 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <img
        src="/why-background.jpg"
        alt="Abstract crypto background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{ background: 'linear-gradient(to right, rgba(110, 72, 22, 0.95), rgba(179, 143, 44, 0.85))' }}
      ></div>
      <div className="relative container mx-auto flex flex-col items-center z-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center"
          style={{ color: '#FFF5CC' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Credovia?
        </motion.h2>
        {/* DESKTOP VIEW: Interactive Diagram (hidden on small screens) */}
        <div className="hidden md:block relative w-full max-w-4xl h-[32rem] mt-8">
          <svg className="absolute w-full h-full" viewBox="0 0 800 512">
            <motion.path d="M 120 64 C 250 64, 250 256, 400 256" stroke="#D4AF37" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.0, ease: "easeInOut" }}/>
            <motion.path d="M 64 256 C 200 256, 200 256, 400 256" stroke="#D4AF37" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}/>
            <motion.path d="M 680 128 C 550 128, 550 256, 400 256" stroke="#D4AF37" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.4, ease: "easeInOut" }}/>
            <motion.path d="M 600 384 C 500 384, 500 256, 400 256" stroke="#D4AF37" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.6, ease: "easeInOut" }}/>
          </svg>
          {uspData.map((usp) => (
            <UspNode key={usp.id} usp={usp} onHover={setHoveredId} isActive={hoveredId === usp.id} />
          ))}
        </div>
        {/* MOBILE VIEW: Simple List (only visible on small screens) */}
        <div className="w-full mt-12 md:hidden">
          <ul className="space-y-6">
            {uspData.map((usp, index) => (
              <motion.li
                key={usp.id}
                className="p-6 rounded-lg flex items-start space-x-4"
                style={{ backgroundColor: 'rgba(255, 245, 204, 0.1)' }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={usp.icon} alt="" className="w-10 h-10 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1" style={{ color: '#E7C24B' }}>{usp.title}</h3>
                  <p className="text-base" style={{ color: '#FFF5CC' }}>{usp.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Why;