import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full bg-[#f3f1f8] pt-16 pb-12 px-6 lg:px-12 rounded-t-[3rem] lg:rounded-t-[4rem]">
            <div className="mx-auto max-w-7xl">
                {/* Logo Section */}
                <div className="mb-16">
                    <Image
                        src="/assets/payzik-logo.svg"
                        alt="Payzik Logo"
                        width={140}
                        height={40}
                        className="h-9 w-auto opacity-90"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-16">
                    {/* Product Column */}
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Product</h4>
                        <ul className="space-y-4">
                            {['Overview', 'How Payzik Works', 'Core Capabilities', 'Intelligent Routing', 'Payment Observability'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-lg text-gray-500 hover:text-brand-purple transition-colors font-normal">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Developers Column */}
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Developers</h4>
                        <ul className="space-y-4">
                            {["API doc's", 'Get API key'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-lg text-gray-500 hover:text-brand-purple transition-colors font-normal">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Company</h4>
                        <ul className="space-y-4">
                            {['About company'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-lg text-gray-500 hover:text-brand-purple transition-colors font-normal">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section Divider */}
                <div className="h-[1px] w-full bg-gray-200/60 mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4 text-base text-gray-500 font-normal">
                        <Link href="/privacy-policy" className="hover:text-brand-purple transition-colors">Privacy Policy</Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/terms-of-use" className="hover:text-brand-purple transition-colors">Terms of Use</Link>
                    </div>
                    <p className="text-base text-gray-500 font-normal">
                        © 2026 Payzik
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
