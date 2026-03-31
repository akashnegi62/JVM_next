"use client";

import React from "react";
import Image from "next/image";
import { motion, MotionProps } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* --- 1. Full Height Hero Section --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="hero1.jpg"
          alt="Luxury Resort"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay for White Text Contrast */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* "Contact Us" Overlay - White Text */}
        <div className="absolute inset-0 z-20 flex items-center justify-end px-6 md:px-20 lg:px-40">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-[10rem] font-light text-white font-serif tracking-tight"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* --- 2. Overlapping Form Section --- */}
      <section className="relative z-30 px-6 md:px-16 lg:px-32 pb-24">
        <motion.div
          {...fadeUp}
          className="max-w-9xl mx-auto bg-[#E9F1F2] -mt-60 p-10 md:p-16 lg:p-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column: Heading & Details */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-serif text-[#1A2B33] leading-tight">
                  A new level of luxury living awaits
                </h2>
                <p className="text-gray-600 font-sans leading-relaxed text-[15px] max-w-md">
                  Whether you&apos;re exploring luxury property opportunities in
                  the UAE or seeking strategic citizenship pathways, our team is
                  here to guide you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans">
                <div className="space-y-4">
                  <h3 className="text-[#1A2B33] font-bold text-xs uppercase tracking-widest border-b border-gray-300 pb-2">
                    Contact
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <HiOutlineMail className="text-lg text-[#3A5A63]" />
                    <a
                      href="mailto:info@rangedevelopmentsgroup.com"
                      className="hover:underline"
                    >
                      info@rangedevelopmentsgroup.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <HiOutlinePhone className="text-lg text-[#3A5A63]" />
                    <span>+971 4 325 3447</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-[#1A2B33] font-bold text-xs uppercase tracking-widest border-b border-gray-300 pb-2">
                    Address
                  </h3>
                  <div className="flex items-start gap-3 text-sm text-gray-700">
                    <HiOutlineLocationMarker className="text-xl text-[#3A5A63] shrink-0" />
                    <p>Boulevard Plaza, Tower 2, Office 1104, Dubai, UAE</p>
                  </div>
                </div>
              </div>

              {/* Map UI */}
              <div className="h-44 w-full relative rounded-sm overflow-hidden grayscale border border-white/40">
                <iframe
                  title="map"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785121289133!2d55.2718!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTguNSJF!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                />
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="font-sans space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                    Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Insert your name"
                    className="w-full bg-white p-4 text-sm outline-none focus:ring-1 focus:ring-gray-300 transition-all border-none shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full bg-white p-4 text-sm outline-none focus:ring-1 focus:ring-gray-300 transition-all border-none shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="myemail@email.com"
                  className="w-full bg-white p-4 text-sm outline-none focus:ring-1 focus:ring-gray-300 transition-all border-none shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  Message *
                </label>
                <textarea
                  rows={6}
                  placeholder="Type your message.."
                  className="w-full bg-white p-4 text-sm outline-none focus:ring-1 focus:ring-gray-300 transition-all border-none resize-none shadow-sm"
                />
              </div>

              <div className="flex items-start gap-4 pt-2">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-[#1A2B33] cursor-pointer"
                />
                <p className="text-[10px] text-gray-500 uppercase leading-snug tracking-wider">
                  By submitting this form, you consent to us contacting you
                  regarding your inquiry.
                </p>
              </div>

              <button className="w-full md:w-auto px-16 py-5 border border-[#1A2B33] text-[#1A2B33] rounded-full hover:bg-[#1A2B33] hover:text-white transition-all duration-500 text-[11px] font-bold uppercase tracking-[0.4em]">
                Send Message
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactPage;
