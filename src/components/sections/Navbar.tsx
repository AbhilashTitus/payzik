'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const navLinks = [
        { name: 'Product', href: '#' },
        { name: 'Developers', href: '#' },
        { name: 'Company', href: '#' },
    ];

    return (
        <header>
            <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b-[1.5px] border-gray-100 transition-all duration-300">
                <div className="mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 mr-auto cursor-pointer z-50">
                        <Image
                            src="/assets/payzik-logo.svg"
                            alt="Payzik Logo"
                            width={120}
                            height={32}
                            className="h-6 md:h-8 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[16px] font-medium text-gray-600 hover:text-brand-purple transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex md:items-center pl-8">
                        <Button className="bg-[#5B1BBF] hover:bg-[#4c16a1] text-white rounded-full px-7 py-5 text-sm font-medium shadow-lg shadow-brand-purple/20 transition-transform active:scale-95">
                            Request Demo
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
            </nav>

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
                <div className="flex flex-col h-full pt-28 px-6 pb-8">
                    <div className="flex flex-col space-y-6">
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

                    <div className="mt-auto flex flex-col gap-4">
                        <Button className="w-full bg-[#5B1BBF] hover:bg-[#4c16a1] text-white rounded-xl py-6 text-lg font-medium shadow-xl shadow-brand-purple/20">
                            Request Demo
                        </Button>
                        <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50 text-gray-900 rounded-xl py-6 text-lg font-medium">
                            Login
                        </Button>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-400">© 2024 Payzik Inc.</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
