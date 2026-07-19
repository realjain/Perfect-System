import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../../assets/logo2.png";

const Navbar = ({ onGetQuoteClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isHomePage = location.pathname === "/";

  const handleScrollAnchor = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (!isHomePage) {
      navigate(`/${targetId}`);
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // PREMIUM GLASS ACTIVE TABS: No cheap backgrounds. Just soft transparency & clean contrast.
  const linkStyles = ({ isActive }) => 
    `px-5 py-2 rounded-full transition-all duration-300 uppercase tracking-wider text-xs font-semibold border ${
      isActive && location.hash === ""
        ? "bg-white/60 text-slate-950 font-black border-slate-200/80 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] text-[12.5px]" 
        : "text-slate-500 border-transparent hover:text-slate-950 hover:bg-white/30"
    }`;

  const anchorStyles = (hashId) =>
    `px-5 py-2 rounded-full transition-all duration-300 uppercase tracking-wider text-xs font-semibold border ${
      isHomePage && location.hash === hashId
        ? "bg-white/60 text-slate-950 font-black border-slate-200/80 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] text-[12.5px]"
        : "text-slate-500 border-transparent hover:text-slate-950 hover:bg-white/30"
    }`;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur-lg border-b border-slate-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.02)] py-4">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* LOGO & NAME */}
          <Link to="/" className="flex gap-2.5 justify-center items-center cursor-pointer transition-all duration-300 group">
            <img src={logo} alt="Perfect System Professional Business Logo" className="h-10 md:h-11 w-auto object-contain" />
            <span className="text-base md:text-2xl text-blue-950 font-black tracking-tight uppercase underline underline-offset-3 decoration-2">
              Perfect System
            </span>
          </Link>

          {/* DESKTOP PREMIUM CAPSULE */}
          <div className="hidden md:flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-slate-100/60 backdrop-blur-md border border-slate-200/40 text-slate-600 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
            <NavLink className={linkStyles} to="/">Home</NavLink>
            <a className={anchorStyles('#services')} href="#services" onClick={(e) => handleScrollAnchor(e, '#services')}>Services</a>
            <NavLink className={linkStyles} to="/ProductCatelog">Catalog</NavLink>
            <a className={anchorStyles('#about')} href="#about" onClick={(e) => handleScrollAnchor(e, '#about')}>About Us</a>
            <NavLink className={linkStyles} to="/contact">Contact</NavLink>
            <NavLink className={linkStyles} to="/accessories">Accessories</NavLink>
          </div>

          {/* UTILITY SPACE */}
          <div className="hidden md:block"></div>

          {/* MOBILE BURGER */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-slate-700 focus:outline-none p-1"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
        </div>
      </nav>

      {/* MOBILE TRAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-24 px-6 flex flex-col gap-4 md:hidden">
          <NavLink 
            className={({ isActive }) => `text-lg font-black uppercase pb-2 border-b border-slate-100 ${isActive && location.hash === "" ? "text-slate-950 tracking-wide" : "text-slate-400"}`} 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <a 
            className={`text-lg font-black uppercase pb-2 border-b border-slate-100 ${isHomePage && location.hash === "#services" ? "text-slate-950 tracking-wide" : "text-slate-400"}`} 
            href="#services" 
            onClick={(e) => handleScrollAnchor(e, '#services')}
          >
            Services
          </a>
          <NavLink 
            className={({ isActive }) => `text-lg font-black uppercase pb-2 border-b border-slate-100 ${isActive ? "text-slate-950 tracking-wide" : "text-slate-400"}`} 
            to="/ProductCatelog" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Product Catalog
          </NavLink>
          <a 
            className={`text-lg font-black uppercase pb-2 border-b border-slate-100 ${isHomePage && location.hash === "#about" ? "text-slate-950 tracking-wide" : "text-slate-400"}`} 
            href="#about" 
            onClick={(e) => handleScrollAnchor(e, '#about')}
          >
            About Us
          </a>
          <NavLink 
            className={({ isActive }) => `text-lg font-black uppercase pb-2 border-b border-slate-100 ${isActive ? "text-slate-950 tracking-wide" : "text-slate-400"}`} 
            to="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink 
            className={({ isActive }) => `text-lg font-black uppercase pb-2 border-b border-slate-100 ${isActive ? "text-slate-950 tracking-wide" : "text-slate-400"}`} 
            to="/accessories" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accessories
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;