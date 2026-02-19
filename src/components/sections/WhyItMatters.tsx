'use client';

import React from 'react';
import { ArrowLeftRight, Split, LineChart, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        name: 'Resilient, always-on transactions',
        icon: ArrowLeftRight,
    },
    {
        name: 'Intelligent routing across multiple PAs',
        icon: Split,
    },
    {
        name: 'Visibility into failures and performance',
        icon: LineChart,
    },
    {
        name: 'Business continuity without lock-in',
        icon: Lock,
    },
];

// Duplicate enough times to ensure smooth looping on wide screens
const MARQUEE_SETS = 4; // Increased to 4 sets to ensure ample overflow
const duplicatedFeatures = Array(MARQUEE_SETS).fill(features).flat();

// FIXED PIXEL VALUES - STRICTLY ENFORCED
const CARD_WIDTH = 260; // Reduced further as requested
const CARD_HEIGHT = 200; // Reduced height
const GAP = 32;
const TOTAL_WIDTH = features.length * (CARD_WIDTH + GAP);
const DURATION = 30; // Consistent duration for both rows

const WhyItMatters = () => {
    return (
        <section className="bg-[#F3F1F8] py-16 lg:py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-[45%] relative z-20 pt-4"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-medium tracking-tight text-[#2E0B65] leading-[1.1] mb-6">
                            Take Control of Your <br className="hidden sm:block" /> Payment Stack
                        </h2>
                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg font-normal">
                            Avoid dependency on a single provider and improve transaction success with a payments operating layer that offers:
                        </p>
                    </motion.div>

                    {/* Right Column: Marquees */}
                    <div className="w-full lg:w-[55%] flex flex-col pt-4">

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-right mb-8 pr-4"
                        >
                            <h3 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-medium tracking-tighter leading-none">
                                <span className="text-[#2E0B65] opacity-90">Why It </span>
                                <span className="text-brand-purple">Matters</span>
                            </h3>
                        </motion.div>

                        <div className="relative flex flex-col gap-8 w-full mt-12 lg:mt-48">
                            {/* Gradient Fade Overlays - Re-introduced */}
                            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F3F1F8] to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F3F1F8] to-transparent z-10 pointer-events-none" />

                            {/* Top Row: Moves Right (Reverse) */}
                            {/* Viewport: Masks overflow */}
                            <div className="w-full overflow-hidden flex">
                                {/* Track: Flex container using transform */}
                                <motion.div
                                    className="flex"
                                    initial={{ x: -TOTAL_WIDTH }}
                                    animate={{ x: 0 }}
                                    transition={{
                                        duration: DURATION,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                    style={{
                                        width: "fit-content",
                                        gap: `${GAP}px`
                                    }}
                                >
                                    {duplicatedFeatures.map((feature, idx) => (
                                        <div
                                            key={`top-${idx}`}
                                            className="flex-none bg-white rounded-[22px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center justify-center p-6 text-center transition-transform hover:-translate-y-1 block"
                                            style={{
                                                width: `${CARD_WIDTH}px`,
                                                height: `${CARD_HEIGHT}px`,
                                                flex: `0 0 ${CARD_WIDTH}px` // Strict no-shrink
                                            }}
                                        >
                                            <div className="mb-6 flex items-center justify-center text-[#2E0B65]">
                                                {/* Bold Icon */}
                                                <feature.icon size={44} strokeWidth={2.5} />
                                            </div>
                                            <div className="whitespace-normal px-1 w-full flex items-center justify-center flex-1">
                                                {/* Bold Typography */}
                                                <h3 className="text-lg font-bold text-[#2E0B65] leading-snug">
                                                    {feature.name}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Bottom Row: Moves Left (Normal) */}
                            <div className="w-full overflow-hidden flex">
                                <motion.div
                                    className="flex"
                                    // Start at -TOTAL_WIDTH + offset and move to -2 * TOTAL_WIDTH + offset
                                    // This moves visually LEFT (negative x delta), opposite to top row
                                    initial={{ x: -TOTAL_WIDTH + 584 }}
                                    animate={{ x: -2 * TOTAL_WIDTH + 584 }}
                                    transition={{
                                        duration: DURATION,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                    style={{
                                        width: "fit-content",
                                        gap: `${GAP}px`
                                    }}
                                >
                                    {duplicatedFeatures.map((feature, idx) => (
                                        <div
                                            key={`bottom-${idx}`}
                                            className="flex-none bg-white rounded-[22px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center justify-center p-6 text-center transition-transform hover:-translate-y-1 block"
                                            style={{
                                                width: `${CARD_WIDTH}px`,
                                                height: `${CARD_HEIGHT}px`,
                                                flex: `0 0 ${CARD_WIDTH}px`
                                            }}
                                        >
                                            <div className="mb-6 flex items-center justify-center text-[#2E0B65]">
                                                <feature.icon size={44} strokeWidth={2.5} />
                                            </div>
                                            <div className="whitespace-normal px-1 w-full flex items-center justify-center flex-1">
                                                <h3 className="text-lg font-bold text-[#2E0B65] leading-snug">
                                                    {feature.name}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyItMatters;
