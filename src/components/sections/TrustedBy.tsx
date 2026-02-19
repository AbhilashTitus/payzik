'use client';

import React from 'react';
import Image from 'next/image';

const trustItems = [
    {
        title: 'College fees',
        description: 'Seamless college fee payments with complete security and instant confirmation.',
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
        description: 'Plan, pay, and travel effortlessly fast bookings with secure payments.',
        image: '/assets/Image/Trust image/Travel.png',
        className: 'col-span-1 row-span-3',
    },
    {
        title: 'Bills',
        description: 'Every bill paid on time with speed, security, and zero hassle.',
        image: '/assets/Image/Trust image/bill.png',
        className: 'col-span-1 row-span-2',
    },
    {
        title: 'OTT',
        description: 'Instant OTT renewals with complete security and zero interruptions.',
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
                        <TrustCard item={trustItems[0]} className="h-[230px] lg:h-[250px]" />
                        <TrustCard item={trustItems[3]} className="h-[310px] lg:h-[350px]" />
                    </motion.div>

                    {/* Middle Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-6 lg:gap-8"
                    >
                        <TrustCard item={trustItems[1]} className="h-[310px] lg:h-[350px]" />
                        <TrustCard item={trustItems[4]} className="h-[230px] lg:h-[250px]" />
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
                            <TrustCard item={trustItems[2]} className="h-full min-h-[564px] lg:min-h-[632px]" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const TrustCard = ({ item, className = '' }: { item: any, className?: string }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`relative group overflow-hidden rounded-[2.5rem] bg-gray-100 ${className}`}
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
                    <p className="text-white/70 text-base lg:text-lg font-normal leading-snug max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2">
                        {item.description}
                    </p>
                )}
            </div>
        </motion.div>
    );
};

export default TrustedBy;
