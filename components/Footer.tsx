"use client";

import React from "react";
import { motion } from "framer-motion";
// Importing React Icons (Font Awesome set)
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-0 left-0 w-full min-h-screen -z-10 flex flex-col justify-end overflow-hidden"
      style={{
        backgroundImage: 'url("/images/hero/hero4.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay for better text legibility */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 text-white">
        {/* Grid Layout - 2 columns on mobile/tablet, 3 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mb-12">
          {/* About Us */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold pb-2 md:pb-3">
              About Us
            </h2>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-white">
                JMV Developers
              </h3>
              <p className="text-gray-300 leading-relaxed text-xs md:text-base lg:text-lg">
                Established in 2008, JMV Developers is a renowned brand catering
                to all your Real Estate needs. We assure you full satisfaction
                regarding quality, commitment, and service.
              </p>
            </div>
            <div className="flex gap-3 md:gap-6 pt-2 md:pt-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -5 }}
                    className="text-lg md:text-2xl lg:text-3xl transition-colors cursor-pointer"
                  >
                    <Icon />
                  </motion.a>
                ),
              )}
            </div>
          </div>

          {/* Information Links */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold pb-2 md:pb-3">
              Information
            </h2>
            <ul className="space-y-2 md:space-y-4 text-gray-300 font-medium text-xs md:text-base lg:text-lg">
              {[
                "Home",
                "About",
                "Locations",
                "Brochure",
                "Application Form",
                "Careers",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 8, color: "#fff" }}
                    className="hover:text-white transition-colors block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section - Full width on mobile/tablet, auto on desktop */}
          <div className="col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold pb-2 md:pb-3 text-left">
              Contact
            </h2>
            <div className="space-y-3 md:space-y-6 text-gray-300 text-xs md:text-base lg:text-lg">
              <div className="flex items-start gap-2 md:gap-4">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-lg md:text-2xl" />
                <p>
                  Office No: 7, 1st floor, Mahalaxmi Square, Indirapuram, Abhay
                  Khand-2, Ghaziabad - 201010 (UP)
                </p>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <FaEnvelope className="shrink-0 text-lg md:text-2xl" />
                <p>info@jmvdevelopers.com</p>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <FaPhoneAlt className="shrink-0 text-lg md:text-2xl" />
                <p>+91-8383041206</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm lg:text-base tracking-widest">
          © {new Date().getFullYear()} JMV DEVELOPERS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
