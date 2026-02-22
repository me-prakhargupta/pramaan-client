"use client"

import Link from "next/link";

export default function Reviews() {
    const reviews = [
        { name: "Piyush Baghel", text: "Pramaan helped me with complete documentation and utility transfer. Very smooth and reliable service." },
        { name: "Mridul Goyal", text: "The team guided me through property verification and paperwork. Highly recommended!" },
        { name: "Anurag Singh", text: "My parents struggle with paperwork. Pramaan has been a blessing — everything gets done reliably." },
        { name: "Amitabh Mishra", text: "Excellent assistance during the ownership transfer process. They made everything simple." },
        { name: "Vikash Yadav", text: "Handled my electricity transfer smoothly. I didn’t have to visit any office — saved so much time." },
        { name: "Sanjay Verma", text: "Identity updates were a breeze. The transparency in tracking the status is what I liked most." },
    ];

    return (
        <section className="w-full flex justify-center bg-white py-20">
            <div className="w-[95%] md:w-[80%]">
                
                <div className="text-center mb-16">
                    <h2 className="text-[#028174] text-4xl md:text-5xl font-black mb-4">
                        Voices of Trust
                    </h2>
                    <p className="text-gray-500 text-lg">Real stories from citizens using Pramaan.</p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div 
                            key={index} 
                            className="group bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-[#028174]/30 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Custom Inline SVG Quote (No Lucide) */}
                            <svg 
                                className="absolute -top-2 -right-2 w-16 h-16 text-gray-50 group-hover:text-[#FFE3B3]/40 transition-colors transform rotate-12" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 4.44772 14.4647 4 15.017 4H21.017C21.5693 4 22.017 4.44772 22.017 5V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C2.91243 8 2.017 7.10457 2.017 6V5C2.017 4.44772 2.46472 4 3.017 4H9.017C9.56928 4 10.017 4.44772 10.017 5V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z" />
                            </svg>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                                {review.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed italic relative z-10">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Feedback Box */}
                <div className="mt-20 py-12 px-8 bg-gray-50 rounded-3xl text-center border border-gray-100">
                    <h3 className="text-2xl text-[#028174] font-extrabold">Help us grow</h3>
                    <p className="text-gray-600 mt-2 mb-8">We are building Pramaan to serve every Indian citizen. Share your experience.</p>
                    <Link 
                        href="/feedback" 
                        className="inline-block bg-[#028174] text-white font-bold py-3.5 px-8 rounded-xl hover:bg-[#026b61] transition-all active:scale-95 shadow-lg shadow-[#028174]/20"
                    >
                        Share Feedback
                    </Link>
                </div>
            </div>
        </section>
    );
}