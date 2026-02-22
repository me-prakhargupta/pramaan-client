import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full flex justify-center bg-white pb-8 mt-20">
            {/* Keeping the 80% width consistency with the Navbar */}
            <div className="w-[95%] md:w-[80%] flex flex-col md:flex-row items-center justify-between px-8 py-10 border-t border-[#028174]/20">
                
                {/* Copyright Section */}
                <div className="mb-4 md:mb-0">
                    <p className="text-sm text-gray-500 font-medium">
                        &copy; {currentYear} <span className="text-[#028174] font-bold">Pramaan</span>. 
                        All rights reserved.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center items-center gap-1 md:gap-4">
                    <Link href="/safety" className="text-xs md:text-sm text-gray-500 hover:text-[#028174] transition-colors py-1 px-3">Safety Guidelines</Link>
                    <Link href="/privacy" className="text-xs md:text-sm text-gray-500 hover:text-[#028174] transition-colors py-1 px-3">Privacy</Link>
                </div>

            </div>
        </footer>
    );
}