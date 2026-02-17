'use client';

import React from 'react';
import Image from 'next/image';

const trustItems = [
    {
        title: 'College fees',
        image: '/assets/Image/Trust image/fees.png',
        className: 'col-span-1 row-span-1',
    },
    {
        title: 'E commerce',
        description: 'Every checkout completed with speed, security, and reliability.',
        image: '/assets/Image/Trust image/Shopping e commeance.png',
        className: 'col-span-1 row-span-2',
    },
    {
        title: 'Travel',
        image: '/assets/Image/Trust image/Travel.png',
        className: 'col-span-1 row-span-3',
    },
    {
        title: 'Bills',
        image: '/assets/Image/Trust image/bill.png',
        className: 'col-span-1 row-span-2',
    },
    {
        title: 'OTT',
        image: '/assets/Image/Trust image/OTT.png',
        className: 'col-span-1 row-span-1',
    },
];

import { motion } from 'framer-motion';

const TrustedBy = () => {
    return (
        <section className="relative z-30 w-full pt-24 lg:pt-32 pb-0 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-7xl w-full text-left mb-16 lg:mb-24"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-normal tracking-tight text-[#2E0B65] leading-[1.1] mb-8">
                        Trusted by Businesses <br className="hidden sm:block" /> That Scale
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 font-normal max-w-2xl leading-relaxed">
                        Built for high-growth and enterprise businesses that require reliability, control, and regulatory clarity.
                    </p>
                </motion.div>

                {/* Masonry-like Grid Layout */}
                <div className="mx-auto max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="flex flex-col gap-6 lg:gap-8"
                    >
                        <TrustCard item={trustItems[0]} />
                        <TrustCard item={trustItems[3]} />
                    </motion.div>

                    {/* Middle Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-6 lg:gap-8"
                    >
                        <TrustCard item={trustItems[1]} />
                        <TrustCard item={trustItems[4]} />
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col gap-6 lg:gap-8 min-h-full"
                    >
                        <div className="flex-1">
                            <TrustCard item={trustItems[2]} isFullHeight />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const TrustCard = ({ item, isFullHeight = false }: { item: any, isFullHeight?: boolean }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`relative group overflow-hidden rounded-[2.5rem] bg-gray-100 ${isFullHeight ? 'h-full min-h-[400px]' : 'min-h-[280px]'}`}
        >
            <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-10">
                <h3 className="text-white text-2xl lg:text-3xl font-medium mb-2">
                    {item.title}
                </h3>
                {item.description && (
                    <p className="text-white/70 text-base lg:text-lg font-normal leading-snug">
                        {item.description}
                    </p>
                )}
            </div>
        </motion.div>
    );
};

export default TrustedBy;
