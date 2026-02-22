"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        // Added: top-0, z-50 (to stay on top), and backdrop-blur for a modern feel
        <header className="w-full flex justify-center pt-4 pb-2 sticky top-0 z-50 bg-white/80 backdrop-blur-md transition-all"> 
            
            {/* The actual Navbar */}
            <nav className="w-[95%] md:w-[80%] flex items-center justify-between px-8 py-3 border border-[#028174]/10 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
                
                {/* Branding Section */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-[#028174] rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-3">
                            P
                        </div>
                        <span className="text-xl font-bold text-[#028174] tracking-tight">
                            Pramaan
                        </span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    <Link href="/services" className="text-sm font-semibold text-gray-600 hover:text-[#028174] transition-colors">Services</Link>
                    <Link href="/about" className="text-sm font-semibold text-gray-600 hover:text-[#028174] transition-colors">About</Link>
                    <Link href="/contact" className="text-sm font-semibold text-gray-600 hover:text-[#028174] transition-colors">Contact</Link>
                </div>

                {/* Action Button */}
                <div className="flex items-center gap-4">
                    <Link href="/signin" className="hidden sm:block text-sm font-bold text-[#028174] px-4">Sign in</Link>
                    <Link 
                        href="/signup" 
                        className="bg-[#028174] text-white text-sm font-bold py-2.5 px-6 rounded-xl hover:bg-[#026b61] hover:shadow-xl hover:shadow-[#028174]/20 transition-all active:scale-95"
                    >
                        Get Started
                    </Link>
                </div>
            </nav>
        </header>
    );
};