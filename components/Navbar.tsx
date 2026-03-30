"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

// Project data for dropdown menu
const projects = [
  { name: "JMV Homes Tonk Road", slug: "jmv-homes-tonk-road", icon: FiMapPin },
  { name: "Starx City Bhiwadi", slug: "starx-city-bhiwadi", icon: FiMapPin },
  {
    name: "Shyam Vihar Mahalaxmi Temple",
    slug: "shyam-vihar-mahalaxmi-temple",
    icon: FiMapPin,
  },
  {
    name: "Shyam Vihar Samota Ka Bas, Manda Mor",
    slug: "shyam-vihar-samota-ka-bas",
    icon: FiMapPin,
  },
  { name: "Agriculture", slug: "agriculture", icon: FiMapPin },
  { name: "Harit Homes", slug: "harit-homes-bhiwadi", icon: FiMapPin },
  { name: "Jewer Airport, Noida", slug: "jewer-airport-noida", icon: FiMapPin },
];

// Animation variants
const popupVariants: Variants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const menuItemVariants = {
  closed: { opacity: 0, y: 10 },
  open: { opacity: 1, y: 0 },
};

const dropdownVariants = {
  closed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1 },
};

// Animated Hamburger Icon Component
function AnimatedHamburger({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-6 h-6 flex items-center justify-center">
      <motion.span
        className="absolute h-0.5 w-6 bg-current rounded-full"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -8,
          opacity: isOpen ? 1 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute h-0.5 w-6 bg-current rounded-full"
        animate={{
          opacity: isOpen ? 0 : 1,
          scale: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="absolute h-0.5 w-6 bg-current rounded-full"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 8,
          opacity: isOpen ? 1 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinkClass = `text-base font-medium transition-colors hover:text-amber-600`;
  const scrolledTextColor = isScrolled ? "#374151" : "#ffffff";

  return (
    <>
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
        className="fixed z-40"
        style={{ right: isScrolled ? "auto" : "0" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 flex items-center space-x-3 cursor-pointer"
            >
              <Image
                src="/Images/logo.png"
                alt="JMV Developers"
                width={100}
                height={50}
                className="object-contain"
              />
              <motion.div
                animate={{ color: isScrolled ? "#D97706" : "#ffffff" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                <span className="font-bold text-2xl leading-tight">JVM</span>
                <span className="text-sm font-semibold tracking-wide">
                  DEVELOPERS
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={navLinkClass}
                style={{ color: scrolledTextColor }}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={navLinkClass}
                style={{ color: scrolledTextColor }}
              >
                About
              </Link>

              {/* Projects Dropdown - Desktop */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className="flex items-center space-x-1 transition-colors hover:text-amber-600"
                  style={{ color: scrolledTextColor }}
                >
                  <span className="text-base font-medium">Projects</span>
                  <motion.span
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown className="text-sm" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {projects.map((project, index) => (
                        <motion.div
                          key={project.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={`/projects/${project.slug}`}
                            className="flex items-center space-x-3 px-4 py-3 hover:bg-amber-50 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <project.icon className="text-amber-600 text-sm" />
                            <span className="text-gray-700 font-medium">
                              {project.name}
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/career"
                className={navLinkClass}
                style={{ color: scrolledTextColor }}
              >
                Career
              </Link>
              <Link
                href="/news"
                className={navLinkClass}
                style={{ color: scrolledTextColor }}
              >
                News & Feeds
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link href="/contact">
                <motion.button
                  animate={{
                    backgroundColor: isScrolled ? "#111827" : "#ffffff",
                    color: isScrolled ? "#ffffff" : "#111827",
                    scale: isScrolled ? 0.95 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-2.5 rounded-full transition-colors flex items-center space-x-2 font-medium"
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
              </Link>
            </div>

            {/* Mobile Menu Button with Animated Icon */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
                style={{ color: scrolledTextColor }}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <AnimatedHamburger isOpen={isMobileMenuOpen} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Popup - Top Positioned */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with blur - only background is blurred */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Top Positioned Popup Menu */}
            <motion.div
              variants={popupVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-24 left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Popup Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/Images/logo.png"
                      alt="JMV Developers"
                      width={60}
                      height={30}
                      className="object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold text-base text-amber-600">
                        JVM
                      </span>
                      <span className="text-xs font-semibold text-gray-500">
                        DEVELOPERS
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-800 transition-colors"
                    aria-label="Close menu"
                  >
                    <AnimatedHamburger isOpen={true} />
                  </motion.button>
                </div>

                {/* Menu Items - No blur on menu itself */}
                <div className="p-3 space-y-1 max-h-[70vh] overflow-y-auto">
                  <motion.div variants={menuItemVariants}>
                    <Link
                      href="/"
                      className="block py-3 px-4 text-gray-700 font-medium hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
                    <Link
                      href="/about"
                      className="block py-3 px-4 text-gray-700 font-medium hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                  </motion.div>

                  {/* Projects Accordion - Mobile */}
                  <motion.div variants={menuItemVariants}>
                    <button
                      onClick={() =>
                        setIsMobileProjectsOpen(!isMobileProjectsOpen)
                      }
                      className="w-full flex items-center justify-between py-3 px-4 text-gray-700 font-medium hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors"
                    >
                      <span>Projects</span>
                      <motion.span
                        animate={{ rotate: isMobileProjectsOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown className="text-gray-400" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isMobileProjectsOpen && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          className="overflow-hidden"
                        >
                          <div className="pl-4 space-y-0.5 pb-2">
                            {projects.map((project) => (
                              <Link
                                key={project.name}
                                href={`/projects/${project.slug}`}
                                className="flex items-center space-x-3 py-2.5 px-3 text-gray-600 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors text-sm"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileProjectsOpen(false);
                                }}
                              >
                                <project.icon className="text-amber-600" />
                                <span>{project.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
                    <Link
                      href="/career"
                      className="block py-3 px-4 text-gray-700 font-medium hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Career
                    </Link>
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
                    <Link
                      href="/news"
                      className="block py-3 px-4 text-gray-700 font-medium hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      News & Feeds
                    </Link>
                  </motion.div>

                  {/* Mobile CTA */}
                  <motion.div variants={menuItemVariants} className="pt-2 pb-1">
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
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
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
