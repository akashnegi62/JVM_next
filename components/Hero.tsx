"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineLocationOn } from "react-icons/md";

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
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
    title: "A Sanctuary Shaped by Sea & Forests",
    location: "SIX SENSES LA SAGESSE",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2134&auto=format&fit=crop",
    title: "Where Nature Meets Pure Luxury",
    location: "ALPINE RETREAT",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    title: "Escape to an Island Paradise",
    location: "TROPICAL HAVEN",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
    title: "Tranquility Beyond the Horizon",
    location: "OCEAN VIEW VILLA",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2070&auto=format&fit=crop",
    title: "Find Your Inner Peace",
    location: "DESERT OASIS",
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
      <div className="absolute inset-0 z-20 flex flex-col justify-between pt-32 pb-10 px-6 md:px-12 max-w- mx-auto">
        {/* Animated Title Text */}
        <div className="w-full text-center mt-10 md:mt-0">
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
        </div>

        {/* Bottom Bar: Progress Indicators & Location */}
        <div className="relative w-full flex flex-col justify-end items-center h-24">
          {/* Location Tag (Bottom Right) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute right-0 bottom-6 flex items-center gap-2 text-white/90 font-medium tracking-widest text-xs md:text-sm uppercase"
            >
              <MdOutlineLocationOn className="text-xl" />
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
                    key={currentIndex} // Forces animation restart on slide change
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: SLIDE_DURATION / 1000,
                      ease: "linear",
                    }}
                    style={{ originX: 0 }} // Animates from left to right
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
