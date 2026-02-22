import Link from "next/link";
import type { Metadata } from "next";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
        {/* Header Section */}
        <section className="w-full flex justify-center pt-20 pb-16 bg-gray-50 border-b border-gray-100">
            <div className="w-[95%] md:w-[80%] text-center">
                <h1 className="text-5xl font-black text-[#028174] tracking-tight">About Pramaan</h1>
                <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Pramaan is a civic-tech platform designed to simplify complex Indian government workflows for senior citizens and working professionals.
                </p>
            </div>
        </section>

        {/* Core Content Wrapper */}
        <div className="w-[95%] md:w-[60%] lg:w-[50%] mx-auto mt-20 space-y-24">
            
            {/* Who We Are */}
            <section>
                <h2 className="text-3xl font-bold text-[#028174] mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#FFE3B3] rounded-full inline-block"></span>
                    Who We Are
                </h2>
                <p className="text-gray-700 text-lg leading-8">
                    Built as a bridge between citizens and public systems, <span className="font-semibold text-[#028174]">Pramaan</span> acting as a legal, transparent assistance layer. We model real-world processes—from document validation to task tracking—ensuring that high-friction services like identity updates and utility transfers are handled with precision.
                </p>
            </section>

            {/* How it Works - Using a clean card design */}
            <section className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#028174] mb-8">The Pramaan Process</h2>
                <div className="space-y-6">
                    {[
                        { title: "Service Selection", desc: "Identify the specific civic task or document update you require." },
                        { title: "Validation Layer", desc: "Our system validates documents against current compliance standards." },
                        { title: "Expert Assignment", desc: "We connect you with verified agents to manage the physical/legal workflow." },
                        { title: "Status Tracking", desc: "Monitor your application progress through real-time backend updates." }
                    ].map((step, i) => (
                        <div key={i} className="flex gap-4">
                            <span className="text-[#028174] font-bold">{i + 1}.</span>
                            <div>
                                <h4 className="font-bold text-gray-900">{step.title}</h4>
                                <p className="text-gray-600 text-sm">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Safety & Trust */}
            <section className="text-center bg-[#028174] p-12 rounded-3xl text-white shadow-xl shadow-[#028174]/20">
                <h2 className="text-3xl font-bold mb-4">Safety & Trust</h2>
                <p className="text-teal-50 leading-7 mb-8 opacity-90">
                    Your security is our core architecture. Every expert is identity-verified and background-checked. We secure your data and payments using production-grade protocols, ensuring peace of mind for every transaction.
                </p>
                <Link href="/safety" className="inline-block px-8 py-3 bg-[#FFE3B3] text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-lg">
                    Read Safety Guidelines
                </Link>
            </section>

            {/* Problem Reporting */}
            <section className="text-center py-10">
                <h3 className="text-2xl font-bold text-gray-900">Facing a hurdle?</h3>
                <p className="mt-2 text-gray-600 mb-8">Our support team is integrated directly into the workflow to resolve issues quickly.</p>
                <Link href="/contact" className="px-10 py-4 border-2 border-[#028174] text-[#028174] hover:bg-[#028174] hover:text-white rounded-xl font-bold transition-all">
                    Report an Issue
                </Link>
            </section>
        </div>
    </div>
  );
};

export const metadata: Metadata = {
    title: "About — Pramaan",
    description: "Learn about Pramaan, India's most trusted civic-tech platform for document validation and government services.",
}