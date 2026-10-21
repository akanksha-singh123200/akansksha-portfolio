'use client';
import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`w-full fixed z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-white/30 backdrop-blur-md shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-full mx-auto flex items-center justify-between px-8 py-5">

                    {/* Logo */}
                    <h1 className="text-2xl font-bold text-white tracking-wide">
                        <span className="text-pink-500">*</span>
                        Akanksha
                        <span className="text-pink-500">*</span>
                    </h1>

                    {/* Desktop Navbar */}
                    <nav className="hidden md:flex border p-3 pl-10 bg-white/20 pr-10 rounded-4xl text-white gap-8 text-lg font-medium">
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#experience">Experience</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    {/* Desktop Button */}
                    <button className="hidden md:flex bg-pink-500 items-center gap-2 font-bold text-white px-5 py-2 rounded-lg shadow hover:bg-pink-600 transition">
                        Download CV
                    </button>

                    {/* Mobile Icon */}
                    <button
                        className="md:hidden text-white z-50"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </header>

            {/* 🔥 FULL SCREEN MENU */}
           <div
    className={`fixed top-0 z-20 left-0 w-full h-screen bg-[#0f172a] backdrop-blur-lg flex flex-col items-start justify-start pt-24 px-8 text-white text-2xl font-semibold transition-all duration-500 ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
>
    <div className="flex flex-col gap-3">  {/* 👈 gap control yaha shift karo */}
        <a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a>
        <a href="#experience" onClick={()=>setMenuOpen(false)}>Experience</a>
        <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
    </div>

    <button className="mt-6 bg-pink-500 px-6 py-3 rounded-lg font-bold hover:bg-pink-600 transition">
        Download CV
    </button>
</div>
        </>
    );
}