import React from 'react';
import { motion } from 'framer-motion';
// Animation for the whole container to fade in
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren", // Ensures parent animates before children
      staggerChildren: 0.4,  // Staggers the animation of direct children (left and right columns)
    },
  },
};
// Animation for individual text items to slide up and fade in
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
// Animation for the image to slide in from the right
const imageVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
    },
  },
};
const About = () => {
  return (
    <div
      id="about"
      className="py-24 px-8 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #FFF5CC, #FAE8A0)' }}
    >
      <motion.div
        className="container mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        {/* Left Column for Text - This will stagger its children */}
        <motion.div variants={sectionVariants}>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ color: '#6E4816' }}
            variants={itemVariants}
          >
            Your Trusted Pathway in
            <span style={{ color: '#B38F2C' }}> Crypto Advisory</span>
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-4"
            style={{ color: 'rgba(110, 72, 22, 0.9)' }}
            variants={itemVariants}
          >
            Unlike automated trading platforms, Credovia focuses on consultation, advisory, and strategy planning. Our experts combine AI-powered market intelligence with years of financial experience to help individuals and institutions invest with confidence.
          </motion.p>
          <motion.p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(110, 72, 22, 0.9)' }}
            variants={itemVariants}
          >
            We provide insights into multiple crypto markets, balancing short-term opportunities with long-term growth — so your portfolio works for you, not against you.
          </motion.p>
        </motion.div>
        {/* Right Column for Image */}
        <motion.div
          className="p-2 rounded-lg shadow-2xl"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          variants={imageVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <img
            src="/consultation.jpg"
            alt="Expert Financial Consultation"
            className="w-full h-auto max-h-[400px] object-cover rounded-lg"
            style={{ objectPosition: 'center' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default About;