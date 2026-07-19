import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  
  // Anti-Spam Honeypot State
  const [botTrap, setBotTrap] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // 1. HONEYPOT ACTION: Drop form execution silently if bot trap is triggered
    if (botTrap.length > 0) {
      console.warn("Spam submission blocked.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        e.target.reset();
        setSelectedCategory('');
        setCustomMessage('');
        setBotTrap('');
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with the Perfect System team for expert queries, corporate sales, AMC service, device repairing, rentals, or infrastructure consultancy." />
        <meta name="keywords" content="Contact Perfect System, AMC service, IT infrastructure quote, CCTV repair" />
      </Helmet>
  
      <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white pt-24">
        
        {/* BREADCRUMB HEADER BAND */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs md:text-sm font-semibold text-slate-500 py-4 border-b border-slate-100">
            <span className="text-slate-400">Home</span>
            <span className="text-slate-300 pointer-events-none text-[10px] md:text-xs">&#9656;</span>
            <span className="text-slate-950 font-black capitalize tracking-tight bg-slate-50 px-3 py-1 border border-slate-200/60 rounded-full shadow-sm">
              Contact Us
            </span>
          </div>
        </div>

        {/* HERO SECTION DESIGN */}
        <header className="bg-white">
          <div className="mx-auto max-w-7xl px-4 pt-8 pb-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
                Premium & Customised Solutions
              </span>
              {/* <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-inner">
                Verified Architecture
              </span> */}
            </div>

            <h1 className="max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl uppercase">
              Get In Touch
            </h1>
          </div>
        </header>

        {/* TWO COLUMN GRID CONTENT */}
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
            
            {/* LEFT 2-COLUMNS: CONTACT INFRASTRUCTURE */}
            <div className="space-y-8 lg:col-span-2">
              
              <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="mb-4 flex items-center gap-2.5 text-base font-black text-slate-950 uppercase tracking-tight">
                  <span className="h-4 w-1 rounded-full bg-blue-600" />
                  Connect With Us
                </h2>
                <p className="whitespace-pre-line text-sm leading-relaxed text-slate-500 font-medium">
                  Reach out for direct setup, layouts, enterprise system packages, and assistance. Our desk specialists will review your requirements and follow up promptly.
                </p>
              </section>

              <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 space-y-6">
                <h2 className="mb-2 flex items-center gap-2.5 text-base font-black text-slate-950 uppercase tracking-tight">
                  <span className="h-4 w-1 rounded-full bg-blue-600" />
                  Contact Directories
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href="tel:+919414157713" className="flex items-center gap-4 p-4 border border-slate-200/60 bg-slate-50/50 rounded-2xl group transition-all shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Call To Order</p>
                      <p className="text-sm font-bold text-slate-800 mt-0.5 group-hover:text-blue-600 transition-colors">+91 94141 57713</p>
                    </div>
                  </a>

                  <a href="mailto:perfectsystronics@yahoo.com" className="flex items-center gap-4 p-4 border border-slate-200/60 bg-slate-50/50 rounded-2xl group transition-all shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Mail size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Correspondence</p>
                      <p className="text-sm font-bold text-slate-800 mt-0.5 group-hover:text-blue-600 transition-colors truncate">perfectsystronics@yahoo.com</p>
                    </div>
                  </a>
                </div>
              </section>

              <section className="rounded-3xl border border-slate-200/60 bg-slate-50 p-6 shadow-inner sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="mb-3 text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <MapPin size={14} className="text-blue-600" /> HQ Office Directory
                  </h3>
                  <div className="text-sm font-bold text-slate-800 tracking-tight leading-relaxed">
                    <p>17th, Ostwal Plaza 1st, Sunderwas</p>
                    <p className="text-slate-500 font-semibold text-xs mt-0.5">Udaipur(Raj), India</p>
                  </div>
                </div>

                <div className="border-t sm:border-t-0 sm:border-l border-slate-200/80 pt-4 sm:pt-0 sm:pl-6">
                  <h3 className="mb-3 text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Clock size={14} className="text-blue-600" /> Operational Hours
                  </h3>
                  <div className="text-xs font-bold text-slate-700 space-y-1">
                    <p className="flex justify-between"><span>Mon – Sat:</span> <span className="text-slate-950">10:30 AM – 5:00 PM</span></p>
                    <p className="flex justify-between text-red-500 font-semibold"><span>Sunday:</span> <span>Closed</span></p>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-slate-200/60 bg-slate-50 p-6 shadow-inner sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Connect Globally</h4>
                  <p className="text-sm font-bold text-slate-800 tracking-tight mt-0.5">Follow Our Social Media Page</p>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/perfectsystemonline?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-800 tracking-tight hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                    Facebook
                  </a>
                  <span className="text-slate-300 font-light select-none">|</span>
                  <a href="https://www.instagram.com/perfect__system?igsh=MTViNndycnJxY3F2OA==" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-800 tracking-tight hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                    Instagram
                  </a>
                </div>
              </section>

            </div>

            {/* RIGHT 1-COLUMN: FLOATING QUICK INQUIRY CONSOLE */}
            <div className="space-y-6 lg:col-span-1 lg:sticky lg:top-28">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md flex flex-col">
                
                <div className="text-center mb-6">
                  <span className="inline-block text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 border border-blue-100/50 rounded-full tracking-wider mb-4">
                    Procurement Portal
                  </span>
                  <h3 className="text-lg font-black text-slate-950 tracking-tight mb-2">Need Custom Sizing?</h3>
                  <p className="text-xs text-slate-400 leading-relaxed px-2">
                    Get custom specifications, deployment layout support, and commercial quotes tailored for your facility.
                  </p>
                </div>

                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    
                    {/* INVISIBLE BOT TRAP COMPONENT */}
                    <div className="absolute opacity-0 -z-50 pointer-events-none w-0 h-0 overflow-hidden">
                      <input
                        type="text"
                        name="contact_bot_trap"
                        value={botTrap}
                        onChange={(e) => setBotTrap(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Name Input */}
                    <div>
                      <input 
                        type="text" 
                        name="Client Name" 
                        required 
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-slate-800 placeholder-slate-400 font-medium"
                        placeholder="Full Name *" 
                      />
                    </div>

                    {/* Contact Fields Row */}
                    <div>
                      <input 
                        type="tel" 
                        name="Phone Number" 
                        required 
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-slate-800 placeholder-slate-400 font-medium"
                        placeholder="Phone Number *" 
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <input 
                        type="email" 
                        name="Email Address" 
                        required 
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-slate-800 placeholder-slate-400 font-medium"
                        placeholder="Email Address *" 
                      />
                    </div>

                    {/* Custom Category Selection Component */}
                    <div className="relative">
                      <input type="hidden" name="Selected Category" value={selectedCategory} required />

                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-left text-slate-800 font-medium shadow-sm transition-all"
                      >
                        <span className={selectedCategory ? "text-slate-800" : "text-slate-400"}>
                          {selectedCategory || "Select Category *"}
                        </span>
                        <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute z-50 mt-1 w-full rounded-xl bg-white border border-slate-200/60 shadow-xl max-h-48 overflow-y-auto py-1">
                          {[
                            "CCTV & Security Systems",
                            "EPABX & Intercom Systems",
                            "UPS, Inverters & Batteries",
                            "Solar Energy Solutions",
                            "Networking & Server Solutions",
                            "Fire Alarm & Safety Systems"
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setSelectedCategory(item);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 font-medium flex items-center justify-between
                                ${selectedCategory === item 
                                  ? 'bg-green-50 text-green-700 font-bold' 
                                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                            >
                              <span>{item}</span>
                              {selectedCategory === item && <span className="text-xs text-green-600">✓</span>}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Requirements Textarea Input */}
                    <div>
                      <textarea
                        rows={4}
                        name="Custom Requirements"
                        placeholder="What exactly are you looking for? (e.g. 4 MP dome camera layout configurations...)"
                        value={customMessage}
                        onChange={(e) => setCustomMessage(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-slate-800 placeholder-slate-400 resize-none font-medium leading-relaxed"
                      />
                    </div>

                    {errorMessage && (
                      <p className="text-xs text-red-500 font-semibold bg-red-50 border border-red-100 px-3 py-2 rounded-xl">{errorMessage}</p>
                    )}

                    {/* Submit Action Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full py-3 font-semibold rounded-full bg-slate-950 text-white shadow-md hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-200 text-sm tracking-wide"
                    >
                      {isSubmitting ? "Sending..." : "Enquiry Now"}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Message Received!</h3>
                    <p className="text-xs text-slate-500 leading-relaxed px-1">
                      Thank you. Your layout requests have been cataloged. Our desk specialists will review the scope criteria and contact you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)} 
                      className="w-full mt-2 py-2.5 border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest rounded-full hover:border-slate-800 bg-white transition-all shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>
        </main>

      </div>
    </>
  );
};

export default Contact;
