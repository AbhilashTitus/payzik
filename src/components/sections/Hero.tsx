'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ChevronRight, CreditCard, Landmark, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <section className="relative w-full pt-32 lg:pt-40 pb-24 lg:pb-32 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-32">

                    {/* Image Section - First on mobile, Last on desktop */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 relative w-full lg:max-w-[620px] aspect-square lg:aspect-[1.1/1] rounded-[2.5rem] overflow-hidden select-none shadow-2xl shadow-indigo-100 ring-1 ring-gray-100 order-first lg:order-last"
                    >
                        <Image
                            src="/assets/Image/hero image v2.png"
                            alt="Man using phone for payment"
                            fill
                            className="object-contain object-center"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />

                        {/* Floating Glass Card - Top Right Alignment */}
                        {/* <div className="absolute top-6 right-6 bottom-6 w-[280px] sm:w-[320px] bg-black/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-right-8 duration-1000">
                
                            <div className="p-8 pb-4">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-black/5 p-2">
                                        <Image
                                            src="/assets/payzik-logo.svg"
                                            alt="Payzik"
                                            width={32}
                                            height={32}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-300 font-medium opacity-80">Payzik</p>
                                        <p className="text-2xl font-bold text-white tracking-wide">₹4,059.00</p>
                                    </div>
                                </div>

                                <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-4 opacity-70">Select payment method</p>

                                <div className="space-y-0 divide-y divide-white/10">
                                    {[
                                        { name: 'UPI', icon: '/assets/icons/upi.svg' }, // Using placeholders/generic if real ones not found, but I'll stick to icons for now
                                        { name: 'Card', icon: CreditCard },
                                        { name: 'Net banking', icon: Landmark },
                                        { name: 'Wallet', icon: Wallet },
                                    ].map((item, idx) => (
                                        <div key={idx} className="group flex items-center justify-between py-4 first:pt-0 last:pb-0 cursor-pointer">
                                            <div className="flex items-center gap-4 text-white/90">
                                                {typeof item.icon === 'string' ? (
                                                    <div className="w-6 h-4 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white uppercase italic">UPI</div>
                                                ) : (
                                                    <item.icon size={20} className="text-gray-300 opacity-80" />
                                                )}
                                                <span className="text-sm font-medium tracking-tight group-hover:text-white transition-colors">{item.name}</span>
                                            </div>
                                            <ChevronRight size={18} className="text-gray-500 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            
                            <div className="mt-auto p-8 pt-0">
                                <Button className="w-full bg-white hover:bg-white/90 text-[#5B1BBF] font-bold h-14 rounded-2xl text-lg mb-4 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-white/5">
                                    Pay now
                                </Button>
                                <div className="flex items-center justify-center gap-2 opacity-70">
                                    <div className="h-4 w-4 rounded-full bg-white/20 flex items-center justify-center">
                                        <div className="h-2 w-2 bg-white rounded-full animate-pulse" />
                                    </div>
                                    <span className="text-[10px] text-white/80 tracking-wide font-medium">Secured payment by Payzik</span>
                                </div>
                            </div>
                        </div> */}
                    </motion.div>

                    {/* Text Section - Second on mobile, First on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
                        className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-[4rem] font-medium tracking-tight text-[#2E0B65] leading-[1.1]"
                        >
                            Run All <span className="text-brand-purple">Payments</span> <br className="hidden sm:block" />
                            Through a Single <br className="hidden sm:block" />
                            Integration
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal"
                        >
                            A unified payment orchestration layer for digital businesses, manage and optimize payments across multiple RBI-licensed Payment Aggregators through a single integration.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <Button className="h-12 px-8 rounded-full bg-brand-purple hover:bg-brand-purple/90 text-white font-medium text-base shadow-sm transition-transform active:scale-95 w-full sm:w-auto">
                                Request Demo
                            </Button>
                            <Button className="h-12 px-8 rounded-full bg-gray-100 hover:bg-gray-200 text-[#111827] font-bold text-base border-none w-full sm:w-auto">
                                Talk to Sales
                            </Button>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
