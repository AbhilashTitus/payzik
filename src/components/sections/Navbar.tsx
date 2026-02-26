'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Navbar = () => {
    const pathname = usePathname();
    const isDocsActive = pathname?.startsWith('/api-docs');

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
    const [isDevelopersOpen, setIsDevelopersOpen] = useState(false);
    const [isMobileDevelopersOpen, setIsMobileDevelopersOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const productLinks = [
        { name: 'What You Get', href: '#' },
        { name: 'Why It Matters', href: '#' },
        { name: 'Core Capabilities', href: '#' },
        { name: 'How It Works', href: '#' },
        { name: 'Benefits', href: '#' },
        { name: 'Trust', href: '#' },
        { name: 'Get Started', href: '#' },
    ];

    const developerLinks = [
        { name: "API Doc's", href: '/api-docs' },
        { name: 'Authentication', href: '#' },
        { name: 'Webhooks', href: '#' },
    ];

    const navLinks = [
        { name: 'Company', href: '#' },
    ];

    return (
        <header>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b-[1.5px] border-gray-100 transition-all duration-300"
            >
                <div className="flex h-20 w-full items-center px-6 lg:px-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 mr-auto cursor-pointer z-50">
                        <Image
                            src="/assets/payzik-logo.svg"
                            alt="Payzik Logo"
                            width={120}
                            height={32}
                            className="h-6 md:h-8 w-auto"
                            style={{ height: 'auto' }}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center gap-10">
                        <div
                            className="relative group py-4"
                            onMouseEnter={() => setIsProductOpen(true)}
                            onMouseLeave={() => setIsProductOpen(false)}
                        >
                            <button className="flex items-center gap-1.5 text-[16px] font-medium text-gray-600 group-hover:text-brand-purple transition-colors">
                                Product
                                <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isProductOpen && "rotate-180")} />
                            </button>

                            {/* Frosty Mega Menu Dropdown */}
                            <div className={cn(
                                "absolute top-full -left-12 w-[480px] bg-white/95 backdrop-blur-3xl rounded-[2.5rem] border border-gray-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] transition-all duration-300 origin-top-left flex overflow-hidden",
                                isProductOpen ? "opacity-100 visible scale-100 translate-y-4" : "opacity-0 invisible scale-95 translate-y-2"
                            )}>
                                {/* Sidebar Part of Dropdown */}
                                <div className="w-[160px] p-8 border-r border-gray-50 flex flex-col justify-start bg-gray-50/30">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-xl font-bold text-brand-purple tracking-tight border-b-2 border-brand-purple pb-1 inline-block w-fit">Payzik</span>
                                    </div>
                                </div>

                                {/* Content Part of Dropdown */}
                                <div className="flex-1 p-8 grid grid-cols-1 gap-y-3">
                                    {productLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-lg font-medium text-gray-700 hover:text-brand-purple hover:translate-x-1 transition-all"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Developers Dropdown */}
                        <div
                            className="relative group py-4"
                            onMouseEnter={() => setIsDevelopersOpen(true)}
                            onMouseLeave={() => setIsDevelopersOpen(false)}
                        >
                            <button className={cn(
                                "flex items-center gap-1.5 text-[16px] font-medium transition-colors group-hover:text-brand-purple cursor-pointer",
                                isDocsActive ? "text-brand-purple" : "text-gray-600"
                            )}>
                                Developers
                                <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isDevelopersOpen && "rotate-180")} />
                            </button>

                            <div className={cn(
                                "absolute top-full -left-12 w-[320px] bg-white/95 backdrop-blur-3xl rounded-[24px] border border-gray-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] transition-all duration-300 origin-top-left flex overflow-hidden",
                                isDevelopersOpen ? "opacity-100 visible scale-100 translate-y-4" : "opacity-0 invisible scale-95 translate-y-2"
                            )}>
                                <div className="flex w-full p-6">
                                    <div className="pr-6 border-r border-[#d4d4d8] flex flex-col justify-start shrink-0">
                                        <span className="text-[18px] font-medium text-brand-purple tracking-tight border-b-2 border-brand-purple pb-1 inline-block w-fit mt-1">API's</span>
                                    </div>
                                    <div className="pl-6 flex flex-col justify-start gap-5 mt-1">
                                        {developerLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className="text-[17px] font-medium text-gray-600 hover:text-brand-purple transition-all"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[16px] font-medium text-gray-600 hover:text-brand-purple transition-colors py-4"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex md:items-center gap-8 pl-8">
                        <Link href="/login" className="text-[16px] font-semibold text-brand-purple hover:text-[#4c16a1] transition-colors">
                            Log in
                        </Link>
                        <Button className="bg-[#5B1BBF] hover:bg-[#4c16a1] text-white rounded-full px-7 py-3 text-[16px] font-medium transition-transform active:scale-95 h-12">
                            Sign up
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden ml-auto p-2 text-gray-600 hover:text-brand-purple z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Drawer Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-gray-900/20 backdrop-blur-sm md:hidden transition-opacity duration-300",
                    isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Drawer Content */}
            <div
                className={cn(
                    "fixed top-0 right-0 z-40 w-full max-w-xs h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden border-l border-gray-100",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full pt-28 px-6 pb-8 overflow-y-auto">
                    <div className="flex flex-col space-y-4">
                        {/* Mobile Product Accordion */}
                        <div className="flex flex-col">
                            <button
                                className="flex items-center justify-between text-2xl font-semibold text-gray-900 hover:text-brand-purple transition-colors border-b border-gray-50 pb-4"
                                onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                            >
                                Product
                                <ChevronDown className={cn("h-6 w-6 transition-transform", isMobileProductOpen && "rotate-180")} />
                            </button>

                            <div className={cn(
                                "flex flex-col gap-4 overflow-hidden transition-all duration-300 pl-4",
                                isMobileProductOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
                            )}>
                                {productLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg text-gray-500 font-medium hover:text-brand-purple"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Developers Accordion */}
                        <div className="flex flex-col">
                            <button
                                className={cn(
                                    "flex items-center justify-between text-2xl font-semibold transition-colors border-b border-gray-50 pb-4",
                                    isDocsActive ? "text-brand-purple" : "text-gray-900 hover:text-brand-purple"
                                )}
                                onClick={() => setIsMobileDevelopersOpen(!isMobileDevelopersOpen)}
                            >
                                Developers
                                <ChevronDown className={cn("h-6 w-6 transition-transform", isMobileDevelopersOpen && "rotate-180")} />
                            </button>

                            <div className={cn(
                                "flex flex-col gap-4 overflow-hidden transition-all duration-300 pl-4",
                                isMobileDevelopersOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
                            )}>
                                {developerLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg text-gray-500 font-medium hover:text-brand-purple"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-semibold text-gray-900 hover:text-brand-purple transition-colors border-b border-gray-50 pb-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-4 pt-10">
                        <Button className="w-full bg-[#5B1BBF] hover:bg-[#4c16a1] text-white rounded-xl py-6 text-lg font-medium shadow-xl shadow-brand-purple/20">
                            Sign up
                        </Button>
                        <Button className="w-full bg-gray-100 hover:bg-gray-200 text-brand-purple rounded-xl py-6 text-lg font-medium border-none">
                            Log in
                        </Button>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-400">© 2026 Payzik Inc.</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
