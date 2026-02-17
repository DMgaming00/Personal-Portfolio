"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-neon-blue)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-neon-purple)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-[var(--color-neon-cyan)] font-mono tracking-wider mb-4">
                        HELLO, I AM
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-[var(--color-neon-blue)] to-[var(--color-neon-purple)]">
                        Dev Mulchandani
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 font-light mt-4">
                        AI/ML Engineer <span className="text-[var(--color-neon-blue)]">•</span> Building Intelligent Systems with LLMs & Cloud
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
                >
                    Master’s student at <span className="text-white font-medium">San José State University</span> specializing in scalable AI systems, distributed architectures, and real-world ML deployment.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                >
                    <Link
                        href="#projects"
                        className="group relative px-8 py-3 bg-[rgba(0,243,255,0.1)] border border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] rounded-full font-medium hover:bg-[var(--color-neon-blue)] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] flex items-center gap-2"
                    >
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                        href="/resume.pdf"
                        className="group px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
                    >
                        <Download className="w-4 h-4" />
                        Download Resume
                    </a>

                    <Link
                        href="#contact"
                        className="group px-8 py-3 bg-transparent text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                    >
                        <Mail className="w-4 h-4" />
                        Contact Me
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[var(--color-neon-cyan)] to-transparent animate-pulse"></div>
            </motion.div>
        </section>
    );
}
