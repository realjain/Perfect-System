import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Briefcase, 
  Users, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Award,
  Clock
} from 'lucide-react';

const AboutUs = () => {
  const location = useLocation();

  // Cross-page anchor scroll listener
  useEffect(() => {
    if (location.hash === '#about') {
      const element = document.getElementById('about');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const stats = [
    { 
      icon: <Clock className="w-5 h-5 text-blue-700" />, 
      count: "30+", 
      title: "Years Experience",
      bg: "bg-blue-50/80 border-blue-100" 
    },
    { 
      icon: <Briefcase className="w-5 h-5 text-amber-600" />, 
      count: "500+", 
      title: "Projects Done",
      bg: "bg-amber-50/80 border-amber-100" 
    },
    { 
      icon: <Users className="w-5 h-5 text-emerald-600" />, 
      count: "500+", 
      title: "Happy Clients",
      bg: "bg-emerald-50/80 border-emerald-100" 
    },
    { 
      icon: <Layers className="w-5 h-5 text-blue-600" />, 
      count: "End-to-End", 
      title: "Full AMC Support",
      bg: "bg-slate-50 border-slate-200/80" 
    },
  ];

  const valuePoints = [
    "Turnkey CCTV surveillance & IP intercom infrastructure",
    "Commercial power backup, inverters & solar grid setups",
    "Dedicated 24/7 AMC maintenance & on-site repair teams"
  ];

  return (
    <section 
      id="about"
      className="relative w-full bg-white py-16 sm:py-24 md:py-28 overflow-hidden border-b border-slate-100 scroll-mt-20 select-none"
    >
      {/* Soft Ambient Brand Lighting */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-emerald-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          
          {/* ================= LEFT COLUMN: IMAGE & FLOATING MILESTONE ================= */}
          <motion.div className="lg:col-span-5 relative" variants={itemVariants}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 aspect-[4/5] sm:aspect-square lg:aspect-[4/5] group">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" 
                alt="Perfect System Technical Deployment"
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent pointer-events-none" />
              
              {/* Bottom Inset Branding Tag */}
              <div className="absolute bottom-6 left-6 right-6 hidden sm:block pointer-events-none">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/90 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-sm">
                  Field Tested Engineering
                </span>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-slate-950 text-white p-4 sm:p-5 rounded-2xl shadow-xl shadow-slate-950/20 border border-slate-800 flex items-center gap-4 max-w-[270px] backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center font-black text-lg text-white shrink-0 shadow-md shadow-blue-700/30">
                30+
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                  <Award className="w-3 h-3" />
                  <span>Established 1993</span>
                </div>
                <span className="text-xs font-bold text-slate-100 leading-snug mt-0.5">
                  Years of Mission-Critical Service
                </span>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: EDITORIAL CONTENT ================= */}
          <motion.div className="lg:col-span-7 flex flex-col items-start" variants={itemVariants}>
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/60 px-3.5 py-1.5 text-xs font-bold tracking-wide text-blue-900 shadow-2xs backdrop-blur-md mb-4">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="uppercase text-[11px] font-extrabold">
                About <span className="text-blue-700">Perfect System</span>
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              Enterprise Telecom, Power &amp; Security Engineering
            </h2>

            {/* Copy Paragraphs */}
            <div className="mt-5 space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <p>
                Founded with a commitment to engineering excellence, <strong className="font-bold text-slate-900">Perfect System</strong> is a premier distributor and system integrator of enterprise communications, smart security surveillance, heavy power backup, and IT infrastructure.
              </p>
              
              <p>
                With over three decades of field expertise across commercial institutions, manufacturing plants, and residential architectures, we deliver resilient hardware architectures backed by prompt AMC service and genuine OEM spares.
              </p>
            </div>

            {/* Value Checkpoints */}
            <div className="mt-5 w-full bg-slate-50 border-l-4 border-blue-700 p-4 rounded-r-2xl space-y-2">
              {valuePoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-7 w-full">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 p-3.5 sm:p-4 rounded-2xl shadow-2xs transition-all hover:border-blue-400 hover:shadow-md flex flex-col justify-between"
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${stat.bg}`}>
                    {stat.icon}
                  </div>
                  <div className="mt-3">
                    <div className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                      {stat.count}
                    </div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5 leading-tight">
                      {stat.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call To Action */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3.5 items-center w-full sm:w-auto">
              <Link 
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-700/25 transition-all active:scale-[0.98]"
              >
                <span>Get in Touch With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;