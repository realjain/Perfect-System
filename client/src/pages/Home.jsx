import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import ServicesGrid from '../components/home/Services';
import TrustedBy from '../components/home/TrustedBy';
import AboutUs from '../components/home/AboutUs';
import GetQuote from '../components/home/GetQuote';
import { getProducts } from '../api/products';

const Home = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [productsData, setProductsData] = useState(null);
  const location = useLocation();

  // Fetch product catalog data for home services carousel
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProductsData(data || {});
      })
      .catch((error) => {
        console.error("Failed to load products for homepage:", error);
      });
  }, []);

  // Handle smooth scroll navigation for hash anchors (#services, #about, etc.)
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);

      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);

        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col">
      <Helmet>
        <title>Perfect System | Secure &amp; Connected Digital Infrastructure</title>
        <meta
          name="description"
          content="Premium provider of EPABX, UPS, Inverter Batteries, Smart Surveillance, Networking, Solar, and IT Infrastructure Solutions."
        />
        <meta
          name="keywords"
          content="EPABX, UPS, Inverter Batteries, CCTV Cameras, Fire Systems, Servers, IT Infrastructure, Solar Panels, Perfect System"
        />
      </Helmet>

      <Hero onGetQuoteClick={() => setIsQuoteOpen(true)} />
      <ServicesGrid isProductsPage={false} customData={productsData} />
      <TrustedBy />
      <AboutUs />
      <GetQuote isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};

export default Home;