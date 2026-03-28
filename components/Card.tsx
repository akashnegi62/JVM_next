"use client";

import { motion } from "framer-motion";

interface PrincipleCardProps {
  number: string;
  title: string;
  description: string;
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
  hover: {
    y: -8,
    borderColor: "rgba(20, 184, 166, 0.4)",
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
} as const;

const PrincipleCard: React.FC<PrincipleCardProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
      className="group bg-white rounded-2xl p-10 border border-gray-100 cursor-default"
    >
      {/* Number and Title Container */}
      <div className="flex items-start gap-6 mb-6">
        <motion.h3
          className="text-7xl font-light text-gray-900 leading-none"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {number}
        </motion.h3>

        <div className="flex-1 pt-2">
          <motion.h4
            className="text-base font-semibold text-teal-700 uppercase tracking-wider leading-tight group-hover:text-teal-600 transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h4>
        </div>
      </div>

      {/* Horizontal Line */}
      <motion.div
        className="w-full h-px bg-linear-to-r from-teal-500 to-transparent mb-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{
          scaleX: 1.02,
          backgroundColor: "rgba(20, 184, 166, 0.8)",
        }}
      />

      {/* Description */}
      <motion.p
        className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {description}
      </motion.p>

      {/* Subtle hover indicator */}
      <motion.div
        className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export default function PrinciplesSection() {
  const principles = [
    {
      number: "01",
      title: "Craftsmanship That Defines Luxury",
      description:
        "Our properties embody the precision and artistry found in the world's most exclusive real estate. From bespoke interiors to immersive outdoor spaces, we pursue an uncompromising level of detail that transforms every home, villa, and resort into a signature living experience.",
    },
    {
      number: "02",
      title: "Sustainable Luxury, Rooted in Nature",
      description:
        "We develop environments where coastal, desert, and mountain landscapes remain central to the experience. We champion eco-sensitive development—designing communities that preserve natural beauty while offering modern comfort, wellness-focused amenities, and long-term value for residents and investors.",
    },
    {
      number: "03",
      title: "Lifestyle-Centric Experiences",
      description:
        "Beyond properties, we create lifestyle destinations, from serene waterfront enclaves to elevated wellness retreats, designed around how people aspire to live. Our developments foster connection, privacy, and well-being, delivering a standard of living that defines premium real estate.",
    },
  ];

  return (
    <section className="min-h-screen bg-linear-to-b from-white via-blue-50 to-blue-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The Principles Behind Everything We Build
          </motion.h2>

          <motion.div
            className="w-24 h-px bg-linear-to-r from-transparent via-teal-500 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {principles.map((principle) => (
            <PrincipleCard key={principle.number} {...principle} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
