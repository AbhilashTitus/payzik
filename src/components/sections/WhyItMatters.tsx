import { Zap, Shuffle, BarChart3, LockKeyhole } from 'lucide-react';

const features = [
    {
        name: 'Resilient, always-on transactions',
        icon: Zap,
        description: 'Ensure 99.99% uptime with redundant payment routes.',
    },
    {
        name: 'Intelligent routing across multiple PAs',
        icon: Shuffle,
        description: 'Dynamic routing to optimize success rates and costs.',
    },
    {
        name: 'Visibility into failure and performance',
        icon: BarChart3,
        description: 'Real-time analytics to track every transaction.',
    },
    {
        name: 'Business continuity without lock-in',
        icon: LockKeyhole,
        description: 'Switch providers instantly with zero downtime.',
    },
];

const WhyItMatters = () => {
    return (
        <section className="bg-brand-light py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-3">

                    {/* Left Content */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-medium tracking-tight text-brand-purple sm:text-4xl text-left mb-6">
                            Why It Matters
                        </h2>
                        <h3 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#2E0B65] leading-[1.15] mb-6">
                            Take Control of Your <br /> Payment Stack
                        </h3>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Avoid dependency on a single provider and improve transaction success with a payments operating layer that offers true orchestrations capabilities.
                        </p>
                    </div>

                    {/* Right Content - Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md ring-1 ring-gray-200/50">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand-purple">
                                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <dt className="text-lg font-medium leading-7 text-gray-900">
                                    {feature.name}
                                </dt>
                                <dd className="text-base leading-7 text-gray-600">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyItMatters;
