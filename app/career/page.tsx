"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaBriefcase,
  FaUsers,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const imageReveal = {
  initial: { scale: 1.1, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function Careers() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for hero parallax
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.05]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white overflow-x-hidden font-sans text-gray-900"
    >
      {/*  HERO SECTION  */}
      <section className="relative h-screen flex items-end">
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="JMV Careers"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
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
              Join Our Team
            </motion.p>
            <motion.h1 className="text-[15vw] md:text-[10vw] lg:text-[8vw] font-bold text-white tracking-tighter leading-none">
              CAREERS
            </motion.h1>
          </motion.div>
        </motion.div>
      </section>

      {/*  INTRO SECTION  */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-relaxed font-light"
            >
              Build your career with JMV Developers. We&apos;re looking for
              passionate, dedicated professionals who share our vision of
              creating India&apos;s most valuable real estate company. Join us
              in shaping the future of living.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/*  JOBS SECTION  */}
      <section className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-200 leading-none tracking-tighter mb-8 select-none flex items-center gap-4"
              >
                <FaBriefcase className="text-5xl md:text-6xl" /> JOBS
              </motion.h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Real Estate Clerk",
                    desc: "Manage documentation, client records, and administrative support for our sales team.",
                  },
                  {
                    title: "Real Estate Manager",
                    desc: "Lead property development projects, coordinate teams, and ensure timely delivery of premium projects.",
                  },
                  {
                    title: "Sales Assistant",
                    desc: "Support client interactions, property presentations, and drive sales growth across residential and commercial segments.",
                  },
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="group p-6 bg-white rounded-2xl border border-gray-100"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {job.desc}
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
                      >
                        <FaArrowRight className="text-sm" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 md:order-2 relative"
            >
              <motion.div
                variants={imageReveal}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative h-100 md:h-150 w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Team Collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <motion.div
                variants={imageReveal}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative h-100 md:h-150 w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
                  alt="Professional Skills"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-100 leading-none tracking-tighter mb-8 select-none flex items-center gap-4"
              >
                <FaUsers className="text-5xl md:text-6xl" /> SKILLS
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: FaChartLine,
                    label: "High Performance",
                    desc: "Drive results with excellence",
                  },
                  {
                    icon: FaLightbulb,
                    label: "Passionate",
                    desc: "Bring energy and enthusiasm",
                  },
                  {
                    icon: FaUsers,
                    label: "Team Work",
                    desc: "Collaborate and grow together",
                  },
                  {
                    icon: FaBriefcase,
                    label: "Dedication",
                    desc: "Commit to long-term success",
                  },
                  {
                    icon: FaChartLine,
                    label: "Energetic",
                    desc: "Stay motivated and proactive",
                  },
                  {
                    icon: FaLightbulb,
                    label: "Problem Solving",
                    desc: "Find creative solutions",
                  },
                  {
                    icon: FaBriefcase,
                    label: "Initiative",
                    desc: "Take ownership and lead",
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <skill.icon className="text-gray-900 text-xl mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {skill.label}
                        </h4>
                        <p className="text-sm text-gray-600">{skill.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Ready to Make an Impact?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-black leading-relaxed font-light mb-10"
            >
              If you &apso; re passionate about real estate and ready to grow
              with India &apso; s most valuable real estate company, we &apso; d
              love to hear from you.
            </motion.p>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              Apply Now <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
