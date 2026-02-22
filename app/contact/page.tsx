import Link from "next/link";
import type { Metadata } from "next";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Brand Color Background */}
      <section className="w-full flex justify-center pt-24 pb-20 bg-[#028174]">
        <div className="w-[95%] md:w-[80%] text-center">
          <h1 className="text-5xl font-black text-white tracking-tight">Get in Touch</h1>
          <p className="mt-6 text-xl text-teal-50 max-w-2xl mx-auto leading-relaxed opacity-90">
            Have questions about a civic task? The Pramaan support team is here to guide you through every step of the process.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <div className="w-[95%] md:w-[80%] mx-auto -mt-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Email Card */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transition-transform hover:scale-[1.02]">
            <div className="w-12 h-12 bg-[#028174]/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#028174]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Email Support</h2>
            <p className="text-gray-500 mt-2 mb-4 text-sm">Best for general inquiries and document help.</p>
            <a href="mailto:support@pramaan.in" className="text-[#028174] font-bold text-lg hover:underline underline-offset-4">
              support@pramaan.in
            </a>
          </div>

          {/* Availability Card */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transition-transform hover:scale-[1.02]">
            <div className="w-12 h-12 bg-[#FFE3B3]/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#028174]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Support Hours</h2>
            <p className="text-gray-500 mt-2 mb-4 text-sm">Our experts are online to assist you.</p>
            <p className="text-[#028174] font-bold text-lg">9:00 AM – 9:00 PM (IST)</p>
          </div>

          {/* Safety Card */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transition-transform hover:scale-[1.02]">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Safety & Trust</h2>
            <p className="text-gray-500 mt-2 mb-4 text-sm">Notice suspicious activity or data concerns?</p>
            <Link href="/report" className="inline-block text-red-600 font-bold hover:text-red-700">
              Report an Issue &rarr;
            </Link>
          </div>

        </div>

        {/* Office Location Placeholder */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-10 text-center border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">Headquarters</h2>
          <p className="text-gray-600 mt-2">Pramaan Civic Operations Centre</p>
          <p className="text-gray-500 text-sm mt-1 italic">Digital-first assistance across India. Physical locations coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Contact — Pramaan",
  description: "Get help with your civic tasks and government document updates from the Pramaan support team.",
};