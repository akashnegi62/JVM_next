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
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("Contact error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO --- */}
      <section className="relative h-screen w-full overflow-hidden bg-zinc-900">
        <Image
          src="/hero1.jpg"
          alt="Luxury Resort"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30 z-10" />

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

      {/* --- FORM SECTION --- */}
      <section className="relative z-30 px-6 md:px-16 lg:px-32 pb-24">
        <motion.div
          {...fadeUp}
          className="max-w-9xl mx-auto bg-[#E9F1F2] -mt-60 p-10 md:p-16 lg:p-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* LEFT */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-serif text-[#1A2B33] leading-tight">
                  A new level of luxury living awaits
                </h2>
                <p className="text-gray-600 text-[15px] max-w-md">
                  Whether you&apos;re exploring luxury property opportunities or
                  seeking expert guidance, our team is here to help.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h3 className="font-bold text-xs uppercase tracking-widest border-b pb-2">
                    Contact
                  </h3>
                  <div className="flex items-center gap-3 text-sm">
                    <HiOutlineMail />
                    <span>info@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <HiOutlinePhone />
                    <span>+91 9999999999</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-xs uppercase tracking-widest border-b pb-2">
                    Address
                  </h3>
                  <div className="flex items-start gap-3 text-sm">
                    <HiOutlineLocationMarker />
                    <p>Delhi, India</p>
                  </div>
                </div>
              </div>

              {/* MAP */}
              <div className="h-44 w-full rounded overflow-hidden border">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8979691686!2d77.0688991!3d28.5272803"
                />
              </div>
            </div>

            {/* RIGHT FORM */}
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="p-4 bg-white"
                  required
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="p-4 bg-white"
                />
              </div>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-4 bg-white w-full"
                required
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                className="p-4 bg-white w-full"
                required
              />

              <button
                disabled={loading}
                className="px-10 py-4 border rounded-full"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-600">
                   Message sent successfully!
                </p>
              )}
            </form>

          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactPage;