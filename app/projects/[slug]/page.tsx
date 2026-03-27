"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Hero Banner with Background Image */}
      <section className="relative h-100 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${project.images[0]})`,
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
            {project.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            {project.tagline}
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - About Project */}
          <div className="order-1 lg:order-1 space-y-12">
            {/* About Project Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About Project
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {project.description}
              </p>

              {/* Features */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Project Images */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative rounded-2xl overflow-hidden ${
                      index === 0 ? "col-span-2 h-64" : "h-48"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.name} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Sticky Project Details */}
          <div className="order-2 lg:order-2">
            <div className="sticky top-20">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-lg p-8"
              >
                {/* Project Details Header */}
                <h3 className="text-3xl font-bold text-gray-700 mb-8 uppercase tracking-wide">
                  PROJECT DETAILS
                </h3>

                {/* Details List */}
                <div className="space-y-4 mb-8">
                  {/* Location */}
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-bold text-amber-600">
                      Location:
                    </span>
                    <span className="text-gray-600">{project.location}</span>
                  </div>

                  {/* Surface Area */}
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-bold text-amber-600">
                      Surface Area:
                    </span>
                    <span className="text-gray-600">
                      {project.projectDetails.surfaceArea}
                    </span>
                  </div>

                  {/* Year Completed */}
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-bold text-amber-600">
                      Year Completed:
                    </span>
                    <span className="text-gray-600">
                      {project.projectDetails.yearCompleted}
                    </span>
                  </div>

                  {/* Value */}
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-bold text-amber-600">
                      Value:
                    </span>
                    <span className="text-gray-600">
                      ₹ {project.projectDetails.value}
                    </span>
                  </div>

                  {/* Architect */}
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-bold text-amber-600">
                      Architect:
                    </span>
                    <span className="text-gray-600">
                      {project.projectDetails.architect}
                    </span>
                  </div>
                </div>

                {/* Brochures Section */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-amber-600 mb-4">
                    {project.name} Brochures
                  </h4>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded flex items-center justify-center gap-3 transition-colors"
                  >
                    <FiDownload className="w-5 h-5" />
                    <span>Download PDF</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Purchase Property Form */}
                <div>
                  <h4 className="text-xl font-bold text-amber-600 mb-4">
                    Purchase Property Form
                  </h4>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded transition-colors"
                    >
                      Purchase Property
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
