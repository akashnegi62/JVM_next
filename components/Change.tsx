"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// --- Types ---
interface VerticalCard {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
}

// --- Data ---
const verticals: VerticalCard[] = [
  {
    id: 1,
    category: "RESIDENTIAL",
    title: "Luxury Living Spaces",
    description: "Crafting homes that define modern lifestyle.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
    color: "from-gray-900 to-transparent",
  },
  {
    id: 2,
    category: "RETAIL",
    title: "Commercial Hubs",
    description: "Destinations designed for commerce and community.",
    image:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?q=80&w=1000&auto=format&fit=crop",
    color: "from-gray-900 to-transparent",
  },
  {
    id: 3,
    category: "OFFICES",
    title: "Urbana Premium",
    description: "Business environments that inspire success and productivity.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    color: "from-blue-900 to-transparent",
  },
  {
    id: 4,
    category: "SERVICED APARTMENTS",
    title: "Comfort & Convenience",
    description: "Short stays with long-lasting impressions.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
    color: "from-gray-900 to-transparent",
  },
  {
    id: 5,
    category: "LEASING",
    title: "Prime Properties",
    description: "Flexible leasing options for every need.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1000&auto=format&fit=crop",
    color: "from-gray-900 to-transparent",
  },
];

// --- Heading Animation Variants ---
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const subheadingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

export default function ExpandingVerticals() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden font-sans">
      {/* HEADING SECTION */}
      <div className="relative z-20 px-6 md:px-10 pt-16 pb-8 max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-light text-white tracking-tight"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Our <span className="font-serif italic text-amber-500">Projects</span>
        </motion.h1>

        <motion.p
          className="text-neutral-400 text-lg md:text-xl mt-3 max-w-2xl"
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
        >
          See our recent projects
        </motion.p>
      </div>

      {/* Cards Container */}
      <div className="flex w-full h-[85vh] px-6 md:px-10">
        {verticals.map((card) => {
          const isActive = activeId === card.id;

          return (
            <motion.div
              key={card.id}
              className="relative flex-1 overflow-hidden cursor-pointer group mr-3 last:mr-0"
              initial={{ flex: 1 }}
              animate={{ flex: isActive ? 3 : 1 }}
              whileHover={{ flex: 3 }}
              onHoverStart={() => setActiveId(card.id)}
              onHoverEnd={() => setActiveId(null)}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Background Image */}
              <div
                className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out
                  ${isActive ? "grayscale-0 scale-105" : "grayscale scale-100"}
                `}
                style={{ backgroundImage: `url(${card.image})` }}
              />

              {/* Overlay Gradient */}
              <div
                className={`absolute inset-0 bg-linear-to-t ${card.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}
              />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
                {/* Top Label */}
                <span
                  className={`text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-500
                  ${isActive ? "opacity-100 translate-y-0" : "opacity-70"}
                `}
                >
                  {card.category}
                </span>

                {/* Bottom Details */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${isActive ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-4"}
                `}
                >
                  <h2 className="text-2xl md:text-3xl text-white font-semibold mb-2 leading-tight">
                    {card.title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2">
                    {card.description}
                  </p>

                  {/* Read More Button */}
                  <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                    READ MORE
                    <FiArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
