"use client";

import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  description: string;
  image: string;
}

interface SectionData {
  title: string;
  description: string;
  image: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
} as const;

const SectionCard: React.FC<SectionProps> = ({ title, description, image }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
      className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Gradient line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-600 leading-relaxed text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>

        {/* Learn More */}
        <motion.div
          className="mt-4 flex items-center text-orange-600 font-semibold text-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ x: 5 }}
        >
          <span>Learn More</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function About() {
  const sections: SectionData[] = [
    {
      title: "VISION",
      description:
        "To building significantly to create the new India and become the India's most valuable real estate company.",
      image: "/Images/vision.jpg",
    },
    {
      title: "MISSION",
      description:
        "To achieve international standards of excellence with a focus on quality, aesthetics and customer satisfaction.",
      image: "/Images/mission.jpg",
    },
    {
      title: "VALUE",
      description:
        "Respect and falling in line for all community, environmental and legal requirements.",
      image: "/Images/value.jpg",
    },
  ];

  return (
    <section className="min-h-1/2 bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Core Principles
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Discover what drives us to build excellence and create lasting value
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sections.map((section) => (
            <SectionCard key={section.title} {...section} />
          ))}
        </motion.div>

        {/* Background blobs */}
        <motion.div
          className="fixed top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <motion.div
          className="fixed bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
