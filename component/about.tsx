'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen lg:mt-0 md:mt-2 mt-12 flex items-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">

        {/* Left Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-gray-300 text-lg leading-relaxed text-center md:text-left">
          I am a passionate <span className="text-white font-semibold">Web Developer</span> who loves building clean,
          responsive, and user-friendly websites. I focus on writing well-structured code and creating designs
          that not only look good but also perform smoothly across all devices.
        </motion.p>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center">
          <Image
            src="/About.jpg"
            alt="profile image"
            width={320}
            height={320}
            className="rounded-3xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Right Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-gray-300 text-lg leading-relaxed text-center md:text-left">
          I am detail-oriented, problem-focused, and always eager to learn new technologies.
          My goal is to help businesses and individuals build a strong online presence through
          modern and reliable web solutions.
        </motion.p>

      </div>
    </section>
  );
}