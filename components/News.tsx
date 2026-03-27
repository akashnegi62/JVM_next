"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiBookmark,
  FiEdit3,
  FiPlay,
} from "react-icons/fi";
import Image from "next/image";

interface NewsItem {
  id: number;
  title: string;
  image: string;
  category: string;
  author: string;
  isVideo?: boolean;
  videoUrl?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Yamuna expressway to soon have LED lights, crash barriers and more",
    image:
      "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80",
    category: "Real Estate",
    author: "Admin",
  },
  {
    id: 2,
    title:
      "30 acres along Yamuna Expressway will be allotted to CRPF for a base",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    category: "Real Estate",
    author: "Admin",
  },
  {
    id: 3,
    title: "JMV DEVELOPERS FARM",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    category: "Real Estate",
    author: "Admin",
    isVideo: true,
    videoUrl: "https://youtube.com",
  },
  {
    id: 4,
    title: "New residential projects launching in Ghaziabad",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    category: "Real Estate",
    author: "Admin",
  },
  {
    id: 5,
    title: "Infrastructure development updates in NCR region",
    image:
      "https://images.unsplash.com/photo-1449844902652-69419b9f356f?auto=format&fit=crop&w=800&q=80",
    category: "Real Estate",
    author: "Admin",
  },
  {
    id: 6,
    title: "Property investment trends in 2024",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    category: "Real Estate",
    author: "Admin",
  },
];

export default function News() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleItems = () => {
    const prev = (currentIndex - 1 + newsItems.length) % newsItems.length;
    const next = (currentIndex + 1) % newsItems.length;
    return {
      prev: newsItems[prev],
      current: newsItems[currentIndex],
      next: newsItems[next],
    };
  };

  const visibleItems = getVisibleItems();

  return (
    <motion.div
      className="min-h-150 bg-gray-50 flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="w-full max-w-6xl mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          News & Feeds
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Stay updated with the latest trends and insights in the world of
          business and innovation.
        </motion.p>
      </motion.div>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl flex items-center justify-center">
        {/* Left Arrow */}
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-0 md:left-4 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-700" />
        </motion.button>

        {/* Cards Container */}
        <div className="flex items-center justify-center gap-4 md:gap-6 px-16 md:px-20">
          {/* Previous Card */}
          <motion.div
            key={`prev-${visibleItems.prev.id}`}
            initial={{ opacity: 0, scale: 0.8, x: -100 }}
            animate={{ opacity: 0.6, scale: 0.85, x: 0 }}
            transition={{ duration: 0.4 }}
            className="hidden md:block relative w-56 h-72 md:w-64 md:h-80 rounded-lg overflow-hidden cursor-pointer bg-white shadow-lg"
            onClick={() =>
              goToSlide(
                (currentIndex - 1 + newsItems.length) % newsItems.length,
              )
            }
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={visibleItems.prev.image}
                alt={visibleItems.prev.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-800 line-clamp-2">
                {visibleItems.prev.title}
              </p>
            </div>
          </motion.div>

          {/* Current Card */}
          <motion.div
            key={`current-${visibleItems.current.id}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-72 h-96 md:w-80 md:h-112 rounded-lg overflow-hidden shadow-2xl bg-white"
          >
            {/* Image Container */}
            <div className="relative h-56 md:h-64 overflow-hidden">
              <Image
                src={visibleItems.current.image}
                alt=""
                fill
                className="object-cover"
              />

              {/* Video Play Button Overlay */}
              {visibleItems.current.isVideo && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40"
                >
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <FiPlay className="w-8 h-8 text-white ml-1" />
                  </div>
                </motion.div>
              )}

              {/* linear Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 line-clamp-3 leading-tight">
                {visibleItems.current.title}
              </h3>

              {/* Tags */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <FiBookmark className="w-4 h-4 text-orange-500" />
                  <span>{visibleItems.current.category}</span>
                </div>
                <div className="w-px h-4 bg-gray-300" />
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <FiEdit3 className="w-4 h-4 text-orange-500" />
                  <span>{visibleItems.current.author}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Card */}
          <motion.div
            key={`next-${visibleItems.next.id}`}
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 0.6, scale: 0.85, x: 0 }}
            transition={{ duration: 0.4 }}
            className="hidden md:block relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer bg-white shadow-lg"
            onClick={() => goToSlide((currentIndex + 1) % newsItems.length)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={visibleItems.next.image}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-800 line-clamp-2">
                {visibleItems.next.title}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Arrow */}
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-0 md:right-4 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <FiChevronRight className="w-6 h-6 text-gray-700" />
        </motion.button>
      </div>

      {/* Dots */}
      <motion.div
        className="flex gap-2 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-1.5 bg-linear-to-r from-orange-500 to-red-500"
                : "w-1.5 h-1.5 bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
