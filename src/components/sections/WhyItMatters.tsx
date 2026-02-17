'use client';

import React from 'react';
import { ArrowLeftRight, Split, LineChart, Lock } from 'lucide-react';

const features = [
    {
        name: 'Resilient, always-on transactions',
        icon: ArrowLeftRight,
        description: 'Ensure 99.99% uptime with redundant payment routes and automatic failover mechanisms.',
    },
    {
        name: 'Intelligent routing across multiple PAs',
        icon: Split,
        description: 'Dynamic routing to optimize success rates and costs across all RBI-licensed aggregators.',
    },
    {
        name: 'Visibility into failures and performance',
        icon: LineChart,
        description: 'Deep analytics into every transaction state, providing clarity on successes and failures.',
    },
    {
        name: 'Business continuity without lock-in',
        icon: Lock,
        description: 'Freedom to switch providers instantly with zero downtime or technical debt.',
    },
    {
        name: 'Intelligent routing across multiple PAs',
        icon: Split,
        description: 'Optimize your payment flows with data-driven routing decisions in real-time.',
    },
    {
        name: 'Resilient, always-on transactions',
        icon: ArrowLeftRight,
        description: 'Maintain business continuity even during peak traffic or provider downtimes.',
    },
];

// Duplicate the features to create a seamless loop
const extendedFeatures = [...features, ...features];

import { motion } from 'framer-motion';

const WhyItMatters = () => {
    return (
        <section className="bg-[#F3F1F8] py-24 lg:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 lg:mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl text-left"
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-medium tracking-tight text-[#2E0B65] leading-[1.1] mb-8">
                            Take Control of Your <br className="hidden sm:block" /> Payment Stack
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg font-normal mb-0">
                            Avoid dependency on a single provider and improve transaction success with a payments operating layer that offers:
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:text-right w-full lg:w-auto self-end lg:self-auto"
                    >
                        <h3 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-medium tracking-tighter leading-none">
                            <span className="text-[#2E0B65] opacity-90">Why It </span>
                            <span className="text-brand-purple">Matters</span>
                        </h3>
                    </motion.div>
                </div>
            </div>

            {/* Infinite Marquee Section */}
            <div className="relative flex overflow-hidden group">
                {/* Gradient Fade Overlays - Desktop Only */}
                <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#F3F1F8] to-transparent z-10 pointer-events-none hidden lg:block" />
                <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#F3F1F8] to-transparent z-10 pointer-events-none hidden lg:block" />

                <div className="flex gap-8 animate-marquee whitespace-nowrap py-4 group-hover:pause">
                    {extendedFeatures.map((feature, idx) => (
                        <div
                            key={idx}
                            className="flex-none w-[280px] lg:w-[340px] min-h-[240px] flex flex-col items-center justify-center p-8 bg-white rounded-[2.5rem] border border-white/40 shadow-xl shadow-indigo-500/5 group/card transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 text-center"
                        >
                            <div className="h-16 w-16 mb-4 flex items-center justify-center text-[#2E0B65] group-hover/card:scale-110 transition-transform duration-500">
                                <feature.icon size={40} strokeWidth={1.5} />
                            </div>
                            <div className="whitespace-normal">
                                <h3 className="text-xl lg:text-2xl font-medium text-[#2E0B65] leading-tight group-hover/card:text-brand-purple transition-colors">
                                    {feature.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 1rem)); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .group:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default WhyItMatters;
