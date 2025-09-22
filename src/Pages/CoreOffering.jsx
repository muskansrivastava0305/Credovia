import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Data for the three offering cards
const offerings = [
  {
    image: "/offering-consultation.jpg",
    title: "Crypto Consultation",
    description: "Personalized 1:1 sessions with advisors who understand both technology and finance."
  },
  {
    image: "/offering-risk.jpg",
    title: "Risk Management Advisory",
    description: "Dynamic models that help protect against crypto volatility while exploring new opportunities."
  },
  {
    image: "/offering-wealth.jpg",
    title: "Wealth-Building Strategies",
    description: "Balanced investment plans designed for both retail investors and global institutions."
  }
];
// Reusable Flipping Card Component
const FlippingCard = ({ offer }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };
  return (
    <motion.div
      className="relative rounded-lg shadow-xl"
      style={{ minHeight: '450px', perspective: '1000px' }}
      variants={cardVariants}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* FRONT SIDE */}
        <div className="absolute w-full h-full rounded-lg overflow-hidden text-left flex flex-col" style={{ backgroundColor: 'rgba(110, 72, 22, 0.5)', backfaceVisibility: 'hidden' }}>
          <img src={offer.image} alt={offer.title} className="w-full h-56 object-cover"/>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#E7C24B', textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>{offer.title}</h3>
            <p className="text-base leading-relaxed" style={{ color: '#FFF5CC', textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>{offer.description}</p>
          </div>
        </div>
        {/* BACK SIDE */}
        <div className="absolute w-full h-full rounded-lg overflow-hidden text-left flex flex-col items-center justify-center p-6" style={{ backgroundColor: '#B38F2C', backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFF5CC' }}>{offer.title}</h3>
          <button className="py-2 px-6 rounded-full font-semibold" style={{ backgroundColor: '#D4AF37', color: '#6E4816' }}>Learn More</button>
        </div>
      </motion.div>
    </motion.div>
  );
};
// Main CoreOffering Component
const CoreOffering = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  return (
    <div 
    id="core-offering"
    className="relative py-24 px-8 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/offerings-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* The overlay div has been removed */}
      <div className="relative container mx-auto text-center z-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16"
          // NEW: Added text shadow for readability
          style={{ color: '#D4AF37', textShadow: '2px 2px 5px rgba(0,0,0,0.7)' }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          What We Offer
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {offerings.map((offer, index) => (
            <FlippingCard key={index} offer={offer} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default CoreOffering;