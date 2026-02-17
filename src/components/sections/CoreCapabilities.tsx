'use client';

import Image from 'next/image';
import { Wrench, Route, Brain, DraftingCompass } from 'lucide-react';

const capabilities = [
    {
        title: 'Built for Scale and Reliability',
        description: 'Always-on infrastructure with built-in redundancy and failover.',
        icon: Wrench,
    },
    {
        title: 'Intelligent Multi-PA Routing',
        description: 'Smart transaction routing to improve success rates and reduce failures.',
        icon: Route,
    },
    {
        title: 'Payment Intelligence',
        description: 'Clear visibility into transaction outcomes, retries, and performance.',
        icon: Brain,
    },
    {
        title: 'Compliance Architecture',
        description: 'Designed to work with RBI-licensed PAs while operating strictly as a TSP.',
        icon: DraftingCompass,
    },
];

import { motion } from 'framer-motion';

const CoreCapabilities = () => {
    return (
        <section className="bg-white py-24 lg:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">

                    {/* Left Column: Content and Cards */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h2 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-medium tracking-tight text-[#2E0B65] leading-[1.1] mb-6">
                                Core Capabilities
                            </h2>
                            <p className="text-xl text-gray-500 font-normal">
                                Built for Scale and Reliability
                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-4">
                            {capabilities.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="flex items-center gap-6 p-6 lg:p-7 bg-[#F1EDF7] rounded-[1.25rem] transition-all duration-300"
                                >
                                    <div className="flex-none h-12 w-12 flex items-center justify-center text-[#111827]">
                                        <item.icon size={36} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl lg:text-[1.35rem] font-semibold text-[#111827] mb-1 leading-tight tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-base lg:text-lg text-gray-500 font-normal leading-relaxed opacity-80">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Animation with Background */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full mt-12 lg:mt-0 flex flex-col justify-center min-h-[500px] lg:min-h-full"
                    >
                        {/* Background Image Container */}
                        <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
                            <Image
                                src="/assets/prototype background image.png"
                                alt="Background"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* GIF Container - Positioned on Top */}
                        <div className="relative z-10 mx-auto w-full max-w-[320px] lg:max-w-[400px] px-8">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-500/10 transition-transform duration-500 hover:scale-[1.02]">
                                <Image
                                    src="/assets/Animation/UI animation.gif"
                                    alt="Core Capabilities Animation"
                                    width={800}
                                    height={1200}
                                    className="w-full h-auto object-contain block"
                                    unoptimized
                                    style={{ height: 'auto', width: '100%' }}
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CoreCapabilities;
