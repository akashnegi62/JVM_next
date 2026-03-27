"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "It is better to lead from behind and to put others in front, especially when you celebrate victory when nice things occur. You take the front line when there is danger. Then people will appreciate your leadership.",
    author: "JASON SANTA MARIA",
    position: "CEO, Tech Solutions",
  },
  {
    id: 2,
    quote:
      "Working with this team has been an absolute pleasure. Their dedication to excellence and attention to detail has transformed our vision into reality. Highly recommended!",
    author: "SARAH JOHNSON",
    position: "Marketing Director",
  },
  {
    id: 3,
    quote:
      "The level of professionalism and expertise they bring to every project is outstanding. They consistently deliver results that exceed our expectations.",
    author: "MICHAEL CHEN",
    position: "Founder, Innovate Inc",
  },
];

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swipe every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="min-h-100 bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
            What Our Clients Think
          </h2>
        </motion.div>

        {/* Testimonial Container */}
        <div className="relative">
          {/* Content */}
          <div className="px-12 md:px-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-light"
                >
                  {testimonials[currentIndex].quote}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <p className="text-orange-600 font-semibold text-base md:text-lg uppercase tracking-wide">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {testimonials[currentIndex].position}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center gap-3 mt-12"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-2 bg-orange-600"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
