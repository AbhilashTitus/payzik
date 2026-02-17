'use client';

import React from 'react';
import { CreditCard, ShoppingBag, Lock, Plus } from 'lucide-react';

const benefits = [
    {
        title: 'Ensure business continuity',
        description: 'payments remain live even if one PA fails',
        icon: (
            <div className="relative">
                <CreditCard size={44} strokeWidth={1} />
                <Plus size={18} className="absolute -bottom-1 -right-1" strokeWidth={3} />
            </div>
        ),
    },
    {
        title: 'Stay compliance-first',
        description: 'No fund handling, no settlement risk',
        icon: <ShoppingBag size={44} strokeWidth={1} />,
    },
    {
        title: 'Operate without lock-in',
        description: 'Switch or add providers without disruption',
        icon: <Lock size={44} strokeWidth={1} />,
    },
];

import { motion } from 'framer-motion';

const Benefits = () => {
    return (
        <section className="relative z-20 w-full py-24 lg:py-32 bg-[#2E0B65] overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">

                {/* Background Immersive Glows */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-purple/15 rounded-full blur-[120px] -mt-64 pointer-events-none opacity-50" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -mb-64 pointer-events-none opacity-50" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 mb-12 lg:mb-32 mx-auto max-w-7xl w-full text-left"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-[6rem] font-normal tracking-tight text-white leading-[1.1] mb-8 lg:mb-12">
                        Benefits for Your Business
                    </h2>
                    <div className="inline-flex items-center gap-4 lg:gap-6 px-6 lg:px-8 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-brand-purple animate-pulse" />
                        <p className="text-base sm:text-lg lg:text-2xl text-white/50 font-normal tracking-tight">
                            For Merchants, Marketplaces & Platforms
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mx-auto max-w-7xl w-full">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="flex flex-col p-8 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] bg-[#240854] border-[3px] border-transparent transition-all duration-300 hover:border-[#B829E3] group"
                        >
                            <div className="mb-8 lg:mb-12 h-32 w-32 lg:h-44 lg:w-44 rounded-full bg-indigo-900/40 flex items-center justify-center text-[#B829E3] transition-transform duration-500 group-hover:scale-105">
                                <div className="scale-[1.2] lg:scale-[1.5]">
                                    {benefit.icon}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-2xl lg:text-[1.65rem] font-normal text-white mb-4 leading-tight tracking-tight">
                                    {benefit.title}
                                </h4>
                                <p className="text-lg text-white/50 font-normal leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
