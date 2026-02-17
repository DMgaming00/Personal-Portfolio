"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "AI / ML",
        skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "LangChain", "RAG Systems", "OpenAI API", "HuggingFace"],
        color: "var(--color-neon-blue)",
    },
    {
        title: "Backend Engineering",
        skills: ["FastAPI", "Node.js", "Python", "REST APIs", "Microservices", "GraphQL", "PostgreSQL"],
        color: "var(--color-neon-purple)",
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS EC2", "AWS Lambda", "SageMaker", "Docker", "Kubernetes", "CI/CD", "Terraform"],
        color: "var(--color-neon-cyan)",
    },
    {
        title: "Data Engineering",
        skills: ["Pandas", "NumPy", "SQL", "Spark", "Airflow", "ETL Pipelines", "SHAP"],
        color: "white",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 bg-[var(--background)] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--color-neon-blue)] rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse-slow"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-16 text-right"
                >
                    <span className="text-[var(--color-neon-purple)]">03.</span> Technical Arsenal
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: category.color }}>
                                <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--color-neon-blue)] hover:bg-[var(--color-neon-blue)]/10 transition-all duration-300 cursor-default"
                                    >
                                        <span className="text-sm text-gray-300 hover:text-white">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
