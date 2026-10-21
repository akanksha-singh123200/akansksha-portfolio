'use client';
import { motion } from "framer-motion";

export default function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("FirstName"),
      email: formData.get("Email"),
      message: formData.get("Message"),
    };

    const res = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);

    alert("Message Sent ✅");
    e.target.reset();
  };

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
          <h2 className="text-3xl font-semibold text-white">Join with me</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Let’s connect and create something meaningful together.
          </p>
        </div>

        {/* Name + Email */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="flex flex-col text-left">
            <label className="mb-1 text-gray-300">Name</label>
            <input
              type="text"
              name="FirstName"
              placeholder="Enter your name"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

        </div>

        {/* Message */}
        <div className="flex flex-col text-left">
          <label className="mb-1 text-gray-300">Message</label>
          <textarea
            name="Message"
            placeholder="Write your message..."
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:ring-2 focus:ring-pink-500"
            required
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-300"
        >
          Send Message
        </button>

      </form>
    </motion.section>
  );
}