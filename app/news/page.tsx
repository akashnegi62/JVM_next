// app/news/page.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FiBookmark, FiEdit3, FiPlay } from "react-icons/fi";
import { PiNewspaper } from "react-icons/pi";

interface NewsPost {
  id: number;
  title: string;
  author: string;
  image: string;
  category: string;
  isVideo?: boolean;
  height: string;
}

const newsPosts: NewsPost[] = [
  {
    id: 1,
    title: "Yamuna e-way to expand to 8 lanes for Jewar airport",
    author: "Admin",
    image: "/Images/eway.jpg",
    category: "Real Estate",
    height: "h-[500px]",
  },
  {
    id: 2,
    title:
      "Delhi-Mumbai 12-hour Expressway to come soon:List of expressways that you must know",
    author: "Admin",
    image: "/Images/delhi.jpeg",
    category: "Real Estate",
    height: "h-72",
  },
  {
    id: 3,
    title: "Yamuna expressway to soon have LED lights, crash barriers and more",
    author: "Admin",
    image: "/Images/yamuna.jpg",
    category: "Real Estate",
    height: "h-72",
  },
  {
    id: 4,
    title:
      "30 acres along Yamuna Expressway will be allotted to CRPF for a base",
    author: "Admin",
    image: "/Images/30acre.jpeg",
    category: "Real Estate",
    height: "h-80",
  },
  {
    id: 5,
    title:
      "118 More Owners Agree For Land Acquisition For Jewar Airport, Says MLA",
    author: "Admin",
    image: "/Images/118.jpg",
    category: "Real Estate",
    isVideo: false,
    height: "h-96",
  },
  {
    id: 6,
    title: "Jewar International Airport in Greater Noida to be reality soon",
    author: "Admin",
    image: "/Images/jewar.jpg",
    category: "Real Estate",
    height: "h-64",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.48, 0.15, 0.25, 0.96] as const,
    },
  },
};

export default function News() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for hero parallax
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.05]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-50">
      {/* Hero Section - Bottom Left Text */}
      <section className="relative h-screen flex items-end">
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent z-10" />
          <Image
            src="/Images/news.jpg"
            alt="JMV News"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Bottom Left Text */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 px-6 pb-20 md:pb-32 max-w-7xl mx-auto w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/80 text-sm md:text-base uppercase tracking-[0.4em] ml-8 mb-4"
            >
              Stay Updated
            </motion.p>
            <motion.h1 className="text-[15vw] md:text-[10vw] lg:text-[8vw] font-bold text-white tracking-tighter leading-none">
              NEWS {""} & {""} FEEDS
            </motion.h1>
          </motion.div>
        </motion.div>
      </section>

      {/* Recent Posts Section - Career Page Style */}
      <section className="py-24 md:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Large Heading like Career Page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-200 leading-none tracking-tighter select-none flex items-center gap-4">
              <PiNewspaper className="text-5xl md:text-6xl" /> RECENT POSTS
            </h2>
          </motion.div>

          {/* Masonry Grid - Career Page Card Style */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {newsPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="break-inside-avoid mb-6 group bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 border border-gray-300 cursor-pointer"
              >
                {/* Image Container */}
                <div
                  className={`relative ${post.height} w-full overflow-hidden rounded-t-xl`}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Video Overlay */}
                  {post.isVideo && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg">
                          <FiPlay className="w-8 h-8 text-white ml-1" />
                        </div>
                        <p className="text-white font-semibold text-sm bg-black/60 px-4 py-2 rounded-full inline-block">
                          Watch on YouTube
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content - Career Page Style */}
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-lg leading-tight line-clamp-2 mb-2">
                        {post.title}
                      </h3>

                      {/* Tags - Like Career Page Skills */}
                      <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FiBookmark className="w-4 h-4 text-gray-900" />
                          <span>{post.category}</span>
                        </div>
                        <div className="w-px h-4 bg-gray-300" />
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FiEdit3 className="w-4 h-4 text-gray-900" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button - Career Page CTA Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              Load More Posts <FiBookmark />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
