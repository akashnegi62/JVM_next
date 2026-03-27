"use client";

import { motion } from "framer-motion";
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

export default function About() {
  return (
    <div className="relative">
      {/* Hero Banner with Background Image */}
      <section className="relative h-100 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/Images/aboutimg.jpg')`,
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
            ABOUT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            INFORMATIONS ABOUT OUR COMPANY AND OUR PHILOSOPHY
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content - Scrollable Text */}
          <div className="space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-600 leading-relaxed text-lg">
                JMV Developers established in 2008 is a renowned brand to cater
                to all your Real Estate needs. We assure you the full
                satisfaction as regards to the quality, commitment, service and
                deal in a wide network of properties. We offer top-of-the-line
                reality services and hold a long-range experience in the
                industry. We develop the societies in Residential Plot, Builder
                Floor Apartment, Farm House Services, Villas. We are committed
                to deliver the expected quality in promised time.
              </p>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Vision:</h2>
              </div>
              <ul className="list-disc pl-11 space-y-3">
                <li className="text-gray-600 leading-relaxed text-lg">
                  To building significantly to create the new India and become
                  the India&apos;s most valueable real estate company.
                </li>
              </ul>
            </motion.div>
            {/* Mission Section */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Mission:</h2>
              </div>
              <ul className="list-disc pl-11 space-y-2">
                <li className="text-gray-600 leading-relaxed text-lg">
                  To achieve international standards of excellence with a focus
                  on quality, aesthetics and customer satisfaction.
                </li>
                <li className="text-gray-600 leading-relaxed text-lg">
                  To achieve prominence in developing, adopting and assimilating
                  state-of-the-art technology for competitive advantage.
                </li>
                <li className="text-gray-600 leading-relaxed text-lg">
                  To cultivating high standards of ethics and quality for a
                  strong corporate identity and brand equity.
                </li>
              </ul>
            </motion.div>

            {/* Value Section */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Value:</h2>
              </div>
              <ul className="list-disc pl-11 space-x-2">
                <li className="text-gray-600 leading-relaxed text-lg">
                  Put customers before ourselves.
                </li>
                <li className="text-gray-600 leading-relaxed text-lg">
                  Honorable and expert service.
                </li>
                <li className="text-gray-600 leading-relaxed text-lg">
                  Respect and falling in line for all community, environmental
                  and legal requirments.
                </li>
                <li className="text-gray-600 leading-relaxed text-lg">
                  Continuous efforts to improve customer significance and
                  quality.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Image - Sticky */}
          <div className="hidden lg:block">
            <div className="sticky top-5">
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
                    src="/Images/about.gif"
                    alt="JMV Developers Building"
                    fill
                    className="w-full h-auto object-cover"
                    priority
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-br from-orange-200/40 to-blue-200/40 rounded-[3rem] blur-3xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
