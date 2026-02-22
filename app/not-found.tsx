"use client";

import Link from "next/link";

// Renaming the function to NotFoundComponent to avoid conflicts with Next.js types
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-5 text-center">
      {/* Visual background element */}
      <div className="relative w-full max-w-md mb-8 flex justify-center items-center">
        <div className="absolute inset-0 bg-[#FFE3B3] blur-[100px] opacity-20 rounded-full" />
        <h1 className="relative text-[10rem] md:text-[14rem] font-black text-[#028174]/10 leading-none select-none">
          404
        </h1>
        {/* <div className="absolute text-7xl md:text-8xl animate-bounce">
        </div> */}
      </div>

      {/* Text Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Document Missing
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-md mx-auto leading-relaxed mb-10">
          The file or page you are looking for isn't in our current registry. It might have been relocated.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="w-full sm:w-auto bg-[#028174] text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-[#028174]/20 hover:bg-[#026b61] transition-all active:scale-95"
          >
            Go to Home
          </Link>
          <Link 
            href="/services" 
            className="w-full sm:w-auto bg-white border-2 border-gray-100 text-gray-700 px-10 py-4 rounded-2xl font-black hover:border-gray-200 transition-all active:scale-95"
          >
            View Services
          </Link>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-20 pt-10 border-t border-gray-100 w-full max-w-lg">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
          Need immediate help?
        </p>
        <div className="flex justify-center gap-8 text-[#028174] font-bold">
            <Link href="/report" className="hover:underline">Report an Issue</Link>
            <Link href="/contact" className="hover:underline">Contact Support</Link>
        </div>
      </div>
    </div>
  );
}