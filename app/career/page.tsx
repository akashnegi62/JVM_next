"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiUsers } from "react-icons/fi";
import Image from "next/image";

const textVariants = {
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

export default function Career() {
  return (
    <div className="relative">
      {/* Hero Banner with Background Image */}
      <section className="relative h-100 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
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
            CAREERS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            JOIN OUR TEAM AND BUILD YOUR FUTURE WITH US
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Image - Sticky */}
          <div className="hidden lg:block order-1 lg:order-1">
            <div className="sticky top-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center"
              >
                {/* Image Container - Smaller Size */}
                <div className="relative h-[50vh] w-full max-w-md rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="JMV Developers Team"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* linear Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-br from-orange-200/40 to-blue-200/40 rounded-[3rem] blur-3xl" />
              </motion.div>
            </div>
          </div>

          {/* Right Content - Scrollable Text */}
          <div className="order-2 lg:order-2 space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-600 leading-relaxed text-lg">
                At JMV Developers, we put people first. Our success is driven by
                passionate professionals who challenge norms and strive for
                excellence. We offer a performance-driven growth environment,
                strong values, and a world-class workplace. Join us to build a
                rewarding career—reach out at
                [info@jmvdevelopers.com](mailto:info@jmvdevelopers.com).
              </p>
            </motion.div>

            {/* Why Join Us Section */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center mb-6">
                <FiBriefcase className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Jobs Title</h2>
              </div>
              <ul className="list-disc pl-11">
                <li className="text-gray-600 leading-relaxed text-lg">
                  Real State Clerk{" "}
                </li>
                <li className="text-gray-600 leading-relaxed text-lg">
                  Real State Manager
                </li>
                <li className="text-gray-600 leading-relaxed text-lg">
                  Sales Assistant
                </li>
              </ul>
            </motion.div>

            {/* Our Culture Section */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center mb-6">
                <FiUsers className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Skill Sets</h2>
              </div>
              <ul className="list-disc pl-11">
                <li className="text-gray-600 leading-relaxed text-lg">
                  High performance
                </li>
                <li className="text-gray-600 leading-relaxed text-lg">
                  Passionate
                </li>
                <li className="text-gray-600 leading-relaxed text-lg">
                  Team Work
                </li>
                <li className="text-gray-600 leading-relaxed text-lg">
                  Dedication
                </li>
                <li className="text-gray-600 leading-relaxed text-lg">
                  Problem solving
                </li>
              </ul>
            </motion.div>

            {/* Apply Now CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pt-8 border-t border-gray-200"
            >
              <p className="text-gray-600 text-lg mb-6">
                Ready to take the next step in your career? Send your resume to
                <a
                  href="mailto:careers@jmvdevelopers.com"
                  className="text-orange-600 hover:text-orange-700 font-semibold ml-1"
                >
                  careers@jmvdevelopers.com
                </a>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-linear-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Apply Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
