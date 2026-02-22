import type { Metadata } from "next";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header Section */}
      <header className="bg-gray-50 border-b border-gray-100 py-16 mb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#FFE3B3]/30 border border-[#FFE3B3] text-[#028174] text-xs font-bold uppercase tracking-widest">
            Policy Version 2.1
          </div>
          <h1 className="text-5xl font-black text-[#028174] tracking-tight mb-4">
            Privacy & Data Policy
          </h1>
          <p className="text-gray-500 font-medium">
            Last Updated: <span className="text-gray-900">Nov 27, 2025</span>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 prose prose-slate">
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          At <span className="font-bold text-[#028174]">Pramaan</span>, we prioritize the security of your personal information. This policy details how we collect, protect, and handle your data when you use our civic-assistance platform.
        </p>

        <div className="space-y-16">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-[#0AB68B]">01.</span> Information We Collect
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#028174] mb-3">Personal Identity</h3>
                <ul className="space-y-2 text-gray-600 text-sm list-disc list-inside">
                  <li>Full legal name</li>
                  <li>Email & Phone verification</li>
                  <li>Physical address for on-site tasks</li>
                  <li>Aadhar/ID metadata for verification</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#028174] mb-3">Usage & Metadata</h3>
                <ul className="space-y-2 text-gray-600 text-sm list-disc list-inside">
                  <li>Device IP and browser type</li>
                  <li>Timestamped task activity</li>
                  <li>Secure login session logs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-[#0AB68B]">02.</span> Use of Information
            </h2>
            <p className="text-gray-600 leading-7 mb-4">
              Your data is strictly utilized to facilitate civic services. We use this information to:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 font-medium text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0AB68B]"></div> Verify service eligibility
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0AB68B]"></div> Match you with verified Agents
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0AB68B]"></div> Process secure payments
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0AB68B]"></div> Detect and prevent fraud
              </li>
            </ul>
            <blockquote className="mt-6 border-l-4 border-[#FFE3B3] bg-gray-50 p-4 italic text-gray-600 rounded-r-xl">
              "Pramaan does not sell, rent, or trade your personal data to third-party advertisers."
            </blockquote>
          </section>

          {/* Section 3 */}
          <section className="bg-[#028174] rounded-3xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-4">Data Security & Encryption</h2>
            <p className="opacity-90 leading-relaxed mb-6">
              We employ production-grade AES-256 encryption for data at rest and TLS 1.3 for data in transit. Your documents are stored in secure, siloed buckets with strictly controlled access.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-mono">SSL Encrypted</div>
              <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-mono">ISO 27001 Compliant</div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-[#0AB68B]">03.</span> Your Legal Rights
            </h2>
            <p className="text-gray-600 mb-6">Under Indian data protection laws, you have the right to:</p>
            <div className="space-y-4">
              {[
                { title: "Access & Portability", desc: "Request a copy of all data stored in our systems." },
                { title: "Right to Erasure", desc: "Request permanent deletion of your account and related metadata." },
                { title: "Correction", desc: "Update inaccurate or incomplete profile information." }
              ].map((right, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  <h4 className="font-bold text-gray-900">{right.title}</h4>
                  <p className="text-sm text-gray-500">{right.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="pt-10 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Questions regarding privacy?</h2>
            <p className="text-gray-600 mb-4">Our Data Protection Officer is available here:</p>
            <Link href="/contact" className="text-xl font-bold text-[#028174] hover:underline">
              Connect now
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Privacy Policy — Pramaan",
  description: "Learn how Pramaan protects your data and ensures privacy for all civic services.",
};