"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
    image: "/images/hero1.jpg",
    title: "JMV Developers",
    location: "REAL ESTATE DEVELOPMENT COMPANY",
  },
  {
    id: 2,
    image: "/images/hero2.jpg",
    title: "Where Our Work is Our Passion",
    location: "UNMATCHED QUALITY & SERVICE",
  },
  {
    id: 3,
    image: "/images/hero3.jpg",
    title: "Design Your Dream Modern House",
    location: "SUSTAINABLE ARCHITECTURE",
  },
  {
    id: 4,
    image: "/images/hero4.jpg",
    title: "Affordable Luxury & Low-Cost Tech",
    location: "SMART HOUSING SOLUTIONS",
  },
  {
    id: 5,
    image: "/images/hero5.jpg",
    title: "Your Trusted Real Estate Partner",
    location: "ESTABLISHED IN 2008",
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the automatic slide progression
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-zinc-900">
      {/* Background Images with Crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
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
      <div className="absolute inset-0 bg-black/20 z-10" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent z-10" />
      <div className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-black/40 to-transparent z-10" />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between pt-32 pb-10 px-6 md:px-12 mx-auto">
        {/* Animated Title Text & Mobile Subtitle */}
        <div className="w-full text-center mt-10 md:mt-0 flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-wide drop-shadow-lg"
            >
              {slides[currentIndex].title}
            </motion.h1>
          </AnimatePresence>

          {/* Location Tag: Shown ONLY on mobile/tablet directly under the heading */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${currentIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 flex lg:hidden items-center gap-2 text-white/90 font-medium tracking-widest text-xs uppercase"
            >
              <GoDotFill className="text-lg" />
              <span className="border-b border-white/30 pb-1">
                {slides[currentIndex].location}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Bar: Progress Indicators & Desktop Location */}
        <div className="relative w-full flex flex-col justify-end items-center h-24">
          {/* Location Tag: Shown ONLY on desktop (Bottom Right) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`desktop-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:hidden lg:flex absolute right-0 bottom-6 items-center gap-2 text-white/90 font-medium tracking-widest text-sm uppercase"
            >
              <GoDotFill className="text-xl" />
              <span>{slides[currentIndex].location}</span>
            </motion.div>
          </AnimatePresence>

          {/* Progress Bars (Centered) */}
          <div className="flex gap-2 md:gap-3 absolute bottom-6 left-1/2 -translate-x-1/2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="h-0.5 w-8 md:w-12 bg-white/30 relative overflow-hidden rounded-full cursor-pointer hover:bg-white/50 transition-colors"
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
        </div>
      </div>
    </section>
  );
}
