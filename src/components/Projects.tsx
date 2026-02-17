"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    demo?: string;
    color: string;
}

const projects: Project[] = [
    {
        title: "Distributed C2 Server",
        description: "Orchestrated a secure Command & Control server handling 100+ nodes. Implemented with FastAPI and AWS, featuring security hardening and real-time monitoring.",
        tags: ["Python", "FastAPI", "AWS", "Security"],
        github: "https://github.com/DMgaming00",
        color: "var(--color-neon-blue)",
    },
    {
        title: "AI Customer Support Automation",
        description: "Reduced manual resolution time by 60% using BERT and OpenAI APIs. Automated ticket classification and response generation.",
        tags: ["BERT", "OpenAI", "NLP", "Python"],
        github: "https://github.com/DMgaming00",
        color: "var(--color-neon-purple)",
    },
    {
        title: "Auto Data Cleaning Toolkit",
        description: "Developed an automated feature engineering and data cleaning library for rapid ML mode prototyping. Handles missing values, outliers, and encoding.",
        tags: ["Pandas", "Scikit-learn", "Python"],
        github: "https://github.com/DMgaming00",
        color: "var(--color-neon-cyan)",
    },
    {
        title: "Predictive Maintenance System",
        description: "End-to-end ML pipeline for predicting equipment failure. Deployed on AWS SageMaker with 95% accuracy.",
        tags: ["AWS SageMaker", "TensorFlow", "IoT"],
        github: "https://github.com/DMgaming00",
        color: "white",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-[var(--background)]">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-12"
                >
                    <span className="text-[var(--color-neon-blue)]">02.</span> Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[var(--color-neon-blue)]/50 transition-all duration-300 hover:transform hover:-translate-y-2"
                        >
                            {/* Glow Effect */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500"
                                style={{ background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` }}
                            ></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-neon-blue)] transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-[var(--color-neon-cyan)] border border-[var(--color-neon-cyan)]/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
