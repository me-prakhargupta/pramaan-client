"use client"

import Link from "next/link";

export default function Main() {
    // Defining services in an array makes your code cleaner and easier to scale
    const services = [
        {
            title: "Document Support",
            desc: "Expert help with Aadhaar updates, PAN corrections, and certificate applications—done correctly the first time.",
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        },
        {
            title: "Legal Advisory",
            desc: "Clear guidance for everyday legal needs like rental agreements or affidavits—explained without complex jargon.",
            icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        },
        {
            title: "Property Verification",
            desc: "Thorough verification of sale deeds and land records so you can invest with total peace of mind.",
            icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        }
    ];

    return (
        <section className="w-full flex justify-center bg-white py-20">
            <div className="w-[95%] md:w-[80%]">
                
                {/* Heading Section */}
                <div className="sm:text-center mb-16 px-2">
                    <h2 className="text-[#028174] text-3xl md:text-5xl font-black mb-6">
                        Simplifying Your Essential Tasks
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                        Your peace of mind is our priority. <span className="font-semibold text-[#028174]">Pramaan</span> handles 
                        the complex bureaucracy so you don't have to.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="group bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:border-[#028174]/20 transition-all duration-300 hover:scale-[1.02]"
                        >
                            {/* Simple Inline SVG Icon */}
                            <div className="w-12 h-12 bg-[#028174]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#028174] transition-colors">
                                <svg className="w-6 h-6 text-[#028174] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                                </svg>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <div className="inline-block p-1 rounded-2xl bg-gray-50 border border-gray-100">
                        <div className="px-8 py-8 flex flex-col md:flex-row items-center gap-6">
                            <p className="text-gray-700 font-medium">Not sure which service you need?</p>
                            <Link 
                                href="/contact" 
                                className="bg-[#0AB68B] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#028174] transition-all shadow-lg shadow-[#0AB68B]/20 active:scale-95"
                            >
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}