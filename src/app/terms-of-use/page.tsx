'use client';

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";

export default function TermsOfUse() {
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
                        Terms of Use
                    </h1>


                    <div className="prose prose-lg prose-indigo max-w-none text-gray-600">
                        <p>
                            These Terms of Use ("Terms") govern your access to and use of Payzik Inc. ("Payzik", "we", "us", or "our") Payment Orchestration Platform and related services. By accessing or using our services, you agree to be bound by these Terms.
                        </p>

                        <h3 className="text-[#2E0B65] font-medium mt-8">1. Acceptance of Terms</h3>
                        <p>
                            By registering for or using Payzik, you represent that you are authorized to bind the legal entity (such as your company) on whose behalf you are entering into these Terms.
                        </p>

                        <h3 className="text-[#2E0B65] font-medium mt-8">2. Nature of Service</h3>
                        <p>
                            Payzik is a Technical Service Provider (TSP) that orchestrates payment transactions by routing them to third-party Payment Aggregators (PAs) and gateways.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>We are NOT a bank or a Payment Aggregator.</strong> We do not settle funds or hold user balances.</li>
                            <li><strong>We are NOT liable for settlement delays.</strong> Settlements are processed directly by your chosen PAs.</li>
                            <li><strong>We act as a routing layer.</strong> Transactions are subject to the terms and conditions of the respective PAs involved.</li>
                        </ul>

                        <h3 className="text-[#2E0B65] font-medium mt-8">3. User Accounts</h3>
                        <p>
                            You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. Payzik reserves the right to suspend or terminate accounts that violate these Terms.
                        </p>

                        <h3 className="text-[#2E0B65] font-medium mt-8">4. Prohibited Activities</h3>
                        <p>
                            You agree not to use Payzik for:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Any illegal or unauthorized purpose.</li>
                            <li>Processing payments for restricted goods or services as defined by applicable laws and PA policies.</li>
                            <li>Interfering with or disrupting the integrity or performance of the Service.</li>
                            <li>Reverse engineering or attempting to discover the source code of the Service.</li>
                        </ul>

                        <h3 className="text-[#2E0B65] font-medium mt-8">5. Intellectual Property</h3>
                        <p>
                            Payzik and its licensors own all rights, title, and interest in the Service, including all intellectual property rights. You are granted a limited, non-exclusive, non-transferable license to meaningful use the Service in accordance with these Terms.
                        </p>

                        <h3 className="text-[#2E0B65] font-medium mt-8">6. Limitation of Liability</h3>
                        <p>
                            To the maximum extent permitted by law, Payzik shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with these Terms or your use of the Service.
                        </p>

                        <h3 className="text-[#2E0B65] font-medium mt-8">7. Governing Law</h3>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Bengaluru, Karnataka.
                        </p>

                        <h3 className="text-[#2E0B65] font-medium mt-8">8. Changes to Terms</h3>
                        <p>
                            We may modify these Terms at any time. We will post the revised Terms on this page and update the "Last Updated" date. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
                        </p>

                        <h3 className="text-[#2E0B65] font-medium mt-8">9. Contact Information</h3>
                        <p>
                            For questions about these Terms, please contact us at:
                            <br />
                            <a href="mailto:legal@payzik.com" className="text-brand-purple hover:underline">legal@payzik.com</a>
                        </p>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
