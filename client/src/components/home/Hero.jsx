import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Award
} from 'lucide-react';

const Hero = ({ onGetQuoteClick }) => {
  const [botTrap, setBotTrap] = useState('');
  const [isThrottled, setIsThrottled] = useState(false);

  useEffect(() => {
    let timer;
    if (isThrottled) {
      timer = setTimeout(() => {
        setIsThrottled(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isThrottled]);

  const handleInquiryClick = (e) => {
    if (botTrap) return;
    if (isThrottled) {
      e?.preventDefault?.();
      return;
    }
    setIsThrottled(true);
    if (typeof onGetQuoteClick === 'function') {
      onGetQuoteClick(e);
    }
  };

  const servicePills = [
    'Sales',
    'Service',
    'AMC',
    'Repair',
    'Rental',
    'Consultancy'
  ];

  const metrics = [
    { 
      value: '30+', 
      label: 'Years Experience', 
      desc: 'Serving enterprises with trusted hardware since 1993.',
      icon: Sparkles,
      iconBg: 'bg-blue-50 text-blue-700'
    },
    { 
      value: '500+', 
      label: 'Projects Done', 
      desc: 'Delivered mission-critical installations across domains.',
      icon: Award,
      iconBg: 'bg-amber-50 text-amber-700'
    },
    { 
      value: '98%', 
      label: 'Client Satisfaction', 
      desc: 'Backed by quick-response AMC & maintenance support.',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-700'
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-50/70 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 select-none">
      {/* Honeypot field for anti-bot protection */}
      <input
        type="text"
        name="company_trap_id"
        value={botTrap}
        onChange={(e) => setBotTrap(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
      />

      {/* Subtle Technical Grid Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_70%,transparent_100%)]" 
        aria-hidden="true"
      />

      {/* Ultra-Soft Ambient Glows (Very Faint 4-5% Opacity) */}
      <div 
        className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" 
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute top-1/4 right-0 h-96 w-96 rounded-full bg-emerald-600/5 blur-3xl" 
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* ================= LEFT SIDE: CONTENT ================= */}
          <div className="flex flex-col items-start lg:col-span-6">
            
            {/* Eyebrow Badge */}
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-800 shadow-2xs backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="uppercase text-[11px] font-bold tracking-wider text-slate-600">
                Smart <span className="text-slate-300">•</span> Secure <span className="text-slate-300">•</span> Connected
              </span>
            </div> */}

            {/* Main Headline */}
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Building Secure &amp;{' '}
              <span className="bg-gradient-to-r from-blue-700 to-teal-700 bg-clip-text text-transparent">
                Connected Digital
              </span>{' '}
              Infrastructure
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base font-normal leading-relaxed text-slate-600 sm:text-lg sm:leading-relaxed">
              EPBAX, UPS &amp; Inverter Batteries, Smart Surveillance, Networking, Solar, and IT Infrastructure Solutions for Homes, Offices, and Enterprises.
            </p>

            {/* Service Pills */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {servicePills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-lg border border-slate-200/90 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs transition-colors hover:border-slate-300 hover:text-blue-700 hover:bg-slate-50/50"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Call To Actions */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              {/* Primary Button */}
              <button
                type="button"
                onClick={handleInquiryClick}
                disabled={isThrottled}
                className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-700/20 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-800/25 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 transition-all cursor-pointer"
              >
                <span>{isThrottled ? 'Connecting...' : 'Inquire Now'}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary Button */}
              <a
                href="tel:+919414157713"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-2xs hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-blue-700" />
                <span>Call Us</span>
              </a>
            </div>

            {/* Enterprise Assurance */}
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Complete Solutions, Professional Service & AMC Support</span>
            </div>

          </div>

          {/* ================= RIGHT SIDE: 3D SCHEMATIC ================= */}
          <div className="relative flex items-center justify-center lg:col-span-6">
            
            {/* Ground Plane Depth Shadow */}
            <div 
              className="pointer-events-none absolute bottom-4 h-24 w-4/5 rounded-[100%] bg-slate-900/10 blur-2xl"
              aria-hidden="true"
            />

            {/* Canvas Area */}
            <div 
              className="relative w-full max-w-[560px] select-none"
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src="https://res.cloudinary.com/ylikuxjy/image/upload/v1787929111/banner3.0-Photoroom.png"
                alt="Perfect System Infrastructure: CCTV, EPABX, UPS, Batteries and Networking"
                draggable="false"
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_15px_30px_rgba(15,23,42,0.10)] pointer-events-none select-none"
                loading="eager"
              />
            </div>
          </div>

        </div>

        {/* ================= BOTTOM METRICS BAR ================= */}
        <div className="mt-12 border-t border-slate-200/80 pt-8 sm:mt-16 sm:pt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {metrics.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-2xs transition-all hover:border-slate-300"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${stat.iconBg}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-black tracking-tight text-slate-950 lg:text-3xl">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 sm:text-sm">
                      {stat.label}
                    </div>
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;