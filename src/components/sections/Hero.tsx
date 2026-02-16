import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ChevronRight, CreditCard, Landmark, Wallet } from 'lucide-react';


const Hero = () => {
    return (
        <section className="relative w-full pt-32 lg:pt-40 pb-24 lg:pb-32 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-32">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none">
                        <h1 className="text-[2.75rem] sm:text-5xl lg:text-[4rem] font-medium tracking-tight text-[#2E0B65] leading-[1.1]">
                            Run All <span className="text-brand-purple">Payments</span> <br />
                            Through a Single <br />
                            Integration
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                            A unified payment orchestration layer for digital businesses, manage and optimize payments across multiple RBI-licensed Payment Aggregators through a single integration.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button className="h-12 px-8 rounded-full bg-brand-purple hover:bg-brand-purple/90 text-white font-medium text-base shadow-sm transition-transform active:scale-95 w-full sm:w-auto">
                                Request Demo
                            </Button>
                            <Button className="h-12 px-8 rounded-full bg-gray-100 hover:bg-gray-200 text-[#111827] font-bold text-base border-none w-full sm:w-auto">
                                Talk to Sales
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Image with Overlay */}
                    <div className="flex-1 relative w-full lg:max-w-[620px] aspect-square lg:aspect-[1.1/1] rounded-[2.5rem] overflow-hidden select-none shadow-2xl shadow-indigo-100 ring-1 ring-gray-100">
                        {/* Main Background Image */}
                        <Image
                            src="/assets/Image/Hero%20image.png"
                            alt="Man using phone for payment"
                            fill
                            className="object-cover object-center"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                        {/* Bottom Left Logo */}
                        <div className="absolute bottom-8 left-8 z-10">
                            <span className="text-2xl font-bold tracking-tighter text-white italic opacity-90" style={{ fontFamily: 'var(--font-poppins)' }}>PAYZIK</span>
                        </div>

                        {/* Floating Glass Card - Right Side Overlay */}
                        <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 md:right-12 w-[300px] sm:w-[340px] bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
                            {/* Card Header */}
                            <div className="p-6 pb-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-white shrink-0 overflow-hidden p-1.5">
                                            <Image
                                                src="/assets/payzik-logo.svg"
                                                alt="Payzik"
                                                width={40}
                                                height={40}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-300 font-medium">Payzik</p>
                                            <p className="text-2xl font-bold text-white tracking-wide">₹4,059.00</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-6 text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-2">Select payment method</p>

                                {/* Payment Options List */}
                                <div className="space-y-1">
                                    {[
                                        { name: 'UPI', icon: CreditCard },
                                        { name: 'Card', icon: CreditCard },
                                        { name: 'Net banking', icon: Landmark },
                                        { name: 'Wallet', icon: Wallet },
                                    ].map((item, idx) => (
                                        <div key={idx} className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                                            <div className="flex items-center gap-3 text-white/90">
                                                <item.icon size={18} className="text-gray-300" />
                                                <span className="text-sm font-medium">{item.name}</span>
                                            </div>
                                            <ChevronRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="p-6 pt-2 bg-gradient-to-b from-transparent to-black/20">
                                <Button className="w-full bg-white hover:bg-gray-100 text-[#5B1BBF] font-bold h-12 rounded-xl text-base mb-3 transition-transform active:scale-95">
                                    Pay now
                                </Button>
                                <div className="flex items-center justify-center gap-1.5 opacity-60">
                                    <div className="h-3 w-3 rounded-full bg-gray-400 flex items-center justify-center">
                                        <div className="h-1.5 w-1.5 bg-black rounded-full" />
                                    </div>
                                    <span className="text-[10px] text-white tracking-wide font-medium">Secured payment by Payzik</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
