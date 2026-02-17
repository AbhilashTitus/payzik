'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

import { motion } from 'framer-motion';

const GetStarted = () => {
    return (
        <section className="relative w-full pt-4 lg:pt-8 pb-4 lg:pb-8 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 lg:mb-12"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-transparent rounded-full border border-brand-purple/[0.02] mb-4 transition-transform hover:scale-105"
                    >
                        <span className="h-2 w-2 rounded-full bg-brand-purple/10 animate-pulse" />
                        <span className="text-sm font-medium text-brand-purple/25 tracking-wide uppercase">Start Today</span>
                    </motion.div>

                    <h2 className="text-5xl lg:text-[5.5rem] font-medium tracking-tight text-[#2E0B65] leading-[1.1] mb-8 lg:mb-12">
                        Get Started
                    </h2>

                    <p className="text-xl sm:text-2xl text-gray-500 font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
                        Ready to take control of your payment stack? Join hundreds of businesses scaling with Payzik.
                    </p>

                    <Button className="h-16 px-12 rounded-full bg-brand-purple hover:bg-brand-purple/90 text-white font-bold text-lg shadow-2xl shadow-brand-purple/30 transition-all hover:scale-105 active:scale-95">
                        Request Demo
                    </Button>
                </motion.div>

                {/* Dashboard UI Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative w-full max-w-6xl mx-auto"
                >
                    <Image
                        src="/assets/Image/Payzik dashboard ui.png"
                        alt="Payzik Dashboard UI"
                        width={1200}
                        height={675}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </motion.div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[60%] bg-[#F3F1F8]/50 rounded-[100%] blur-[120px] -z-10 translate-y-1/2" />
        </section>
    );
};

export default GetStarted;
