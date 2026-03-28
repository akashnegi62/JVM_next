// app/contact/page.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUser,
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

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll progress for hero parallax
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.05]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);

    // Show success message (you can add a toast notification here)
    alert("Thank you! We'll get back to you soon.");
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white overflow-x-hidden font-sans text-gray-900"
    >
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-end">
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="JMV Contact"
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
              Get In Touch
            </motion.p>
            <motion.h1 className="text-[15vw] md:text-[10vw] lg:text-[8vw] font-bold text-white tracking-tighter leading-none">
              CONTACT {""} US
            </motion.h1>
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO SECTION */}
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
              Have a question or ready to start your real estate journey? Reach
              out to our team. We &apos; re here to help you find the perfect
              property and guide you through every step.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Contact Form */}
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
                Form
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors text-gray-900 placeholder-gray-400"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors text-gray-900 placeholder-gray-400"
                  />
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors text-gray-900 placeholder-gray-400"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full pl-4 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-colors text-gray-900 placeholder-gray-400 resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-10 py-4 bg-gray-900 text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  <FaArrowRight />
                </motion.button>
              </form>
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
                className="relative h-100 mdh-150 w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"
                  alt="Contact Us"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS SECTION */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
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
                className="relative h-100 mdh-150 w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="JMV Developers Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Right: Contact Details */}
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
                IN TOUCH
              </motion.h2>

              <div className="space-y-8">
                {/* Address Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">
                        Address
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Office No: 7, Ist floor, Mahalaxmi Square,
                        <br />
                        Indirapuram Abhay Khand-2,
                        <br />
                        Ghaziabad - 201010 (Uttar Pradesh)
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Phone Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaPhone className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">
                        Phone No.
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        <a
                          href="tel:+918383041206"
                          className="hover:text-gray-900 transition-colors"
                        >
                          +91-8383041206 , +91-8630350119
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Email Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaEnvelope className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">
                        Email ID
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        <a
                          href="mailto:info@jmvdevelopers.com"
                          className="hover:text-gray-900 transition-colors"
                        >
                          info@jmvdevelopers.com
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP SECTION (Optional) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us Here
            </h3>
            <p className="text-gray-600">
              Visit our office in Ghaziabad, Uttar Pradesh
            </p>
          </motion.div>

          {/* Map Placeholder - Replace with actual Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-100 md:h-150 rounded-2xl overflow-hidden bg-gray-200"
          >
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
              alt="Map Location"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6 bg-white/90 rounded-xl shadow-lg">
                <FaMapMarkerAlt className="text-4xl text-red-500 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">
                  JMV Developers Office
                </p>
                <p className="text-sm text-gray-600">Indirapuram, Ghaziabad</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
