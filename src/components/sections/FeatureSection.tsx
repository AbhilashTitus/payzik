'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/Button';

// Import DotLottie styles
import '@dotlottie/react-player/dist/index.css';
import { PlayerEvents } from '@dotlottie/react-player';

// Dynamically import DotLottiePlayer with no SSR to avoid hydration issues
const DotLottiePlayer = dynamic(
    () => import('@dotlottie/react-player').then((mod) => mod.DotLottiePlayer),
    { ssr: false }
);

const FeatureSection = () => {
    const lottieRef = useRef<any>(null);

    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-12 lg:mb-16">
                    <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#2E0B65]">
                        What You <span className="text-brand-purple">Get</span>
                    </h2>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">

                    {/* Left: Lottie Animation */}
                    <div className="relative isolate overflow-hidden bg-[#F3EBFD] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 flex items-center justify-center aspect-square lg:aspect-[1.1/1]">
                        <div className="w-full h-full max-w-[500px] flex items-center justify-center">
                            <DotLottiePlayer
                                lottieRef={lottieRef}
                                src="/animation_fixed.json"
                                autoplay
                                loop
                                background="transparent"
                                speed={1}
                                style={{ width: '100%', height: '100%' }}
                                onEvent={(event: PlayerEvents) => {
                                    if (event === PlayerEvents.Ready) {
                                        lottieRef.current?.play(0);
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                        <h3 className="text-3xl font-medium tracking-tight text-[#2E0B65] sm:text-4xl lg:text-5xl lg:leading-tight text-left">
                            Operate Payments <br />
                            Seamlessly at Scale
                        </h3>
                        <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-lg">
                            Enable your business to collect payments from customers via cards, UPI, wallets, net-banking and more — all through a single, secure gateway. Built for scale and designed for reliability.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full px-8 py-6 text-base font-medium shadow-xl shadow-brand-purple/20 transition-transform active:scale-95">
                                Request Demo
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FeatureSection;
