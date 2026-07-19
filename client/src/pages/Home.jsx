import React from 'react'
import AboutUs from '../components/home/AboutUs'
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero'
import ServicesGrid from '../components/home/Services'
import TrustedBy from '../components/home/TrustedBy'
import GetQuote from '../components/home/GetQuote'
import { useState } from 'react'

const Home = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  return (
    // FIXED: Changed h-screen to min-h-screen and removed relative containment restrictions
    <div className="w-full min-h-screen bg-slate-50 flex flex-col">
      <Helmet>
    <title>Perfect System | Secure & Connected Digital Infrastructure</title>
    <meta name="description" content="Premium provider of EPABX, UPS, Inverter Batteries, Smart Surveillance, Networking, Solar, and IT Infrastructure Solutions." />
    <meta name="keywords" content="EPABX, UPS, Inverter Batteries, CCTV Cameras, Fire Systems, Servers, IT Infrastructure, Solar Panels, Perfect System" />
  </Helmet>
        <Hero onGetQuoteClick={() => setIsQuoteOpen(true)} />
        <TrustedBy />
        <AboutUs />
        <ServicesGrid isProductsPage={false} />
        <GetQuote isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)}/>
        
    </div>
  )
}

export default Home;