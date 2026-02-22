import Link from "next/link";

const serviceCategories = [
  {
    title: "Civic & Government",
    description: "Hassle-free documentation and government office assistance.",
    icon: "",
    items: ["Aadhar/PAN Updates", "Voter ID Registration", "Property Tax Assistance", "Senior Citizen Card"]
  },
  {
    title: "Daily Lifestyle",
    description: "Reliable help for your home and personal errands.",
    icon: "",
    items: ["Banking Assistance", "Utility Bill Management", "Medicine Delivery", "Home Maintenance"]
  },
  {
    title: "Tech & Digital",
    description: "Bridging the digital divide with hands-on support.",
    icon: "",
    items: ["Smartphone Training", "Digital Payments Setup", "Online Ticket Booking", "Scam Protection"]
  }
];

export default function ServicesPage() {
  return (
    <section className="bg-white min-h-screen">
      {/* Hero Header */}
      <header className="bg-[#f8fafc] py-24 border-b border-gray-100">
        <div className="w-[95%] md:w-[80%] mx-auto text-center">
          <span className="text-[#0AB68B] font-black uppercase tracking-widest text-sm">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#028174] mt-4 mb-6 tracking-tight">
            How can we help <br className="hidden md:block" /> you today?
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From complex government paperwork to daily digital tasks, our verified agents are ready to assist.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <main className="w-[95%] md:w-[80%] mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {serviceCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon & Title */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-black text-[#028174] mb-4">{category.title}</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {category.description}
              </p>

              {/* Service List */}
              <ul className="space-y-4">
                {category.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0AB68B]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA for specific category */}
              <button className="mt-10 w-full py-4 rounded-2xl border-2 border-[#028174] text-[#028174] font-black hover:bg-[#028174] hover:text-white transition-all">
                Explore {category.title}
              </button>
            </div>
          ))}
        </div>

        {/* Custom Request Box */}
        <div className="mt-24 p-12 bg-[#028174] rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <h2 className="text-3xl font-bold mb-4">Don't see what you're looking for?</h2>
          <p className="text-teal-50 opacity-80 mb-8 max-w-xl mx-auto">
            Our agents are versatile. If you have a specific civic or personal task, we’ll find the right expert for you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#FFE3B3] text-[#028174] px-10 py-4 rounded-xl font-black shadow-lg hover:bg-white transition-all"
          >
            Request a Custom Task
          </Link>
        </div>
      </main>
    </section>
  );
}