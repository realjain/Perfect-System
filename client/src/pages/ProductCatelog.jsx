import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Search, 
  X, 
  PackageSearch, 
  Loader2, 
  FileDown, 
  Sparkles, 
  Layers,
  ArrowRight
} from "lucide-react";
import CategoryCard from "../components/Catelog/CategoryCard";
import { Helmet } from "react-helmet-async";
import { getProducts } from "../api/products";

const ProductCatelog = () => {
  const [catalogData, setCatalogData] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    getProducts()
      .then((data) => {
        setCatalogData(data || {});
      })
      .catch((error) => {
        console.error("FAILED TO LOAD CATALOG:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Filter products across category key, title, description, and brand lists
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const entries = Object.entries(catalogData || {});

    return entries.filter(([key, product]) => {
      // 1. Category Pill Filter Match
      if (selectedFilter !== 'all' && key !== selectedFilter) {
        return false;
      }

      // 2. Search Query Match
      if (!query) return true;

      const titleMatch = product.title?.toLowerCase().includes(query);
      const descMatch = product.description?.toLowerCase().includes(query);
      const brandMatch = Array.isArray(product.brands) && product.brands.some((b) =>
        b.toLowerCase().includes(query)
      );

      return titleMatch || descMatch || brandMatch;
    });
  }, [catalogData, searchQuery, selectedFilter]);

  const allEntries = useMemo(() => Object.entries(catalogData || {}), [catalogData]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-slate-50 text-slate-600">
        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-blue-700" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Loading Hardware Inventory...
        </span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Product Catalog | Perfect System Digital Infrastructure</title>
        <meta 
          name="description" 
          content="Explore our technical inventory of enterprise communication hardware, power backup systems, security setups, and IT infrastructure tools." 
        />
      </Helmet>

      <div className="relative min-h-screen bg-slate-50/70 pb-24 select-none antialiased">
        
        {/* Soft Ambient Brand Lighting */}
        <div className="pointer-events-none absolute top-12 left-1/4 h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-[100px]" />
        <div className="pointer-events-none absolute top-36 right-10 h-[400px] w-[400px] rounded-full bg-emerald-600/5 blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36">
          
          {/* ================= HERO HEADER ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80"
          >
            <div>
              {/* Eyebrow Badge */}
              {/* <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/95 px-3.5 py-1.5 text-xs font-bold tracking-wide shadow-2xs backdrop-blur-md mb-3.5">
                <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="uppercase text-[11px] font-extrabold text-slate-800">
                  Certified <span className="text-blue-700">OEM Hardware</span> Inventory
                </span>
              </div> */}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                Products & Solutions
              </h1>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
               Explore reliable products and complete solutions for security, communication, power backup, networking, and business technology.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+919414157713"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-2xs transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>Call Us</span>
              </a>

              {/* <a 
                href="/catelogPageImages/Brochure.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-blue-700/20 hover:shadow-lg hover:shadow-blue-800/30 transition-all active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4" />
                <span>Catalog PDF</span>
              </a> */}
            </div>
          </motion.div>

          {/* ================= SEARCH & LIQUID FILTER CONTROLS ================= */}
          <div className="mt-8 flex flex-col gap-4">
            
            {/* Search Input Bar & Inventory Counter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative w-full sm:max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="h-4 w-4 text-blue-700" />
                </div>
                <input
                  type="text"
                  placeholder="Search EPBAX, CCTV cameras, inverters, UPS..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200/90 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-slate-700">
                  <Layers className="w-3.5 h-3.5 text-blue-700" />
                  <span>{allEntries.length} Major Divisions</span>
                </span>
              </div>
            </div>

            {/* Liquid Gliding Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
              <button
                type="button"
                onClick={() => setSelectedFilter('all')}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer ${
                  selectedFilter === 'all'
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200/80 hover:bg-slate-50'
                }`}
              >
                {selectedFilter === 'all' && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 bg-blue-700 rounded-xl shadow-md shadow-blue-700/25 -z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">All Solutions</span>
              </button>

              {allEntries.map(([key, product]) => {
                const isActive = selectedFilter === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedFilter(key)}
                    className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200/80 hover:bg-slate-50'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterTab"
                        className="absolute inset-0 bg-blue-700 rounded-xl shadow-md shadow-blue-700/25 -z-0"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">
                      {product.title?.split('&')[0]?.trim() || product.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Indicators */}
          {(searchQuery.trim() || selectedFilter !== 'all') && (
            <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-600">
              <span>
                Showing <strong className="text-slate-950">{filteredProducts.length}</strong> matching categories
                {searchQuery && <> for "<span className="text-blue-700 font-bold">{searchQuery}</span>"</>}
              </span>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('all');
                }}
                className="text-blue-700 font-bold hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* ================= PRODUCT CARDS GRID ================= */}
          <div className="mt-8">
            {filteredProducts.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
              >
                <AnimatePresence>
                  {filteredProducts.map(([key, productCard]) => (
                    <motion.div
                      key={key}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="h-full flex"
                    >
                      <CategoryCard
                        id={key}
                        img={productCard.img}
                        title={productCard.title}
                        cardImageCatalog={productCard.cardImageCatalog}
                        cardImageHome={productCard.cardImageHome}
                        description={productCard.description}
                        brands={productCard.brands}
                        isHomePage={false}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* ================= EMPTY STATE ================= */
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border border-slate-200/80 p-8 shadow-xs mt-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center mb-4 shadow-2xs">
                  <PackageSearch className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-slate-950">No matching hardware found</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm">
                  We couldn't find any category or brand matching "<span className="font-bold text-slate-800">{searchQuery}</span>".
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedFilter('all');
                  }}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all active:scale-95 shadow-md shadow-blue-700/20 cursor-pointer"
                >
                  <span>Reset All Filters</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductCatelog;