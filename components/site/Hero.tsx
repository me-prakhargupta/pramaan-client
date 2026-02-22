"use client"

import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-full flex justify-center bg-white pt-20 pb-32">
            <div className="w-[95%] md:w-[80%] flex flex-col items-center">
                
                {/* Main Headline */}
                <h1 className="text-center text-4xl md:text-7xl font-black text-[#028174] leading-[1.1] tracking-tight">
                    Your trusted way to get <br />
                    <span className="bg-gradient-to-r from-[#028174] via-[#0AB68B] to-[#20E3B2] bg-clip-text text-transparent">
                        things done in India.
                    </span>
                </h1>

                {/* Subtext - Updated from Trusto to Pramaan */}
                <p className="mt-8 text-center text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                    <span className="font-semibold text-[#028174]">Pramaan</span> simplifies paperwork and government tasks 
                    on your behalf—ensuring compliance, safety, and transparency at every step.
                </p>
                
                {/* Primary CTA */}
                <div className="mt-10 flex flex-col items-center gap-4">
                    <Link 
                        href="/signup" 
                        className="bg-[#028174] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#026b61] transition-all shadow-xl shadow-[#028174]/20 active:scale-95"
                    >
                        Start Your Application
                    </Link>
                    <p className="text-xs text-gray-400 font-medium">No hidden fees. Secure Govt. ID verification included.</p>
                </div>
            </div>
        </section>
    );
};