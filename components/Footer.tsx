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
      className="fixed bottom-0 left-0 w-full h-screen -z-10 flex flex-col justify-end overflow-hidden"
      style={{
        backgroundImage: 'url("/images/hero/hero4.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay for better text legibility */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        {/* About Us */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold pb-3 inline-block">
            About Us
          </h2>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              JMV Developers
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Established in 2008, JMV Developers is a renowned brand catering
              to all your Real Estate needs. We assure you full satisfaction
              regarding quality, commitment, and service.
            </p>
          </div>
          <div className="flex gap-6 pt-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
              (Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="text-2xl md:text-3xl transition-colors cursor-pointer"
                >
                  <Icon />
                </motion.a>
              ),
            )}
          </div>
        </div>

        {/* Information Links */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold pb-3 inline-block">
            Information
          </h2>
          <ul className="space-y-4 text-gray-300 font-medium text-base md:text-lg">
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

        {/* Contact Details */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold pb-3 inline-block">
            Contact
          </h2>
          <div className="space-y-6 text-gray-300">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1.5 shrink-0 text-2xl" />
              <p className="text-base md:text-lg">
                Office No: 7, 1st floor, Mahalaxmi Square, Indirapuram, Abhay
                Khand-2, Ghaziabad - 201010 (UP)
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="shrink-0 text-2xl" />
              <p className="text-base md:text-lg">info@jmvdevelopers.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="shrink-0 text-2xl" />
              <p className="text-base md:text-lg">+91-8383041206</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-10 border-t border-white/10 py-8 text-center text-gray-400 text-base md:text-lg tracking-widest">
        © {new Date().getFullYear()} JMV DEVELOPERS. ALL RIGHTS RESERVED.
      </div>
    </motion.footer>
  );
};

export default Footer;
