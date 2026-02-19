'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

const HowItWorks = () => {
    return (
        <section className="relative z-10 w-full bg-[#F9F9FB] py-24 lg:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">



                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Animation & Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full flex flex-col items-center justify-center"
                    >
                        <div className="w-full max-w-[500px]">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mb-8 lg:mb-12 text-left"
                            >
                                <h2 className="text-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] font-medium tracking-tighter leading-none">
                                    <span className="text-[#2E0B65]">How It </span>
                                    <span className="text-brand-purple">Works</span>
                                </h2>
                            </motion.div>
                            <div className="relative w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-500/10 border-4 border-white bg-white">
                                <Image
                                    src="/assets/Animation/wallet animation.gif"
                                    alt="Wallet Animation"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-contain block"
                                    unoptimized
                                    style={{ height: 'auto', width: '100%' }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col max-w-xl"
                    >
                        <h3 className="text-3xl lg:text-[3.5rem] font-medium text-[#2E0B65] leading-[1.1] mb-8 lg:mb-10 tracking-tight">
                            One Integration. <br className="hidden sm:block" /> Multiple Payment <br className="hidden sm:block" /> Aggregators.
                        </h3>

                        <div className="space-y-4 lg:space-y-6 text-base lg:text-xl text-gray-600 font-normal leading-relaxed">
                            <p>
                                Integrate once with Payzik to connect with multiple RBI-licensed Payment Aggregators.
                            </p>
                            <p>
                                Payzik orchestrates routing, resilience, and observability while regulated activities remain with the PAs.
                            </p>
                        </div>

                        <div className="mt-8 lg:mt-12">
                            <button className="px-8 lg:px-10 py-4 lg:py-5 bg-brand-purple text-white text-base lg:text-lg font-medium rounded-full hover:bg-brand-purple/90 transition-all duration-300 shadow-lg shadow-brand-purple/20 hover:scale-105 active:scale-95">
                                Request Demo
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
