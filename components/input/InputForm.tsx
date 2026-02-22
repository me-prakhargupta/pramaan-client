"use client";
import { useState } from "react";
// import { Search } from "lucide-react"; // Install lucide-react for professional icons

export default function InputForm() {
    const [query, setQuery] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Searching for:", query);
        // This is where your backend-driven workflow would trigger
    };

    return (
        <form 
            onSubmit={handleSubmit}
            className="relative group mt-10 w-full max-w-3xl mx-auto px-4"
        >
            {/* The Input Wrapper */}
            <div className="relative flex items-center">
                {/* Search Icon */}
                {/* <Search className="absolute left-6 text-gray-400 group-focus-within:text-[#028174] transition-colors" size={20} /> */}
                
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Try 'Update Aadhaar address' or 'Apply for Senior Citizen Card'..."
                    className="w-full h-16 pl-14 pr-32 outline-none text-lg border-2 border-gray-100 rounded-full shadow-lg focus:border-[#028174] focus:ring-4 focus:ring-[#028174]/10 transition-all placeholder:text-gray-400 text-gray-700"
                />

                {/* Action Button inside the input */}
                <button 
                    type="submit"
                    className="absolute right-3 bg-[#028174] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#026b61] transition-all active:scale-95 text-sm"
                >
                    Continue
                </button>
            </div>

            {/* Quick Suggestions - Great for UX */}
            <div className="flex gap-2 justify-center mt-4 overflow-x-auto pb-2">
                {['Passport', 'Voter ID', 'Income Certificate', 'Utility Bill'].map((item) => (
                    <button 
                        key={item}
                        type="button"
                        onClick={() => setQuery(item)}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-[#028174] hover:text-[#028174] transition-all whitespace-nowrap"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </form>
    );
};