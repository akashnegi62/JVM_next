"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

// 1. Define the Property Data
const properties = [
  {
    id: "island-heights",
    title: "The Island Heights",
    description:
      "Just minutes from Wynn Al Marjan Island and moments from the beach, The Island Heights offers 165 luxury apartments with stunning coastal views waiting to be discovered.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "beach-vista",
    title: "The Beach Vista",
    description:
      "The Beach Vista offers 151 exquisite studio, 1- and 2-bedroom residences on Al Marjan Island, opposite Wynn Al Marjan, with serene, panoramic views of the Arabian Gulf.",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "beach-residences",
    title: "The Beach Residences",
    description:
      "Experience the ultimate beachfront lifestyle with private access to pristine sands, world-class amenities, and breathtaking sunsets from your balcony.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "beach-house",
    title: "The Beach House",
    description:
      "A sanctuary of peace featuring modern architectural design, lush private gardens, and an infinity pool that blends seamlessly into the ocean horizon.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
  },

];

// 2. Sub-component to detect when an image scrolls into view
const ImageBlock = ({
  src,
  alt,
  index,
  onVisible,
}: {
  src: string;
  alt: string;
  index: number;
  onVisible: (i: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  // Triggers when the block hits the vertical center of the screen
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      onVisible(index);
    }
  }, [isInView, index, onVisible]);

  return (
    <div
      ref={ref}
      className="h-[80vh] w-full flex items-center justify-center py-10"
    >
      <div className="relative w-full h-full max-w-2xl overflow-hidden bg-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index === 0}
        />
        {/* Placeholder Logo Box to mimic the design */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/80 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest text-center p-4">
          {alt}
        </div>
      </div>
    </div>
  );
};

// 3. Main Projects Component
export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-white text-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-6 md:px-12 relative">
        {/* Left Side: Scrolling Images */}
        <div className="w-full md:w-1/2 pt-[10vh] pb-[30vh]">
          {properties.map((property, index) => (
            <ImageBlock
              key={property.id}
              src={property.image}
              alt={property.title}
              index={index}
              onVisible={setActiveIndex}
            />
          ))}
        </div>

        {/* Right Side: Sticky Text */}
        <div className="w-full md:w-1/2 relative">
          <div className="sticky top-0 h-screen flex flex-col justify-center pl-0 md:pl-20 py-20">
            <p className="text-2xl md:text-3xl font-semibold text-slate-500 tracking-widest uppercase mb-12">
              Our Projects
            </p>

            <div className="flex flex-col gap-6">
              {properties.map((property, index) => {
                const isActive = index === activeIndex;

                return (
                  <div key={property.id} className="flex flex-col">
                    {/* Title */}
                    <button
                      onClick={() => {
                        // Optional: Allow clicking the title to scroll the window to the image
                        // In a real app, you'd use a ref to the image block to scroll into view.
                        setActiveIndex(index);
                      }}
                      className={`text-left text-3xl md:text-5xl font-serif transition-colors duration-500 ${
                        isActive ? "text-slate-800" : "text-slate-300"
                      }`}
                    >
                      {property.title}
                    </button>

                    {/* Expandable Description */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            marginTop: 24,
                          }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 leading-relaxed max-w-md">
                            {property.description}
                          </p>
                          <button className="mt-6 text-sm font-medium border-b border-gray-400 pb-1 hover:border-gray-800 transition-colors">
                            Learn More
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
