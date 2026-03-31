"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GoDotFill } from "react-icons/go";

// Define the slide data structure
interface Slide {
  id: number;
  image: string;
  title: string;
  location: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/hero1.jpg",
    title: "JMV Developers",
    location: "REAL ESTATE DEVELOPMENT COMPANY",
  },
  {
    id: 2,
    image: "/hero2.jpg",
    title: "Where Our Work is Our Passion",
    location: "UNMATCHED QUALITY & SERVICE",
  },
  {
    id: 3,
    image: "/hero3.jpg",
    title: "Design Your Dream Modern House",
    location: "SUSTAINABLE ARCHITECTURE",
  },
  {
    id: 4,
    image: "/hero4.jpg",
    title: "Affordable Luxury & Low-Cost Tech",
    location: "SMART HOUSING SOLUTIONS",
  },
  {
    id: 5,
    image: "/hero5.jpg",
    title: "Your Trusted Real Estate Partner",
    location: "ESTABLISHED IN 2008",
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

// Animation variants for the content (Title, Subtitle, and Buttons)
const contentVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the automatic slide progression
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  // Smooth scroll function for the Projects button
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link jump
    const target = document.getElementById("projects-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-zinc-900 font-sans text-white">
      {/* Background Images with Crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlays for readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent z-10" />
      <div className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-black/50 to-transparent z-10" />

      {/* Main Content Container (z-20) */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center pt-32 pb-10 px-6 md:px-12 mx-auto">
        <AnimatePresence mode="wait">
          {/* A Wrapper motion div to contain all animated content together */}
          <motion.div
            key={currentIndex}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-wide drop-shadow-xl">
              {slides[currentIndex].title}
            </h1>

            {/* Subtitle/Location */}
            <div className="flex items-center gap-2 text-white/90 font-medium tracking-widest text-sm md:text-lg lg:text-lg uppercase bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
              <GoDotFill className="text-xl" />
              <span>{slides[currentIndex].location}</span>
            </div>

            {/* --- BUTTONS SECTION --- */}
            {slides[currentIndex].id === 1 && (
              <div className="mt-8 flex flex-col sm:flex-row gap-5 items-center">
                {/* Button A: Link to About Us Page */}
                <Link
                  href="/about"
                  className="group relative flex items-center gap-3 px-8 py-3.5 border border-white/80 rounded-full font-semibold tracking-wide hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
                >
                  <span className="text-sm uppercase">About Us</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </Link>

                {/* Button B: Scroll to Projects Section */}
                <Link
                  href="#projects-section"
                  onClick={scrollToProjects}
                  className="group relative flex items-center gap-3 px-8 py-3.5 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-white/90 font-semibold tracking-wide hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
                >
                  <span className="text-sm uppercase">Projects</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </Link>
              </div>
            )}
            {/* --- END BUTTONS SECTION --- */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- Progress Bars --- */}
      <div className="absolute inset-x-0 bottom-6 z-30 flex gap-2 md:gap-3 justify-center items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="h-0.5 w-10 md:w-16 bg-white/30 relative overflow-hidden rounded-full cursor-pointer hover:bg-white/50 transition-colors"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                key={currentIndex}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: SLIDE_DURATION / 1000,
                  ease: "linear",
                }}
                style={{ originX: 0 }}
                className="absolute inset-0 bg-white"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
