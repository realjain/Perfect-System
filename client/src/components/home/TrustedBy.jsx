import React from 'react';

const TrustedBy = () => {
  // Enterprise client items matching your digital infrastructure focus
  const clients = [
    { name: "Homes & Offices", type: "Residential and Commercial" },
    { name: "Bank of Baroda", type: "Banking" },
    { name: "Union Bank of India", type: "Banking" },
    { name: "ICICI Bank", type: "Banking" },
    { name: "HDFC Bank", type: "Banking" },
    { name: "Hospitals", type: "Healthcare" },
    { name: "Schools", type: "Education" },
    { name: "Factories", type: "Industrial" },
    { name: "Luxury Hotels", type: "Hospitality" },
    { name: "Corporate Offices", type: "Enterprise" },
    { name: "Govt Organizations", type: "Public Sector" },
  ];

  // Double the array to allow for an infinite seamless scrolling marquee loop
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="w-full bg-white py-20 md:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Synchronized Headings */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            Enterprise Grade Trust
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Trusted By Leading Organizations
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            Delivering Security, Power Backup, Networking, and IT Infrastructure Solutions Across Industries.
          </p>
        </div>

        {/* Endless Scrolling Loop with Left/Right Soft Edge Fades */}
        <div className="relative w-full overflow-hidden">
          {/* Glassy/Faded gradient edge covers */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Expanded Marquee Row: Increased gap between items */}
          <div className="flex w-max gap-20 items-center py-6 animate-marquee hover:[animation-play-state:paused]">
            {marqueeItems.map((client, index) => (
              <div
                key={index}
                className="flex items-center gap-5 shrink-0 cursor-pointer select-none group transition-all duration-300"
              >
                {/* Visual Emblem Prefix Block (Increased size from w-8 to w-11) */}
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center font-black text-base text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300 shadow-sm border border-slate-200/40">
                  {client.name.charAt(0)}
                </div>

                {/* Text Layout Stacked Vertically */}
                <div className="flex flex-col gap-0.5">
                  {/* Brand Typography (Increased size to text-lg / md:text-xl) */}
                  <span className="text-lg md:text-xl font-extrabold tracking-tight text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                    {client.name}
                  </span>
                  
                  {/* Category Label (Increased size to text-[11px]) */}
                  <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase group-hover:text-blue-500 transition-colors duration-300">
                    {client.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedBy;