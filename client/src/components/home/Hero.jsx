import React, { useState } from "react";
import { Phone, ArrowRight, Shield, Cpu, Sun, Radio, Wrench } from "lucide-react";

const Hero = ({ onGetQuoteClick }) => {
  const [botTrap, setBotTrap] = useState("");
  const [isThrottled, setIsThrottled] = useState(false);

  const handleInquiryClick = (e) => {
    // 1. Terminate execution if hidden honeypot field is modified by an automation bot script
    if (botTrap.length > 0) {
      console.warn("Automation trigger detected.");
      return;
    }

    // 2. Prevent consecutive click abuse
    if (isThrottled) return;

    setIsThrottled(true);
    onGetQuoteClick(e);

    // Release restriction layout after 3 seconds
    setTimeout(() => {
      setIsThrottled(false);
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-white text-slate-900 relative overflow-hidden flex items-center pt-24 md:pt-16">
      
      {/* BRANDING AMBIENT GLOWS */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 bg-amber-100/40 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/4 w-80 md:w-[450px] h-80 md:h-[450px] bg-emerald-100/30 blur-[120px] md:blur-[150px] rounded-full pointer-events-none"></div>

      {/* INVISIBLE BOT TRAP LAYER */}
      <div className="absolute opacity-0 -z-50 pointer-events-none w-0 h-0 overflow-hidden">
        <input
          type="text"
          name="hero_bot_trap"
          value={botTrap}
          onChange={(e) => setBotTrap(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Tag Category Wrapper */}
            <div className="flex flex-wrap gap-2 mb-6 max-w-full overflow-x-auto no-scrollbar">
              {["Sales", "Service", "AMC", "Repairing","Rental", "Consultancy"].map((tag, idx) => (
                <div key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/10 bg-emerald-50/40 text-slate-700 text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-sm shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                  {tag}
                </div>
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.2] lg:leading-[1.15]">
              Building Secure &{" "}
              <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-emerald-600 bg-clip-text text-transparent">
                Connected Digital
              </span>{" "}
              Infrastructure
            </h1>

            {/* Description Text */}
            <p className="mt-4 md:mt-6 text-slate-600 text-sm md:text-lg max-w-xl leading-relaxed font-normal">
              EPABX, UPS & Inverter Batteries, Smart Surveillance, Networking, Solar, and IT Infrastructure Solutions for Homes, Offices, and Enterprises.
            </p>

            {/* Action Triggers */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8 md:mt-10">
              <button 
                onClick={handleInquiryClick}
                disabled={isThrottled}
                className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-300 px-8 py-4 rounded-xl font-bold text-white shadow-lg shadow-blue-600/10 active:scale-95 text-xs uppercase tracking-wider"
              >
                {isThrottled ? "Processing..." : "Inquiry"}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+919414157713"
                className="flex items-center justify-center gap-2 border border-slate-200 hover:border-emerald-500/40 hover:bg-emerald-50/30 transition-all duration-300 px-8 py-4 rounded-xl bg-white shadow-sm text-slate-700 font-semibold text-xs uppercase tracking-wider"
              >
                <Phone size={16} className="text-amber-500" />
                Call Us
              </a>
            </div>

            {/* Key Metrics Dashboard */}
            <div className="grid grid-cols-3 gap-4 sm:gap-12 mt-12 md:mt-16 pt-8 border-t border-slate-100">
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-amber-600 tracking-tight">30+</h3>
                <p className="text-slate-500 text-[9px] sm:text-xs mt-1 uppercase tracking-wider font-bold">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-emerald-600 tracking-tight">500+</h3>
                <p className="text-slate-500 text-[9px] sm:text-xs mt-1 uppercase tracking-wider font-bold">Projects Done</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-4xl font-black text-blue-600 tracking-tight">90%</h3>
                <p className="text-slate-500 text-[9px] sm:text-xs mt-1 uppercase tracking-wider font-bold">Client Satisfaction</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - CORE SERVICE VERTICALS CARDS GRID */}
          <div className="lg:col-span-6 relative w-full min-h-fit lg:min-h-[480px] flex flex-col items-center justify-center mt-6 lg:mt-0">
            
            <div className="absolute w-64 h-64 md:w-80 md:h-80 border border-slate-100 rounded-full pointer-events-none flex items-center justify-center hidden sm:flex">
              <div className="w-48 h-48 md:w-56 md:h-56 border border-emerald-500/5 rounded-full animate-spin duration-[25s]"></div>
            </div>

            {/* Service grid wrapper */}
            <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto z-10">
              
              {/* CARD 1 */}
              <div className="group relative p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-500/30 shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Shield size={18} />
                </div>
                <h4 className="text-blue-600 tracking-wider text-[9px] font-bold uppercase">01 / Telecom</h4>
                <p className="text-sm font-black text-slate-900 mt-0.5">EPBAX, Phones & Intercom System</p>
              </div>

              {/* CARD 2 */}
              <div className="group relative p-5 rounded-2xl bg-white border border-slate-100 hover:border-emerald-500/30 shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <Cpu size={18} />
                </div>
                <h4 className="text-emerald-600 tracking-wider text-[9px] font-bold uppercase">02 / Energy</h4>
                <p className="text-sm font-black text-slate-900 mt-0.5">UPS, Inverter & Batteries & Solar Panels</p>
              </div>

              {/* CARD 3 */}
              <div className="group relative p-5 rounded-2xl bg-white border border-slate-100 hover:border-amber-500/30 shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                  <Sun size={18} />
                </div>
                <h4 className="text-amber-600 tracking-wider text-[9px] font-bold uppercase">03 / Security & Safety</h4>
                <p className="text-sm font-black text-slate-900 mt-0.5">CCTV Cameras & Fire Systems</p>
              </div>

              {/* CARD 4 */}
              <div className="group relative p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center mb-3">
                  <Radio size={18} />
                </div>
                <h4 className="text-slate-500 tracking-wider text-[9px] font-bold uppercase">04 / Network</h4>
                <p className="text-sm font-black text-slate-900 mt-0.5">Servers & IT Infrastructure</p>
              </div>

              {/* NEW REPAIRING CARD */}
              <div className="sm:col-span-2 group relative p-5 rounded-2xl bg-white border border-slate-100 hover:border-red-500/30 shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-0.5">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-3">
                  <Wrench size={18} />
                </div>
                <h4 className="text-red-600 tracking-wider text-[9px] font-bold uppercase">05 / Support & Repair</h4>
                <p className="text-sm font-black text-slate-900 mt-0.5">Expert Repairing for CCTV, EPABX, UPS & Inverters</p>
              </div>

              {/* Ecosystem Central Badge */}
              <div className="sm:col-span-2 mt-2 flex justify-center w-full">
                <div className="inline-flex items-center justify-center text-center gap-2 px-4 py-2 w-full sm:w-auto rounded-xl bg-white border border-emerald-500/20 text-emerald-700 text-[10px] font-bold tracking-wide uppercase shadow-sm">
                  <span className="flex h-2 w-2 relative shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Perfect System Ecosystem
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;