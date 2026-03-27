"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiBookmark, FiEdit3, FiPlay } from "react-icons/fi";

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
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Hero Banner with Background Image */}
      <section className="relative h-100 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/Images/news.jpg')`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            NEWS & FEEDS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Stay updated with the latest news, insights, and industry trends
          </motion.p>
        </div>
      </section>

      {/* Pinterest-Style Masonry Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Recent posts
          </h2>
        </motion.div>

        {/* Masonry Layout */}
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
              className="break-inside-avoid mb-6 group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className={`relative ${post.height} w-full overflow-hidden`}>
                <Image
                  src={post.image}
                  alt=""
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

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight line-clamp-2">
                  {post.title}
                </h3>

                {/* Tags */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiBookmark className="w-4 h-4 text-orange-500" />
                    <span>{post.category}</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300" />
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiEdit3 className="w-4 h-4 text-orange-500" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-linear-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Load More Posts
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
