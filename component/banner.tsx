'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
    return (
        <div className="relative  min-h-screen flex items-center justify-center text-center bg-cover bg-center">



            {/* Content */}
            <div className="relative z-10  text-white">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <Image
                        src="/OIP.jpg"
                        alt="profile image"
                        width={150}
                        height={150}
                        className="mx-auto lg:mt-20 md:mt-0 mt-15  rounded-full object-cover"
                    />

                </motion.div>



                <div className="flex flex-col items-center gap-2">

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Hello.. I'm Akanksha
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-[15px] md:text-2xl lg:px-0 md:px-0 px-5 max-w-2xl leading-relaxed">
                        I’m a web developer who creates enthusiastic, user-friendly websites and engaging layouts
                    </motion.p>

                    <div className="max-w-xl text-gray-300">
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="leading-relaxed lg:px-0 md:px-0 px-5">
                            A passionate web developer who creates enthusiastic and user friendly websites
                            focused on building clean responsive layouts that look great on all devices.
                            Dedicated to turning ideas into interactive and visually appealing web experiences.
                        </motion.p>
                    </div>

                </div>
                {/* Button */}
                <a href="#contact">
                     <motion.button
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mt-8 bg-pink-500 flex items-center gap-2 mx-auto font-bold cursor-pointer text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600 transition">
                    Contact me
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>








                </motion.button>


                </a>
               

            </div>
        </div>
    );
}