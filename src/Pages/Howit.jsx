import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const steps = [
  {
    icon: "/icon-calendar.svg",
    title: "Book a Consultation",
    description: "Schedule a session with our crypto experts.",
    details: "Your journey begins with a private, no-obligation consultation. We'll discuss your financial goals, risk tolerance, and answer your initial questions to map out the best path forward."
  },
  {
    icon: "/icon-brain.svg",
    title: "Get AI-Backed Insights",
    description: "Leverage data-driven guidance for safer decisions.",
    details: "We combine our human expertise with a powerful AI engine that analyzes thousands of data points in real-time. This provides you with clear, intelligent insights, helping you see market opportunities that others miss."
  },
  {
    icon: "/icon-rocket.svg",
    title: "Grow with Confidence",
    description: "Build wealth with strategies tailored for your goals.",
    details: "With a clear strategy in place, we help you execute your investment plan. We provide ongoing support and advisory to ensure your portfolio remains aligned with your long-term wealth-building objectives."
  }
];
// Reusable Step Component for DESKTOP with Hover Logic
const DesktopStep = ({ step, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const detailVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      marginTop: '1rem',
      transition: { duration: 0.4, ease: "easeInOut" }
    },
  };
  return (
    <motion.div
      className="relative flex items-start mb-12 pl-20"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute left-0 top-0 w-18 h-18 rounded-full flex items-center justify-center"
        style={{ backgroundColor: '#B38F2C' }}
        animate={{ scale: isHovered ? 1.15 : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img src={step.icon} alt="" className="w-10 h-10" />
      </motion.div>
      <motion.div
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <h3
          className="text-2xl font-bold mb-2 cursor-pointer"
          style={{ color: '#6E4816' }}
        >
          {step.title}
        </h3>
        <p
          className="text-lg"
          style={{ color: 'rgba(110, 72, 22, 0.8)' }}
        >
          {step.description}
        </p>
        <AnimatePresence>
          {isHovered && (
            <motion.p
              className="text-base mt-4"
              style={{ color: 'rgba(110, 72, 22, 1)' }}
              variants={detailVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {step.details}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
// Main Component
const Howit = () => {
  return (
    <div
    id="how-it"
     className="relative py-24 px-8 overflow-hidden">
      <img
        src="/howit-background.jpg"
        alt="Abstract golden network background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{ backgroundColor: 'rgba(255, 245, 204, 0.9)' }}
      ></div>
      <div className="relative container mx-auto z-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ color: '#6E4816' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Your Journey with Credovia
        </motion.h2>
        {/* DESKTOP VIEW: Interactive Timeline (hidden on small screens) */}
        <div className="hidden md:block relative max-w-2xl mx-auto">
          <div
            className="absolute left-9 top-0 h-full w-0.5"
            style={{ backgroundColor: 'rgba(179, 143, 44, 0.3)' }}
          ></div>
          {steps.map((step, index) => (
            <DesktopStep key={index} step={step} index={index} />
          ))}
        </div>
        {/* MOBILE VIEW: Simple List (only visible on small screens) */}
        <div className="w-full md:hidden">
          <ul className="space-y-8">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div
                  className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                  style={{ backgroundColor: '#B38F2C' }}
                >
                  <img src={step.icon} alt="" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1" style={{ color: '#6E4816' }}>{step.title}</h3>
                  <p className="text-base" style={{ color: 'rgba(110, 72, 22, 0.9)' }}>
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Howit;