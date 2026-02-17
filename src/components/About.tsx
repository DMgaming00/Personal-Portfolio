"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 px-6 bg-[var(--background)]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">
                            <span className="text-[var(--color-neon-cyan)]">01.</span> About Me
                        </h2>

                        <div className="p-8 rounded-2xl bg-[var(--color-glass)] border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(188,19,254,0.1)] transition-all duration-500">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                I am a Master’s student in <strong className="text-white">Software Engineering (Data Science)</strong> at San José State University, passionate about building intelligent systems that bridge the gap between complex ML models and scalable software architectures.
                            </p>

                            <p className="text-gray-300 leading-relaxed mb-4">
                                My technical journey involves architecting <strong className="text-[var(--color-neon-blue)]">distributed C2 servers</strong> handling 100+ nodes using AWS, and developing <strong className="text-[var(--color-neon-purple)]">AI-driven automation systems</strong> with BERT and OpenAI APIs to reduce manual workloads.
                            </p>

                            <p className="text-gray-300 leading-relaxed">
                                I thrive in environments where I can leverage my expertise in <span className="text-white">FastAPI, AWS Lambda, SageMaker, and EC2</span> to deploy robust ML pipelines. My goal is to engineer the future of AI infrastructure.
                            </p>
                        </div>
                    </div>

                    {/* Visual/Tech Stack Decor */}
                    <div className="relative h-full flex justify-center items-center">
                        {/* Abstract grid or image could go here, for now a stylized card stack */}
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] rounded-2xl opacity-20 transform rotate-6 animate-pulse-slow"></div>
                            <div className="absolute inset-0 bg-gradient-to-bl from-[var(--color-neon-cyan)] to-[var(--color-neon-blue)] rounded-2xl opacity-20 transform -rotate-6 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute inset-4 bg-[var(--background)] border border-[var(--color-neon-blue)]/30 rounded-xl flex items-center justify-center backdrop-blur-md">
                                <div className="text-center p-6">
                                    <div className="text-5xl font-mono text-[var(--color-neon-cyan)] font-bold mb-2">100+</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-widest">Nodes Managed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
