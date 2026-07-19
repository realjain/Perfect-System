import React from 'react';
import { Shield, Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const coreServices = [
    "EPABX & Intercom Systems",
    "UPS, Inverters & Batteries",
    "CCTV & Security Systems",
    "GPS Tracking",
    "Computers & IT Products",
    "Networking & Infrastructure",
    "Leased Line & Corporate Wi-Fi",
    "Solar Energy Solutions",
    "Fire Alarm & Safety Systems",
    "Audio & PA Systems",
    "Projectors & Automation",
    "Cyber Security Solutions",
    "Customised Solutions"
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Our Services", href: "#" },
    { name: "Contact & Support", href: "#" }
  ];

  return (
    <footer className="w-full bg-slate-950 text-slate-400 pt-20 pb-8 border-t border-slate-900 relative overflow-hidden">
      {/* Subtle brand blue background glow layer */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Column 1: Brand & Identity (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-3 text-white">
              {/* Dynamic Tech Grid Icon */}
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/20">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-wider uppercase">
                Perfect System
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering high-availability digital networks, smart surveillance arrays, continuous power configurations, and customized technology architecture since 1995.
            </p>

            <div className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-wider text-slate-500 mt-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Mon - Sat: 10:30 AM - 5:00 PM</span>
              </div>
            </div>
            
          </div>

          {/* Column 2: Quick Links Navigation (2 Columns) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white border-l-2 border-blue-600 pl-3">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Complete Services Roster (3 Columns) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white border-l-2 border-blue-600 pl-3">
              Solutions
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs font-medium">
              {coreServices.map((service, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-200 block truncate">
                    • {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Action Contacts (3 Columns) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white border-l-2 border-blue-600 pl-3">
              Get In Touch
            </h4>
            
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Udaipur, Rajasthan, India
                </span>
              </li>
              
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="tel:+919414157713" className="hover:text-blue-400 transition-colors">
                  +91 94141 57713
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="mailto:perfectsystronics@yahoo.com" className="hover:text-blue-400 transition-colors truncate">
                  perfectsystronics@yahoo.com
                </a>
              </li>
            </ul>
          <div className='py-2'>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white border-l-2 border-blue-600 pl-3">
              Follow Us
            </h4>
            <div className='flex gap-2 py-3 px-2'>

            <a href="https://www.instagram.com/perfect__system?igsh=MTViNndycnJxY3F2OA==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-sm hover:-translate-y-0.5">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-sm hover:-translate-y-0.5">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
            </div>
          </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms Compliance */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600">
          <div>
            © {currentYear} Perfect System. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
