
'use client';

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");
    setIsError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setIsError(true);
        setStatus(result.message || "Unable to send your message.");
        return;
      }

      setStatus("Message sent successfully!");
      form.reset();
    } catch {
      setIsError(true);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col gap-8"
      >
        {/* Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-semibold text-white">
            Join with me
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Let’s connect and create something meaningful together.
          </p>
        </div>

        {/* Name + Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col text-left">
            <label htmlFor="contact-name" className="mb-1 text-gray-300">
              Name
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              maxLength={100}
              autoComplete="name"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="contact-email" className="mb-1 text-gray-300">
              Email
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              maxLength={150}
              autoComplete="email"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col text-left">
          <label htmlFor="contact-message" className="mb-1 text-gray-300">
            Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            placeholder="Write your message..."
            maxLength={5000}
            rows={5}
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>

        {/* Status Message */}
        {status && (
          <p
            role="status"
            aria-live="polite"
            className={`text-center ${
              isError ? "text-red-400" : "text-green-400"
            }`}
          >
            {status}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.section>
  );
}
