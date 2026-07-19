import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';


const GetQuote = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.target);
    
    // ⚠️ PASTE YOUR COPIED WEB3FORMS ACCESS KEY HERE ⚠️
    formData.append("access_key", import.meta.env.ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        e.target.reset();
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark Blur Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose} 
      />
      
      {/* Interactive Modal Sheet Box */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-200 w-full max-w-md relative z-10 transform transition-all">
        
        {/* Close Button Trigger */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <>
            {/* Form Headers */}
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-wide mb-1">
              Request A Quote
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Fill out your connection requirements and our desk team will contact you with a customized setup layout estimation.
            </p>

            {/* Web3Forms Integration Core Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  name="Client Name" 
                  required 
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 transition-colors" 
                  placeholder="Enter your full name" 
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  name="Phone Number" 
                  required 
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 transition-colors" 
                  placeholder="+91 98765 43210" 
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="Email Address" 
                  required 
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 transition-colors" 
                  placeholder="name@company.com" 
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Required System Solution
                </label>
                <select 
                  name="Requested Service Type" 
                  required 
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-700 bg-white cursor-pointer transition-colors"
                >
                  <option value="CCTV & Security Systems">CCTV & Security Systems</option>
                  <option value="EPABX & Intercom Systems">EPABX & Intercom Systems</option>
                  <option value="UPS, Inverters & Batteries">UPS, Inverters & Batteries</option>
                  <option value="Solar Energy Solutions">Solar Energy Solutions</option>
                  <option value="Networking & Server Solutions">Networking & Server Solutions</option>
                  <option value="Fire Alarm & Safety Systems">Fire Alarm & Safety Systems</option>
                </select>
              </div>
               <div>
  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
    Custom Message (Write what you are looking for...)
  </label>
  <textarea 
    name="Custom Message" 
    required 
    rows={3}
    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 transition-colors resize-none" 
    placeholder="Example: I need a 4MP IP CCTV system with a 4-channel NVR..." 
  />
</div>

              {/* Dynamic Failure Error Alert */}
              {errorMessage && (
                <p className="text-xs text-red-500 font-semibold bg-red-50 border border-red-100 px-3 py-2 rounded-xl">
                  {errorMessage}
                </p>
              )}

              {/* Form Submission Button Trigger */}
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md shadow-blue-600/10 mt-2 active:scale-98"
              >
                {isSubmitting ? "Sending Request..." : "Submit Quote Request"}
              </button>
            </form>
          </>
        ) : (
          /* Premium Submission Success State Block */
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-wide">
              Request Received!
            </h3>
            <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
              Thank you. Your layout requirements have been safely routed to our desk. A system configuration specialist will connect with you shortly.
            </p>
            <button 
              onClick={onClose} 
              className="px-6 py-2.5 border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest rounded-xl hover:border-slate-800 bg-white transition-all shadow-sm"
            >
              Close Panel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetQuote;