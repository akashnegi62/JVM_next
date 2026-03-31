"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";
import {
  PiMapPinLight,
  PiUmbrellaLight,
  PiCityLight,
  PiHouseLineLight,
  PiBuildingsLight,
  PiTreePalmLight,
  PiCubeLight,
  PiChatCircleTextFill,
  PiArrowUpLight,
} from "react-icons/pi";

export default function Project() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  // Parallax setup for the hero section
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-3xl font-serif text-gray-800 tracking-wide">
          Project Not Found
        </h1>
      </div>
    );
  }

  // Map your dynamic project details to the 5 bottom stats
  const stats = [
    { icon: <PiCityLight />, title: "LOCATION", desc: project.location },
    {
      icon: <PiCubeLight />,
      title: "SURFACE AREA",
      desc: project.projectDetails?.surfaceArea || "N/A",
    },
    {
      icon: <PiBuildingsLight />,
      title: "COMPLETED",
      desc: project.projectDetails?.yearCompleted || "N/A",
    },
    {
      icon: <PiHouseLineLight />,
      title: "VALUE",
      desc: `₹ ${project.projectDetails?.value || "N/A"}`,
    },
    {
      icon: <PiTreePalmLight />,
      title: "ARCHITECT",
      desc: project.projectDetails?.architect || "N/A",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-900 overflow-hidden">
      {/* 1. Hero Section (Exact Match to Image Top) */}
      <section
        ref={containerRef}
        className="relative h-[85vh] md:h-screen lg:h-screen w-full overflow-hidden bg-zinc-900"
      >
        {/* Parallax Background */}
        <motion.div
          style={{ y: yPos, opacity }}
          className="absolute inset-0 z-0 origin-top"
        >
          <div
            className="absolute inset-0 bg-cover bg-center h-[120%] w-full"
            style={{ backgroundImage: `url(${project.images[0]})` }}
          />
        </motion.div>

        {/* Dark linear Overlay for text readability at bottom */}
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

        {/* Hero Title Bottom Left */}
        <div className="absolute bottom-16 left-8 md:left-16 z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white text-5xl md:text-7xl font-serif font-light tracking-wide"
          >
            {project.name}
          </motion.h1>
        </div>
      </section>

      {/* 2. Info & Image Split Section (Exact Match to Image Middle) */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pr-0 md:pr-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 leading-[1.15]">
            {project.tagline || "Discover Premium Living and Architecture"}
          </h2>

          <p className="text-gray-500 mb-12 text-sm md:text-base leading-relaxed max-w-lg">
            {project.description}
          </p>

          {/* Two Column Feature Split underneath description */}
          <div className="flex flex-col sm:flex-row gap-8 border-t border-gray-200 pt-8 max-w-lg">
            <div className="flex-1">
              <PiMapPinLight className="text-gray-300 text-4xl mb-4" />
              <h3 className="font-serif text-xl text-gray-800 mb-2">
                Prime Location
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {project.features?.[0] ||
                  "Strategically located for convenience."}
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block w-px bg-gray-200 mt-2"></div>

            <div className="flex-1">
              <PiUmbrellaLight className="text-gray-300 text-4xl mb-4" />
              <h3 className="font-serif text-xl text-gray-800 mb-2">
                Unique Aspect
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {project.features?.[1] ||
                  "Designed with unparalleled luxury in mind."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-112 md:h-137 w-full"
        >
          <Image
            src={project.images[0] || project.images[0]}
            alt={`${project.name} exterior`}
            fill
            className="object-cover shadow-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </section>

      {/* 3. Stats / Features Strip (Exact Match to Image Bottom) */}
      <section className="border-t border-gray-200 bg-white py-12 md:py-16">
        <div className="max-w-360 mx-auto px-4">
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-start divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex-1 w-full lg:w-auto py-8 lg:py-0 px-4 flex flex-col items-center justify-center text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Decorative Diamond on borders (optional, mimics the screenshot's node points) */}
                {i !== 0 && (
                  <div className="hidden lg:block absolute -left-1.25 top-1/2 -translate-y-1/2 w-2 h-2 border border-gray-200 bg-white rotate-45" />
                )}

                <div className="text-teal-600/50 text-[2.5rem] mb-4 stroke-[1px]">
                  {stat.icon}
                </div>
                <h4 className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#0B4C5A] uppercase mb-2">
                  {stat.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-500 font-light max-w-37">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#2A2A2A] text-white p-3.5 rounded-full shadow-lg hover:bg-black transition-colors flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <PiArrowUpLight className="text-xl" />
        </button>
        <button
          className="bg-[#0B4C5A] text-white p-3.5 rounded-full shadow-lg hover:bg-[#083b46] transition-colors flex items-center justify-center"
          aria-label="Chat"
        >
          <PiChatCircleTextFill className="text-xl" />
        </button>
      </div>
    </div>
  );
}
