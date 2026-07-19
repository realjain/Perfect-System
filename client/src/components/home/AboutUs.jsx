import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Briefcase, Users, Layers, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 20 }
    }
  };

  const stats = [
    { icon: <Shield className="w-5 h-5 text-blue-600" />, count: "30+", title: "Years Experience" },
    { icon: <Briefcase className="w-5 h-5 text-blue-600" />, count: "500+", title: "Projects Completed" },
    { icon: <Users className="w-5 h-5 text-blue-600" />, count: "500+", title: "Happy Clients" },
    { icon: <Layers className="w-5 h-5 text-blue-600" />, count: "End-to-End", title: "Solutions" },
  ];

  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden border-b border-slate-100">
      
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none opacity-60" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-50 rounded-full blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Left Column: Image & Floating Badge */}
          <motion.div className="lg:col-span-5 relative" variants={itemVariants}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] group">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" 
                alt="Perfect System Technical Deployment"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-transparent mix-blend-multiply" />
            </div>

            {/* Floating Experience Emblem */}
            <motion.div 
              className="absolute -bottom-6 -right-4 sm:right-6 bg-slate-900 border border-slate-800 text-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-[260px] backdrop-blur-md"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center font-black text-lg text-white shrink-0 shadow-md shadow-blue-600/20">
                30+
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-extrabold tracking-widest text-blue-500">Milestone</span>
                <span className="text-sm font-bold text-slate-100 leading-snug mt-0.5">Years of Unmatched Excellence</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content Block */}
          <motion.div className="lg:col-span-7 flex flex-col" variants={itemVariants}>
            
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest w-fit mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              Trusted Since 1995
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              About Perfect System
            </h2>

            <div className="mt-6 space-y-4 text-sm md:text-base text-slate-600 leading-relaxed">
              <p>
                Trusted Since 1995, <strong className="font-bold text-slate-900">Perfect System</strong> has been delivering reliable security, communication, power backup, networking, and IT infrastructure solutions across Udaipur and surrounding regions.
              </p>
              <p>
                With over 30 years of industry experience, we help businesses, institutions, and homeowners build secure, connected, and efficient environments through high-quality products, expert installation, and dependable support.
              </p>
              <p className="text-sm text-slate-500 bg-slate-50 border-l-2 border-blue-600 p-4 rounded-r-xl font-medium">
                From CCTV surveillance, EPABX & intercom systems, fire safety solutions, UPS & inverter systems, solar power, networking, Wi-Fi, servers, computers, and office automation, we provide complete technology solutions under one roof.
              </p>
              <p>
                Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for banks, schools, hospitals, hotels, industries, and commercial organizations throughout Rajasthan.
              </p>
            </div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white border border-slate-200/70 p-4 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between"
                  whileHover={{ y: -3 }}
                >
                  <div className="w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div className="mt-4">
                    <div className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                      {stat.count}
                    </div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5 leading-tight">
                      {stat.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Group */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
              {/* <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-sm uppercase tracking-wider text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-2 group">
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform" />
              </button> */}

              <Link to="/contact"className="w-full sm:w-auto px-8 py-3.5 border border-slate-200  hover:border-slate-800 bg-blue-600 text-white hover:text-slate-900 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors duration-200 text-center">
                Contact Us
              </Link>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;