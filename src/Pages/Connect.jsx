import React from 'react';
import { motion } from 'framer-motion';
const Connect = () => {
  return (
    <div
      className="relative py-24 px-8 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* NEW: Background Image */}
      <img
        src="/connect-background.jpg"
        alt="Crypto coins background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* NEW: Dark overlay to ensure readability */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: 'rgba(110, 72, 22, 0.9)' }} // primary-brown at 90% opacity
      ></div>
      <motion.h2
        className="relative z-20 text-4xl md:text-5xl font-bold mb-4"
        style={{ color: '#FFF5CC' }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Let's Connect
      </motion.h2>
      <motion.p
        className="relative z-20 text-lg mb-12 max-w-lg"
        style={{ color: 'rgba(255, 245, 204, 0.8)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Join our exclusive Telegram community for real-time crypto insights, market analysis, and direct interaction with our experts.
      </motion.p>
      {/* QR Code Container with dynamic glow */}
      <motion.div
        className="relative p-8 rounded-2xl flex flex-col items-center justify-center z-20"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)'
        }}
        initial={{ opacity: 0, scale: 0.7, rotateY: 15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.4, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(212, 175, 55, 0.8)' }}
      >
        <motion.img
          src="/telegram-qr.png"
          alt="Credovia AI Telegram QR Code"
          className="w-64 h-auto rounded-xl"
          initial={{ filter: 'brightness(0.7)' }}
          animate={{ filter: 'brightness(1.0)' }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.p
          className="text-xl font-semibold mt-4"
          style={{ color: '#6E4816' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          @CREDOVIA_AI
        </motion.p>
      </motion.div>
      {/* Join Button */}
      <motion.a
        href="https://t.me/credovia_ai"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-20 mt-12 py-3 px-8 rounded-full font-bold text-lg"
        style={{
          backgroundColor: '#D4AF37',
          color: '#6E4816',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.8 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 20px #D4AF37' }}
        whileTap={{ scale: 0.95 }}
      >
        Join Our Telegram Channel
      </motion.a>
    </div>
  );
};
export default Connect;
