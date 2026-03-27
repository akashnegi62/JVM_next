"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiTrendingUp } from "react-icons/fi";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  cost: string;
  image: string;
  location: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "HARIT HOMES",
    description:
      'A combination of premium features and a "Great place to live" are the statements come true with Harit Homes Plots',
    cost: "Rs. 826500000",
    image: "/Images/harti.jpeg",
    location: "Sector 45, Gurgaon",
  },
  {
    id: 2,
    title: "GREEN VIEW FARM",
    description:
      "Green View Farms is a eco friendly planned society with lush green environments which spreads across 100 acres of area.",
    cost: "Rs. 150 Crore",
    image: "/Images/greenfarm.jpeg",
    location: "NH-48, Jaipur",
  },
  {
    id: 3,
    title: "LAKSHYA GROUP",
    description:
      "Lakshya has evolved into one of the fastest growing real estate development companies in India.",
    cost: "Rs. 655,440,000",
    image: "/Images/lakshay.jpeg",
    location: "Whitefield, Bangalore",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  hover: {
    y: -10,
    boxShadow:
      "0 20px 40px -15px rgba(0, 0, 0, 0.15), 0 10px 20px -10px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
};

export default function Projects() {
  const [, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Projects
          </motion.h2>
          <motion.p
            className="text-gray-500 text-lg font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            See our recent projects
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Project Tag */}
                <motion.div
                  className="absolute top-4 left-4 z-20 bg-linear-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded-lg text-sm font-semibold shadow-lg"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  PROJECT
                </motion.div>

                {/* Location Badge */}
                <motion.div
                  className="absolute bottom-4 left-4 z-20 flex items-center text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiMapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">
                    {project.location}
                  </span>
                </motion.div>

                {/* View Project Button */}
                <motion.div
                  className="absolute inset-0 z-20 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="bg-white text-gray-800 px-6 py-2.5 rounded-full font-semibold text-sm shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 text-sm leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {project.description}
                </motion.p>

                {/* Cost Section */}
                <motion.div
                  className="mt-6 bg-linear-to-r from-slate-900 to-blue-900 rounded-xl p-4 flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Project Cost</p>
                    <p className="text-white font-bold text-lg">
                      {project.cost}
                    </p>
                  </div>
                  <motion.div
                    className="bg-white/10 p-2 rounded-lg"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiTrendingUp className="w-5 h-5 text-orange-400" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-orange-400/20 to-red-400/20 rounded-bl-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-3 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="ml-2"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
