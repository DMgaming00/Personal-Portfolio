"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Verify integration or add mailto
        window.location.href = `mailto:devchandralal.mulchandani@sjsu.edu?subject=Contact from Portfolio&body=${formState.message}`;
    };

    return (
        <section id="contact" className="py-20 px-6 bg-[var(--background)]">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    <span className="text-[var(--color-neon-blue)]">06.</span> Get In Touch
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I am currently looking for <strong className="text-[var(--color-neon-blue)]">Summer 2026 Internships</strong> in AI/ML Engineering.
                            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                        </p>

                        <div className="flex flex-col gap-4">
                            <a href="mailto:devchandralal.mulchandani@sjsu.edu" className="flex items-center gap-4 text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors group">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-[var(--color-neon-blue)]/10">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span>devchandralal.mulchandani@sjsu.edu</span>
                            </a>
                            <div className="flex items-center gap-4 text-gray-400 group">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-[var(--color-neon-blue)]/10">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span>+1 408 591 1830</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-400 group">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-[var(--color-neon-blue)]/10">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span>San Jose, CA 95126</span>
                            </div>
                            <a href="https://www.linkedin.com/in/dev-mulchandani/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors group">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-[var(--color-neon-blue)]/10">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <span>linkedin.com/in/dev-mulchandani</span>
                            </a>
                            <a href="https://github.com/DMgaming00" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors group">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-[var(--color-neon-blue)]/10">
                                    <Github className="w-5 h-5" />
                                </div>
                                <span>github.com/DMgaming00</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[var(--color-neon-blue)] transition-colors"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[var(--color-neon-blue)] transition-colors"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[var(--color-neon-blue)] transition-colors resize-none"
                                placeholder="Hello! I'd like to discuss..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-[var(--color-neon-blue)] text-black font-bold rounded-lg hover:bg-[var(--color-neon-cyan)] transition-colors flex justify-center items-center gap-2"
                        >
                            Send Message
                            <Send className="w-4 h-4" />
                        </button>
                    </motion.form>
                </div>

                <footer className="mt-20 text-center text-gray-500 text-sm">
                    <p>© 2026 Dev Mulchandani. All rights reserved.</p>
                    <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion.</p>
                </footer>
            </div>
        </section>
    );
}
