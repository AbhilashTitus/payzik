import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <Image
                        src="/assets/payzik-logo.svg"
                        alt="Payzik Logo"
                        width={120}
                        height={32}
                        className="h-8 w-auto mb-2"
                    />
                    <p className="text-sm text-gray-500 mt-2">© 2024 Payzik Inc. All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</Link>
                    <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</Link>
                    <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
