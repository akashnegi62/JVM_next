"use client";

import { motion } from "framer-motion";
import { FiPhone, FiArrowRight } from "react-icons/fi";

export default function Banner() {
  return (
    <section className="relative w-full min-h-125 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/Images/greenfarm.jpeg')`,
        }}
      />

      {/* linear Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/70" />

      {/* Decorative linear Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 via-transparent to-purple-900/30" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Do you want to talk with one of our{" "}
            <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              real estate experts?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Get in touch with our professional team and let us help you find
            your dream property
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              href="tel:+918383041206"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 md:px-10 md:py-5 bg-linear-to-r from-orange-500 to-red-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 group"
            >
              <FiPhone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              <span>Call Now</span>
              <FiArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 text-sm"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              <span>Available 24/7</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Free Consultation</span>
            <span className="hidden sm:inline">•</span>
            <span>Expert Advice</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-red-600 rounded-full blur-3xl"
      />
    </section>
  );
}
