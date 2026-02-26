'use client';

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, Copy, ShieldAlert } from "lucide-react";

export default function ApiDocs() {
    const [activeSection, setActiveSection] = useState("Overview");

    const sidebarLinks = [
        "Overview",
        "Authentication",
        "Create Payment",
        "Retrieve Payment",
        "Refund Payment",
        "Webhooks",
        "Error Handling",
    ];

    const CodeBlock = ({ title, code, language = "json" }: { title?: string, code: string, language?: string }) => (
        <div className="w-full bg-[#1a1333] rounded-2xl overflow-hidden mb-8 shadow-xl">
            {title && (
                <div className="px-6 py-3 border-b border-white/5 bg-white/5 flex items-center justify-between">
                    <span className="text-[13px] font-bold text-gray-400 uppercase tracking-widest">{title}</span>
                    <button className="text-gray-400 hover:text-white transition-colors">
                        <Copy className="h-4 w-4" />
                    </button>
                </div>
            )}
            <div className="p-6 overflow-x-auto">
                <pre className="text-[14px] leading-relaxed font-mono text-purple-200">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );

    const EndpointBadge = ({ method, path }: { method: string, path: string }) => {
        const colors: Record<string, string> = {
            POST: "bg-[#2e0b65] text-white",
            GET: "bg-[#e6d8fa] text-[#2e0b65]",
        };
        return (
            <div className="flex items-center gap-3 mb-8">
                <span className={`px-3 py-1 rounded-md text-[13px] font-bold uppercase ${colors[method] || "bg-gray-100"}`}>
                    {method}
                </span>
                <span className="text-[16px] font-mono font-medium text-gray-600">{path}</span>
            </div>
        );
    };

    const renderContent = () => {
        switch (activeSection) {
            case "Overview":
                return (
                    <>
                        <h1 className="text-[36px] font-bold text-gray-900 mb-8 tracking-tight">Overview</h1>
                        <p className="text-[17px] text-gray-600 leading-relaxed mb-6 font-medium">
                            Payzik is a payment orchestration layer that allows merchants to:
                        </p>
                        <ul className="list-disc text-[16px] text-gray-500 space-y-3 mb-[72px] pl-6 marker:text-gray-400 font-medium tracking-tight">
                            <li className="pl-2">Create and manage payments.</li>
                            <li className="pl-2">Route transactions through configured gateways.</li>
                            <li className="pl-2">Receive real-time payment updates.</li>
                            <li className="pl-2">Issue refunds.</li>
                        </ul>

                        <h2 className="text-[22px] font-semibold text-gray-500 tracking-tight mb-6 mt-12">Base URLs</h2>
                        <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
                            <div className="min-w-[500px] md:min-w-full bg-[#fbf7ff] rounded-2xl border border-[#f0eaff]">
                                <div className="grid grid-cols-12 gap-4 py-4 px-8 border-b border-[#f0eaff]">
                                    <div className="col-span-4 text-[14px] font-bold text-gray-500 tracking-wide uppercase">Environment</div>
                                    <div className="col-span-8 text-[14px] font-bold text-gray-400 tracking-wide uppercase">Base URL</div>
                                </div>

                                {/* Sandbox Row */}
                                <div className="grid grid-cols-12 gap-4 py-6 px-8 items-center">
                                    <div className="col-span-4 text-[16px] font-medium text-gray-500">Sandbox</div>
                                    <div className="col-span-8 flex items-center gap-3">
                                        <div className="bg-[#e6d8fa] rounded-lg py-2 px-4 flex items-center w-fit">
                                            <span className="text-[#2e0b65] text-[15px] font-medium tracking-tight leading-none">https://sandbox.api.payzik.io/v1</span>
                                        </div>
                                        <button className="text-[#5b1bbf] hover:text-[#2e0b65] transition-colors shrink-0">
                                            <Copy className="h-[20px] w-[20px]" strokeWidth={2} />
                                        </button>
                                    </div>
                                </div>

                                {/* Production Row */}
                                <div className="grid grid-cols-12 gap-4 py-6 px-8 items-center border-t border-[#f0eaff]/30">
                                    <div className="col-span-4 text-[16px] font-medium text-gray-500">Production</div>
                                    <div className="col-span-8 flex items-center gap-3">
                                        <div className="bg-[#e6d8fa] rounded-lg py-2 px-4 flex items-center w-fit">
                                            <span className="text-[#2e0b65] text-[15px] font-medium tracking-tight leading-none">https://api.payzik.io/v1</span>
                                        </div>
                                        <button className="text-[#5b1bbf] hover:text-[#2e0b65] transition-colors shrink-0">
                                            <Copy className="h-[20px] w-[20px]" strokeWidth={2} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );

            case "Authentication":
                return (
                    <>
                        <h1 className="text-[36px] font-bold text-gray-900 mb-8 tracking-tight">Authentication</h1>
                        <p className="text-[17px] text-gray-600 leading-relaxed mb-6 font-medium">
                            All API requests require your Secret API Key.
                            Include it in the request header:
                        </p>
                        <CodeBlock
                            title="Headers"
                            code={`Authorization: Bearer sk_test_xxxxxxxxx\nContent-Type: application/json`}
                        />
                        <div className="bg-[#fff9f0] border border-[#ffe0b2] rounded-2xl p-6 flex gap-4 mt-8">
                            <ShieldAlert className="h-6 w-6 text-[#f57c00] shrink-0" />
                            <p className="text-[15px] text-[#e65100] font-medium leading-relaxed">
                                <strong>Keep your secret key secure.</strong> Never expose it on frontend apps or client-side code. All API calls should ideally be made from your backend server.
                            </p>
                        </div>
                    </>
                );

            case "Create Payment":
                return (
                    <>
                        <h1 className="text-[36px] font-bold text-gray-900 mb-8 tracking-tight">Create Payment</h1>
                        <p className="text-[17px] text-gray-600 leading-relaxed mb-8 font-medium">
                            Creates a new payment request and returns a checkout URL for the customer.
                        </p>
                        <EndpointBadge method="POST" path="/payments" />
                        <CodeBlock
                            title="Request Body"
                            code={JSON.stringify({
                                "amount": 100000,
                                "currency": "INR",
                                "order_id": "ORD_1001",
                                "customer": {
                                    "name": "Guna Shekhar",
                                    "email": "guna@example.com",
                                    "phone": "+919876543210"
                                },
                                "callback_url": "https://merchant.com/payment/callback"
                            }, null, 2)}
                        />

                        <h2 className="text-[22px] font-semibold text-gray-500 tracking-tight mb-6 mt-12">Field Description</h2>
                        <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
                            <div className="min-w-[600px] md:min-w-full bg-[#fbf7ff] rounded-2xl border border-[#f0eaff] overflow-hidden">
                                <div className="grid grid-cols-12 gap-4 py-4 px-8 border-b border-[#f0eaff] bg-gray-50/50">
                                    <div className="col-span-3 text-[14px] font-bold text-gray-500 tracking-wide uppercase">Field</div>
                                    <div className="col-span-3 text-[14px] font-bold text-gray-500 tracking-wide uppercase">Type</div>
                                    <div className="col-span-6 text-[14px] font-bold text-gray-500 tracking-wide uppercase">Description</div>
                                </div>
                                {[
                                    { field: "amount", type: "integer", desc: "Amount in smallest currency unit (₹1000 = 100000 paise)" },
                                    { field: "currency", type: "string", desc: "ISO currency code (e.g., INR)" },
                                    { field: "order_id", type: "string", desc: "Unique order reference from your system" },
                                    { field: "customer", type: "object", desc: "Nested object containing customer details" },
                                    { field: "callback_url", type: "string", desc: "URL to redirect the customer after payment completion" },
                                ].map((row, idx) => (
                                    <div key={idx} className={`grid grid-cols-12 gap-4 py-5 px-8 items-center ${idx !== 0 ? 'border-t border-[#f0eaff]/30' : ''}`}>
                                        <div className="col-span-3 text-[15px] font-bold text-brand-purple font-mono">{row.field}</div>
                                        <div className="col-span-3 text-[14px] font-medium text-gray-400 font-mono italic">{row.type}</div>
                                        <div className="col-span-6 text-[15px] text-gray-600 font-medium">{row.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <CodeBlock
                            title="Success Response (201 Created)"
                            code={JSON.stringify({
                                "id": "pay_8hd83k29",
                                "status": "created",
                                "amount": 100000,
                                "currency": "INR",
                                "checkout_url": "https://checkout.payzik.io/pay_8hd83k29",
                                "created_at": 1708678000
                            }, null, 2)}
                        />

                        <h2 className="text-[22px] font-semibold text-gray-500 tracking-tight mb-6 mt-12">Payment Status Values</h2>
                        <div className="flex flex-wrap gap-3 mb-12">
                            {["created", "processing", "succeeded", "failed", "cancelled"].map(status => (
                                <span key={status} className="px-4 py-2 bg-[#e6d8fa] text-[#2e0b65] rounded-full text-[14px] font-bold tracking-tight uppercase">
                                    {status}
                                </span>
                            ))}
                        </div>
                    </>
                );

            case "Retrieve Payment":
                return (
                    <>
                        <h1 className="text-[36px] font-bold text-gray-900 mb-8 tracking-tight">Retrieve Payment</h1>
                        <p className="text-[17px] text-gray-600 leading-relaxed mb-8 font-medium">
                            Fetch the current status and details of a specific payment request.
                        </p>
                        <EndpointBadge method="GET" path="/payments/{payment_id}" />
                        <CodeBlock
                            title="Response"
                            code={JSON.stringify({
                                "id": "pay_8hd83k29",
                                "status": "succeeded",
                                "amount": 100000,
                                "currency": "INR",
                                "order_id": "ORD_1001",
                                "gateway": "razorpay",
                                "created_at": 1708678000,
                                "completed_at": 1708678050
                            }, null, 2)}
                        />
                    </>
                );

            case "Refund Payment":
                return (
                    <>
                        <h1 className="text-[36px] font-bold text-gray-900 mb-8 tracking-tight">Refund Payment</h1>
                        <p className="text-[17px] text-gray-600 leading-relaxed mb-8 font-medium">
                            Initiate a full or partial refund for a successful payment.
                        </p>
                        <EndpointBadge method="POST" path="/refunds" />
                        <CodeBlock
                            title="Request"
                            code={JSON.stringify({
                                "payment_id": "pay_8hd83k29",
                                "amount": 50000,
                                "reason": "customer_request"
                            }, null, 2)}
                        />
                        <CodeBlock
                            title="Response"
                            code={JSON.stringify({
                                "id": "rfnd_7jd82k3",
                                "status": "processing",
                                "amount": 50000,
                                "currency": "INR",
                                "created_at": 1708679000
                            }, null, 2)}
                        />
                    </>
                );

            case "Webhooks":
                return (
                    <>
                        <h1 className="text-[36px] font-bold text-gray-900 mb-8 tracking-tight">Webhooks</h1>
                        <p className="text-[17px] text-gray-600 leading-relaxed mb-8 font-medium">
                            Payzik sends real-time events to your configured webhook URL to notify you of payment status changes.
                        </p>

                        <h2 className="text-[22px] font-semibold text-gray-500 tracking-tight mb-6 mt-8">Supported Events</h2>
                        <div className="flex flex-wrap gap-3 mb-12">
                            {["payment.succeeded", "payment.failed", "refund.processed"].map(event => (
                                <span key={event} className="px-4 py-2 bg-[#2e0b65] text-white rounded-full text-[14px] font-bold tracking-tight">
                                    {event}
                                </span>
                            ))}
                        </div>

                        <CodeBlock
                            title="Sample Webhook Payload"
                            code={JSON.stringify({
                                "event": "payment.succeeded",
                                "data": {
                                    "payment_id": "pay_8hd83k29",
                                    "order_id": "ORD_1001",
                                    "amount": 100000
                                }
                            }, null, 2)}
                        />
                    </>
                );

            case "Error Handling":
                return (
                    <>
                        <h1 className="text-[36px] font-bold text-gray-900 mb-8 tracking-tight">Error Handling</h1>
                        <p className="text-[17px] text-gray-600 leading-relaxed mb-8 font-medium">
                            Payzik uses standard HTTP status codes and a consistent JSON error format.
                        </p>
                        <CodeBlock
                            title="Error Format"
                            code={JSON.stringify({
                                "error": {
                                    "code": "invalid_request",
                                    "message": "Amount is required",
                                    "request_id": "req_92hd82"
                                }
                            }, null, 2)}
                        />

                        <h2 className="text-[22px] font-semibold text-gray-500 tracking-tight mb-6 mt-12">Common Errors</h2>
                        <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
                            <div className="min-w-[500px] md:min-w-full bg-[#fbf7ff] rounded-2xl border border-[#f0eaff] overflow-hidden">
                                <div className="grid grid-cols-12 gap-4 py-4 px-8 border-b border-[#f0eaff] bg-gray-50/50">
                                    <div className="col-span-3 text-[14px] font-bold text-gray-500 tracking-wide uppercase">HTTP Code</div>
                                    <div className="col-span-9 text-[14px] font-bold text-gray-500 tracking-wide uppercase">Meaning</div>
                                </div>
                                {[
                                    { code: "400", meaning: "Invalid request (e.g., missing required fields)" },
                                    { code: "401", meaning: "Unauthorized (invalid or missing API key)" },
                                    { code: "404", meaning: "Resource not found" },
                                    { code: "500", meaning: "Internal server error (unexpected error on our end)" },
                                ].map((row, idx) => (
                                    <div key={idx} className={`grid grid-cols-12 gap-4 py-5 px-8 items-center ${idx !== 0 ? 'border-t border-[#f0eaff]/30' : ''}`}>
                                        <div className="col-span-3 text-[16px] font-bold text-[#b91c1c] font-mono">{row.code}</div>
                                        <div className="col-span-9 text-[15px] text-gray-600 font-medium">{row.meaning}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <main className="flex min-h-screen flex-col font-sans w-full bg-white pt-[80px]">
            <Navbar />

            <div className="flex flex-1 w-full relative">
                {/* Desktop Sidebar */}
                <aside className="w-[300px] bg-[#fbf9ff] flex-col hidden md:flex shrink-0 border-r border-[#eae5f5]">
                    <div className="py-8 px-8 flex flex-col h-full sticky top-[80px]">
                        <Link href="/" className="flex items-center gap-2 cursor-pointer mb-8">
                            <Image
                                src="/assets/payzik-logo.svg"
                                alt="Payzik Logo"
                                width={70}
                                height={20}
                                className="h-[20px] w-auto"
                                priority
                            />
                            <span className="text-[20px] font-semibold text-[#4c16a1] tracking-tight leading-none">Doc&apos;s</span>
                        </Link>

                        <div className="relative mb-8">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-[#8b79b5]" />
                            </div>
                            <input
                                type="text"
                                className="w-full bg-transparent border border-[#d6cde9] rounded-xl py-2.5 pl-10 pr-4 text-[14px] focus:outline-none focus:ring-1 focus:ring-brand-purple/50 focus:border-brand-purple/50 text-[#3b128b] placeholder:text-[#8b79b5]"
                                placeholder="Search API's..."
                            />
                        </div>

                        <nav className="flex flex-col gap-1 flex-1">
                            {sidebarLinks.map((name) => (
                                <button
                                    key={name}
                                    onClick={() => setActiveSection(name)}
                                    className={`flex items-center text-left w-full px-4 py-3 rounded-xl text-[15px] transition-all tracking-tight ${activeSection === name
                                        ? "bg-[#ebdffb] text-[#4c16a1] font-bold shadow-sm"
                                        : "text-gray-500 hover:bg-[#f3e8ff] hover:text-gray-900 font-medium"
                                        }`}
                                >
                                    {name}
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-w-0 bg-white">
                    {/* Mobile Horizontal Scroll Nav */}
                    <div className="md:hidden w-full bg-[#fbf9ff] border-b border-[#eae5f5] overflow-x-auto whitespace-nowrap px-6 py-4 flex gap-2 sticky top-[80px] z-10 scrollbar-hide">
                        {sidebarLinks.map((name) => (
                            <button
                                key={name}
                                onClick={() => setActiveSection(name)}
                                className={`px-5 py-2.5 rounded-full text-[14px] transition-all tracking-tight flex items-center ${activeSection === name
                                    ? "bg-[#ebdffb] text-[#4c16a1] font-bold shadow-sm"
                                    : "text-gray-500 hover:bg-[#f3e8ff] font-medium"
                                    }`}
                            >
                                {name}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="flex-1 w-full p-6 md:p-14 lg:p-20">
                        <div className="max-w-[800px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white relative z-20 border-t border-gray-100">
                <Footer />
            </div>
        </main>
    );
}
