import Link from "next/link";
import type { Metadata } from "next";

export default function SafetyGuidelines() {
  const guidelines = [
    {
      title: "Verify Identity",
      points: [
        "Check the Agent’s profile and verification badge.",
        "Only communicate via the official Pramaan platform.",
        "Ignore anyone claiming to be staff outside the app."
      ]
    },
    {
      title: "Data Privacy",
      points: [
        "Never share UPI PINs, OTPs, or passwords.",
        "Pramaan staff will NEVER ask for your credentials.",
        "Only upload documents via our secure encrypted vault."
      ]
    },
    {
      title: "Secure Environment",
      points: [
        "Meet in well-lit, public, or secure locations.",
        "Seniors: keep a family member nearby for in-person tasks.",
        "Never allow entry without identity confirmation."
      ]
    },
    {
      title: "Smart Payments",
      points: [
        "Always prefer secure online payments via the app.",
        "Avoid advance cash payments to agents.",
        "Pay only after the task is marked as 'Complete'."
      ]
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-24">
      {/* Hero Header */}
      <header className="bg-[#028174] py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Your Safety is Our Priority
          </h1>
          <p className="text-xl text-teal-50 opacity-90 leading-relaxed">
            Follow these essential guidelines to ensure a secure and trusted experience on the Pramaan platform.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidelines.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#0AB68B]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#028174]">{idx + 1}</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
              <ul className="space-y-3">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-3 text-gray-600 leading-relaxed">
                    <span className="text-[#0AB68B] font-bold">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Safety Guidelines — Pramaan",
  description: "User safety and security protocols for the Pramaan platform.",
};