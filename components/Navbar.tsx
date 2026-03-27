"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMapPin,
  FiGlobe,
  FiNavigation,
  FiSun,
  FiCloud,
} from "react-icons/fi";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const cities = [
  { name: "New York", icon: FiMapPin },
  { name: "London", icon: FiGlobe },
  { name: "Tokyo", icon: FiNavigation },
  { name: "Dubai", icon: FiSun },
  { name: "Singapore", icon: FiCloud },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{
        backgroundColor: "rgba(255, 255, 255, 0)",
        backdropFilter: "blur(0px)",
        borderBottomColor: "rgba(0,0,0,0)",
        width: "100%",
        borderRadius: "0px",
        padding: "0px",
      }}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        borderBottomColor: isScrolled ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0)",
        boxShadow: isScrolled
          ? "0 4px 20px rgba(0,0,0,0.1)"
          : "0 0 0 0 rgba(0,0,0,0)",
        width: isScrolled ? "90%" : "100%",
        borderRadius: isScrolled ? "9999px" : "0px",
        top: isScrolled ? "16px" : "0px",
        left: isScrolled ? "50%" : "0px",
        x: isScrolled ? "-50%" : "0px",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed z-50"
      style={{ right: isScrolled ? "auto" : "0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center space-x-3 cursor-pointer">
            <Image src="/Images/logo.png" alt="" width={100} height={50} />
            <motion.div
              animate={{
                color: isScrolled ? "#D97706" : "#ffffff",
              }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              <Link href="/" className="font-bold text-2xl leading-tight">
                JVM
              </Link>
              <span className="text-sm font-semibold tracking-wide">
                DEVELOPERS
              </span>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="transition-colors"
              style={{ color: isScrolled ? "#374151" : "#ffffff" }}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors"
              style={{ color: isScrolled ? "#374151" : "#ffffff" }}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center space-x-1 transition-colors"
                style={{ color: isScrolled ? "#374151" : "#ffffff" }}
              >
                <span>Projects</span>
                <motion.span
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaChevronDown className="text-sm" />
                </motion.span>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  >
                    {cities.map((city, index) => (
                      <motion.a
                        key={city.name}
                        href={`#${city.name.toLowerCase()}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-100 transition-colors"
                      >
                        <city.icon className="text-blue-600 text-lg" />
                        <span className="text-gray-700 font-medium">
                          {city.name}
                        </span>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/career"
              className="transition-colors"
              style={{ color: isScrolled ? "#374151" : "#ffffff" }}
            >
              Carrer
            </Link>
            <Link
              href="/news"
              className="transition-colors"
              style={{ color: isScrolled ? "#374151" : "#ffffff" }}
            >
              News & Feeds
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              animate={{
                backgroundColor: isScrolled ? "#111827" : "#ffffff",
                color: isScrolled ? "#ffffff" : "#111827",
                scale: isScrolled ? 0.95 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="px-6 py-2.5 rounded-full transition-colors flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="transition-colors"
              style={{ color: isScrolled ? "#374151" : "#ffffff" }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
