"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Clock } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-20 px-6 bg-[var(--background)]">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-16"
                >
                    <span className="text-[var(--color-neon-cyan)]">05.</span> Education
                </motion.h2>

                <div className="space-y-12">
                    {/* SJSU */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[var(--color-neon-blue)]/30 transition-all duration-300 group"
                    >
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[var(--color-neon-blue)] to-transparent opacity-50 rounded-l-2xl"></div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-neon-blue)] transition-colors">San José State University</h3>
                                <div className="text-[var(--color-neon-cyan)] font-medium text-lg mt-1">Master of Science in Software Engineering</div>
                            </div>
                            <div className="text-gray-400 flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm">
                                <Calendar className="w-4 h-4" />
                                August 2025 – May 2027
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <GraduationCap className="w-4 h-4" /> Activities & Societies
                                </h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Spartan Eats Student Ambassador and active member of the AI/ML Club, contributing to campus engagement and technical learning initiatives.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" /> Coursework
                                </h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-[var(--color-neon-blue)] text-sm mb-2 font-mono">Fall 2025</div>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li className="flex gap-2"><span className="text-[var(--color-neon-blue)]">▹</span> CMPE 255 – Data Mining</li>
                                            <li className="flex gap-2"><span className="text-[var(--color-neon-blue)]">▹</span> CMPE 256 – Recommender Systems</li>
                                            <li className="flex gap-2"><span className="text-[var(--color-neon-blue)]">▹</span> CMPE 272 – Enterprise Software Platforms</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="text-[var(--color-neon-blue)] text-sm mb-2 font-mono">Spring 2026</div>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li className="flex gap-2"><span className="text-[var(--color-neon-blue)]">▹</span> CMPE 202 – Software Systems Engineering</li>
                                            <li className="flex gap-2"><span className="text-[var(--color-neon-blue)]">▹</span> CMPE 257 – Machine Learning</li>
                                            <li className="flex gap-2"><span className="text-[var(--color-neon-blue)]">▹</span> CMPE 258 – Deep Learning</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Raisoni */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[var(--color-neon-purple)]/30 transition-all duration-300 group"
                    >
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[var(--color-neon-purple)] to-transparent opacity-50 rounded-l-2xl"></div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-neon-purple)] transition-colors">G.H. Raisoni College of Engineering, Nagpur</h3>
                                <div className="text-[var(--color-neon-purple)] font-medium text-lg mt-1">Bachelor of Technology, Information Technology</div>
                            </div>
                            <div className="flex flex-col md:items-end gap-2">
                                <div className="text-gray-400 flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm">
                                    <Calendar className="w-4 h-4" />
                                    September 2021 – May 2025
                                </div>
                                <div className="text-gray-300 text-sm font-mono">GPA: 3.8</div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <GraduationCap className="w-4 h-4" /> Activities & Societies
                                </h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Valorant E-Sports
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" /> Coursework
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Object Oriented Programming", "Design & Analysis of Algorithms", "Data Structures",
                                        "Database Management Systems", "Computer Architecture & Organisation", "Operating Systems",
                                        "Software Engineering", "Data Preprocessing", "Machine Learning",
                                        "Computer Networking", "Cybersecurity"
                                    ].map((course, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5 hover:border-[var(--color-neon-purple)]/50 transition-colors">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
