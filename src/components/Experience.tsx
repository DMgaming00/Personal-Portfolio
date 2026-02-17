"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "AI/ML Engineer Intern",
        company: "Distributed C2 Server Project",
        period: "July 2024 – December 2024",
        description: "Architected a distributed Command & Control server handling 100+ nodes.",
        achievements: [
            "Designed secure communication protocols reducing unauthorized access risk by 50%",
            "Implemented real-time health monitoring with AWS CloudWatch",
            "Optimized payload delivery latency by 40%"
        ],
        color: "var(--color-neon-blue)"
    },
    {
        role: "AI/ML Engineer Intern",
        company: "AI Customer Support Automation",
        period: "March 2024 – June 2024",
        description: "Built an AI-driven support system to automate ticket resolution.",
        achievements: [
            "Resolved 60% of common support tickets automatically using BERT classifier",
            "Inegrated OpenAI API for natural language response generation",
            "Deployed solution on AWS Lambda achieving 99.9% uptime"
        ],
        color: "var(--color-neon-purple)"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 bg-[var(--background)]">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-16"
                >
                    <span className="text-[var(--color-neon-cyan)]">04.</span> Experience
                </motion.h2>

                <div className="relative space-y-12">
                    {/* Timeline Line */}
                    <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[var(--color-neon-blue)] via-[var(--color-neon-purple)] to-transparent opacity-30 md:left-1/2 md:-translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 border-[var(--background)] z-10 -translate-x-1/2 bg-current shadow-[0_0_10px_currentColor]" style={{ color: exp.color, top: '1.5rem' }}></div>

                            {/* Content */}
                            <div className="ml-12 md:ml-0 md:w-1/2 p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[var(--color-neon-blue)]/30 transition-all duration-300">
                                <div className="flex flex-col gap-2 mb-4">
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <div className="text-[var(--color-neon-blue)] font-medium flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" />
                                        {exp.company}
                                    </div>
                                    <div className="text-sm text-gray-500 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-4">{exp.description}</p>

                                <ul className="space-y-2">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-gray-300">
                                            <span style={{ color: exp.color }}>▹</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Empty Space for alignment */}
                            <div className="hidden md:block md:w-1/2"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
