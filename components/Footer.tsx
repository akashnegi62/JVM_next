"use client";

import { motion } from "framer-motion";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiChevronRight,
} from "react-icons/fi";

const footerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.48, 0.15, 0.25, 0.96] as const,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
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

const socialIcons = [
  { icon: FiFacebook, href: "#", color: "hover:text-blue-600" },
  { icon: FiTwitter, href: "#", color: "hover:text-sky-500" },
  { icon: FiInstagram, href: "#", color: "hover:text-pink-600" },
  { icon: FiLinkedin, href: "#", color: "hover:text-blue-700" },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Locations", href: "#locations" },
  { name: "Broucher", href: "#broucher" },
  { name: "Application Form", href: "#application" },
];

const informations = [
  { name: "Contact", href: "#contact" },
  { name: "Careers", href: "#careers" },
];

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
      className="bg-white border-t border-gray-200"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Us Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase tracking-wide">
              About Us
            </h3>
            <div className="w-12 h-0.5 bg-linear-to-r from-orange-500 to-red-500 mb-6" />

            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              JMV Developers
            </h4>

            <p className="text-gray-600 leading-relaxed text-sm">
              JMV Developers established in 2008 is a renowned brand to cater to
              all your Real Estate needs. We assure you the full satisfaction as
              regards to the quality, commitment, service and deal in a wide
              network of properties.
            </p>
          </motion.div>

          {/* Contacts Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase tracking-wide">
              Contacts
            </h3>
            <div className="w-12 h-0.5 bg-linear-to-r from-orange-500 to-red-500 mb-6" />

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-orange-600 mt-1 shrink-0" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Office No: 7, Ist floor, Mahalaxmi Square, Indirapuram
                  <br />
                  Abhay Khand-2, Ghaziabad -201010 (Uttar Pradesh)
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-orange-600 shrink-0" />
                <a
                  href="mailto:info@jmvdevelopers.com"
                  className="text-gray-600 text-sm hover:text-orange-600 transition-colors"
                >
                  info@jmvdevelopers.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-orange-600 shrink-0" />
                <a
                  href="tel:+918383041206"
                  className="text-gray-600 text-sm hover:text-orange-600 transition-colors"
                >
                  +91-8383041206
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mt-6 pt-6">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 ${social.color} transition-colors`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Informations Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase tracking-wide">
              Informations
            </h3>
            <div className="w-12 h-0.5 bg-linear-to-r from-orange-500 to-red-500 mb-6" />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-600 text-sm hover:text-orange-600 transition-colors group"
                  >
                    <FiChevronRight className="w-4 h-4 mr-2 text-gray-400 group-hover:text-orange-600 transition-colors" />
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="space-y-3">
                {informations.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-600 text-sm hover:text-orange-600 transition-colors group"
                  >
                    <FiChevronRight className="w-4 h-4 mr-2 text-gray-400 group-hover:text-orange-600 transition-colors" />
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright Section */}
      <motion.div
        variants={itemVariants}
        className="border-t border-gray-200 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            JMV Developers | All Right Reserved | Developed by{" "}
            <a
              href="https://webviron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              Peltown
            </a>
          </p>
        </div>
      </motion.div>
    </motion.footer>
  );
}
