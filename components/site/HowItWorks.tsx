export default function HowItWorks() {
    return (
        <section className="w-full flex justify-center bg-white py-24">
            <div className="w-[95%] md:w-[80%]">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <p className="text-gray-500 font-medium tracking-wide uppercase text-sm mb-2">Our Process</p>
                    <h2 className="text-4xl font-black text-[#028174]">How it Works</h2>
                </div>

                <div className="relative flex flex-col items-center">
                    
                    {/* YOUR IMAGE - Now responsive and correctly positioned */}
                    <div className="w-full md:w-[90%] lg:w-full flex justify-end">
                        <div 
                            className="w-full lg:w-[75%] h-[400px] md:h-[550px] bg-cover bg-center rounded-3xl shadow-lg border border-gray-100"
                            style={{ 
                                backgroundImage: `url('https://images.ctfassets.net/vwt5n1ljn95x/68OY5vAHQdG6blVvXM1WT7/5f45c9eda06d29820a9836a11232ef16/how_it_works_pic_updated.jpg?w=1920&q=75&fm=webp')` 
                            }}
                        >
                            {/* Subtle overlay to make the image feel integrated */}
                            <div className="w-full h-full bg-[#028174]/5"></div>
                        </div>
                    </div>

                    {/* The Steps Card - Floats over your image on Desktop */}
                    <div className="w-[90%] md:w-[500px] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 bg-white border border-gray-200 rounded-3xl p-10 shadow-2xl mt-[-80px] lg:mt-0 z-10">
                        <div className="space-y-6">
                            {[
                                { n: "1.", t: "Choose your task" },
                                { n: "2.", t: "Schedule for as early as today" },
                                { n: "3.", t: "Get a Trusted Professional" },
                                { n: "4.", t: "Relax, and track your task" }
                            ].map((item) => (
                                <div key={item.n} className="flex items-center gap-6 group">
                                    <span className="text-2xl font-bold text-black bg-[#FFE3B3] w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0 group-hover:bg-[#028174] group-hover:text-white transition-colors">
                                        {item.n}
                                    </span>
                                    <p className="text-gray-700 text-xl font-medium">
                                        {item.t}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}