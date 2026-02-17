"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-[rgba(5,5,5,0.8)] backdrop-blur-md border-b border-white/5" : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    <span className="text-white">Dev</span>
                    <span className="text-[var(--color-neon-blue)]">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-[var(--color-neon-cyan)] transition-colors relative group"
                        >
                            <span className="text-[var(--color-neon-blue)] mr-1 group-hover:mr-2 transition-all duration-300 text-xs font-mono">0{index + 1}.</span>
                            {link.name}
                        </Link>
                    ))}

                    <a
                        href="/Resume.pdf"
                        className="px-4 py-2 text-sm border border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] rounded hover:bg-[var(--color-neon-blue)]/10 transition-colors"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button - Simplified for now */}
                <div className="md:hidden">
                    {/* Can add hamburger menu here later */}
                </div>
            </nav>
        </motion.header>
    );
}
