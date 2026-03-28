// app/about/page.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

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

export default function About() {
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
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="JMV Developers"
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
              Established 2008
            </motion.p>
            <motion.h1 className="text-[15vw] md:text-[10vw] lg:text-[8vw] font-bold text-white tracking-tighter leading-none">
              ABOUT {""} US
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
              JMV Developers established in 2008 is a renowned brand to cater to
              all your Real Estate needs. We assure you the full satisfaction as
              regards to the quality, commitment, service and deal in a wide
              network of properties. We offer top-of-the-line reality services
              and hold a long-range experience in the industry. We develop the
              societies in Residential Plot, Builder Floor Apartment, Farm House
              Services, Villas. We are committed to deliver the expected quality
              in promised time.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/*  VISION SECTION  */}
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
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-200 leading-none tracking-tighter mb-8 select-none"
              >
                VALUES
              </motion.h2>

              <ul className="space-y-6">
                {[
                  "Contributing to building a new India",
                  "Aiming to be India’s most valuable real estate company",
                  "Delivering excellence with sustainable development",
                  "Creating thriving, modern communities",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex gap-4 text-lg text-gray-700 leading-relaxed"
                  >
                    <span className="shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="pt-1">{item}</span>
                  </motion.li>
                ))}
              </ul>
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
                className="relative h-100 md:h-150 w-full overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Values - Quality & Ethics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*  MISSION SECTION  */}
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
                className="relative h-100 md:h-150 w-full overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Mission - Building Excellence"
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
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-100 leading-none tracking-tighter mb-8 select-none"
              >
                MISSION
              </motion.h2>

              <ul className="space-y-6">
                {[
                  "To achieve international standards of excellence with a focus on quality, aesthetics and customer satisfaction.",
                  "To achieve prominence in developing, adopting and assimilating state-of-the-art technology for competitive advantage.",
                  "To cultivating high standards of ethics and quality for a strong corporate identity and brand equity.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex gap-4 text-lg text-gray-700 leading-relaxed"
                  >
                    <span className="shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="pt-1">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION  */}
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
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-200 leading-none tracking-tighter mb-8 select-none"
              >
                VALUES
              </motion.h2>

              <ul className="space-y-6">
                {[
                  "Put customers before ourselves.",
                  "Honorable and expert service.",
                  "Respect and falling in line for all community, environmental and legal requirements.",
                  "Continuous efforts to improve customer significance and quality.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex gap-4 text-lg text-gray-700 leading-relaxed"
                  >
                    <span className="shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="pt-1">{item}</span>
                  </motion.li>
                ))}
              </ul>
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
                className="relative h-100 md:h-150 w-full overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Values - Quality & Ethics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-32 bg-white">
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
              Ready to Build Your Dream?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 leading-relaxed font-light mb-10"
            >
              Experience the JMV Developers difference. From plots to villas, we
              turn your real estate dreams into reality — on time, with quality,
              and with integrity.
            </motion.p>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              Explore Projects <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
