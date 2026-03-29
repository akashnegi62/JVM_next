"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// --- Data ---
const projects = [
  {
    id: 1,
    title: "M3M JEWEL",
    subtitle: "Retail",
    location: "Sector 25, MG Road, Gurugram",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", // Placeholder for Jewel
    logo: "JEWEL",
  },
  {
    id: 2,
    title: "M3M MANSION",
    subtitle: "Residential",
    location: "Sector 113, Dwarka Expressway",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop", // Placeholder for Mansion
    logo: "MANSION",
  },
  {
    id: 3,
    title: "M3M THE LINE",
    subtitle: "Commercial",
    location: "Sector 72, Gurugram",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Placeholder
    logo: "THE LINE",
  },
];

// --- Variants ---
const sliderVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
};

const textVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
  },
};

export default function Carousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);

  const index = Math.abs(page % projects.length);
  const currentProject = projects[index];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="min-h-screen bg-white text-white py-20 px-4 md:px-10 overflow-hidden relative font-sans">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex justify-between items-end mb-12 z-20 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-black">
            News &{" "}
            <span className="font-serif italic text-amber-500">Feeds</span>
          </h2>
          <p className="text-neutral-500 mt-2 text-xl">
            Stay updated with the latest trends and insights in the world of
            business and innovation.
          </p>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <button
            onClick={() => paginate(-1)}
            className="p-4 border border-neutral-800 rounded-full text-black transition-all duration-300 group"
            aria-label="Previous Project"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="p-4 border border-neutral-800 rounded-full text-black transition-all duration-300 group"
            aria-label="Next Project"
          >
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div
        className="relative w-full max-w-7xl mx-auto h-150 md:h-175 perspective-1000"
        ref={containerRef}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            className="absolute w-full h-full"
          >
            {/* Card Content */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
              {/* Image with Parallax Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* linear Overlay for Text Readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col md:flex-row justify-between items-end gap-6">
                {/* Left: Branding */}
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="border-l-4 border-amber-500 pl-6"
                >
                  <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
                    {currentProject.logo}
                  </h3>
                  <p className="text-neutral-400 mt-2 text-lg tracking-widest uppercase">
                    {currentProject.subtitle}
                  </p>
                </motion.div>

                {/* Right: Details */}
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-right max-w-md"
                >
                  <h4 className="text-2xl font-light text-white mb-2">
                    {currentProject.title}
                  </h4>
                  <p className="text-neutral-400 flex items-center justify-end gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    {currentProject.location}
                  </p>
                  <button className="mt-6 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium uppercase tracking-wider">
                    View Details
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background Decoration (Blur) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-amber-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
