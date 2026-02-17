'use client';

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <main className="flex min-h-screen flex-col font-sans w-full overflow-x-hidden bg-white">
            <Navbar />

            <div className="pt-32 pb-24 px-6 lg:px-12 mx-auto max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#2E0B65] mb-8">
                        Privacy Policy
                    </h1>


                    <div className="prose prose-lg prose-indigo max-w-none text-gray-600">
                        <p>
                            At Payzik, we value your trust and are committed to protecting your privacy. This Privacy Policy explains how Payzik Inc. ("Payzik", "we", "us", or "our") collects, uses, discloses, and safeguards your information when you assume our Payment Orchestration Platform services.
                        </p>

                        <h3 className="text-[#2E0B65] font-medium mt-8">1. Information We Collect</h3>
                        <p>
                            We collect information that you provide directly to us, such as when you create a merchant account, request a demo, or communicate with our support team. This may include:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Business Information:</strong> Company name, registration details, and business address.</li>
                            <li><strong>Contact Information:</strong> Name, email address, and phone number of account administrators.</li>
                            <li><strong>Technical Data:</strong> IP addresses, browser type, and operating system information collected automatically via cookies and similar technologies.</li>
                            <li><strong>Transaction Data:</strong> We process transaction metadata (amount, currency, status) to provide our routing and orchestration services. <em>Note: We do not store sensitive cardholder data (PAN, CVV) in plain text; all such data is tokenized or handled by PCI-DSS compliant downstream Payment Aggregators.</em></li>
                        </ul>

                        <h3 className="text-[#2E0B65] font-medium mt-8">2. How We Use Your Information</h3>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Provide, maintain, and improve our payment orchestration services.</li>
                            <li>Process and intelligent route transactions to your chosen Payment Aggregators (PAs).</li>
                            <li>Detect and prevent fraud, abuse, and security incidents.</li>
                            <li>Send you technical notices, updates, security alerts, and support messages.</li>
                            <li>Comply with legal and regulatory obligations, including RBI guidelines.</li>
                        </ul>

                        <h3 className="text-[#2E0B65] font-medium mt-8">3. Sharing of Information</h3>
                        <p>
                            We do not sell your personal data. We may share your information in the following circumstances:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>With Service Providers:</strong> We share data with Payment Aggregators, banks, and cloud service providers necessary to complete transactions.</li>
                            <li><strong>For Legal Reasons:</strong> We may disclose info if required by law or to protect the rights and safety of Payzik or others.</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, sale of company assets, or financing.</li>
                        </ul>

                        <h3 className="text-[#2E0B65] font-medium mt-8">4. Data Security</h3>
                        <p>
                            We implement industry-standard security measures, including encryption and strict access controls, to protect your data. However, no method of transmission over the Internet is 100% secure.
                        </p>

                        <h3 className="text-[#2E0B65] font-medium mt-8">5. Your Rights</h3>
                        <p>
                            Depending on your jurisdiction, you may have the right to access, correct, or delete your personal information. To exercise these rights, please contact our privacy team.
                        </p>

                        <h3 className="text-[#2E0B65] font-medium mt-8">6. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                            <br />
                            <a href="mailto:privacy@payzik.com" className="text-brand-purple hover:underline">privacy@payzik.com</a>
                        </p>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
