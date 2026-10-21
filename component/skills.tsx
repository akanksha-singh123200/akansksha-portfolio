'use client';
import Image from "next/image";
import { motion } from "framer-motion";

const skillsData = [
  { id: 1, icon: "/HTML.png" },
  { id: 2, icon: "/CSS.png" },
  { id: 3, icon: "/tailwindcss.png" },
  { id: 4, icon: "/boostrap.png" },
  { id: 5, icon: "/JavaScript.png" },
  { id: 6, icon: "/nextJS.png" },
  { id: 7, icon: "/python.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:mt-0 md:mt-2 mt-12">

      {/* Top Content */}
      <div className="mx-auto max-w-7xl text-white grid md:grid-cols-2 gap-10 px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-semibold leading-tight">
          My Professional Skills and Accomplishments
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-gray-300 text-lg leading-relaxed">
          I am a passionate Web Developer with a strong focus on creating clean,
          responsive, and user-friendly websites. I combine design thinking with
          practical development skills to build digital experiences that are
          visually appealing and functionally effective.
        </motion.p>
      </div>

      {/* Skills Icons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}


        className="mx-auto max-w-7xl mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 px-6">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center justify-center 
            w-32 h-32 md:w-40 md:h-40 
            bg-white rounded-3xl 
            border border-gray-200 
            transition-all duration-300 
            hover:scale-110 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
          >
            <Image
              src={skill.icon}
              alt="skill icon"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>

    </section>
  );
}