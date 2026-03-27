"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiMail, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    image: "/Images/hero1.jpg",
    tag: "Building the New India.",
    title: "WELCOME TO JMV DEVELOPERS.",
    subtitle:
      "JMV Developers, established in 2008, is a trusted real estate brand known for quality, commitment, and reliable service, offering a wide range of property solutions backed by extensive industry experience.",
  },
  {
    id: 2,
    image: "/Images/hero2.jpg",
    tag: "OUR WORK IS OUR PASSION",
    title: "It's all about the PASSION.",
    subtitle:
      "We work in the dark -we do what we can -we give what we have. Our doubt is our passion and our passion is our task.",
  },
  {
    id: 3,
    image: "/Images/hero3.jpg",
    tag: "Innovation First",
    title: "BUILDING A MODERN HOUSE.",
    subtitle:
      "We bring creativity and expertise together to deliver exceptional results for our clients worldwide.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-swipe every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Carousel */}
      <div className="absolute inset-0 z-0">
        {/* Render all slides but control visibility */}
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={false}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 10 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
            style={{ willChange: "opacity" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url("${slide.image}")` }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <FiChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center space-x-2 mb-6"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
                {slides[currentSlide].tag}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group px-8 py-4 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-600/25 transition-all flex items-center justify-center space-x-2">
                <span>Explore projects</span>
                <FiPlay className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
                <FiMail className="mr-2" />
                <span>Contact us</span>
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
