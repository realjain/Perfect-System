import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  X, 
  PackageSearch, 
  Loader2, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Sparkles,
  Phone,
  ArrowRight
} from 'lucide-react';
import AccesseriesCard from '../components/Accessories/AccesseriesCard';
import { getAccessories } from "../api/accessories";

// Reusable Category Carousel Row with navigation controls
const CategoryRow = ({ categoryKey, title, items }) => {
  const rowRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [items]);

  const handleScroll = (direction) => {
    if (rowRef.current) {
      const scrollDistance = rowRef.current.clientWidth * 0.75;
      rowRef.current.scrollBy({
        left: direction === 'left' ? -scrollDistance : scrollDistance,
        behavior: 'smooth'
      });
      setTimeout(checkScrollability, 350);
    }
  };

  return (
    <div id={categoryKey} className="flex flex-col gap-4 scroll-mt-32">
      {/* Category Header Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
            {title}
          </h2>
          <span className="text-[11px] font-bold text-blue-700 bg-blue-50/80 px-2.5 py-0.5 rounded-full border border-blue-200/80">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {/* Desktop Carousel Navigation Arrows */}
        <div className="hidden sm:flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-blue-700 hover:border-blue-400 hover:bg-blue-50/40 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all active:scale-90 shadow-2xs cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-blue-700 hover:border-blue-400 hover:bg-blue-50/40 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all active:scale-90 shadow-2xs cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={rowRef}
        onScroll={checkScrollability}
        className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="snap-start shrink-0 w-[200px] sm:w-[230px] md:w-[250px]"
          >
            <AccesseriesCard
              title={item.title}
              img={item.img}
              {...item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const AccessoriesPage = () => {
  const location = useLocation();
  const [accessoriesData, setAccessoriesData] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    getAccessories()
      .then((data) => {
        setAccessoriesData(data || {});
      })
      .catch((error) => {
        console.error("Failed to load accessories:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Cross-page anchor listener for Navbar search clicks
  useEffect(() => {
    if (!loading && location.hash) {
      const targetId = location.hash.replace('#', '');
      setSelectedCategory('all');
      setSearchQuery('');

      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [loading, location.hash]);

  // Collect all items into a single flat list
  const allItems = useMemo(() => {
    return Object.entries(accessoriesData).flatMap(([categoryKey, category]) => {
      const items = category.items || [];
      return items.map((item) => ({
        ...item,
        categoryKey,
        categoryTitle: category.title || categoryKey
      }));
    });
  }, [accessoriesData]);

  // Real-time search and filter results
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    let list = allItems;

    if (selectedCategory !== 'all') {
      list = list.filter((item) => item.categoryKey === selectedCategory);
    }

    if (!query) return list;

    return list.filter((item) => {
      const titleMatch = item.title?.toLowerCase().includes(query);
      const catMatch = item.categoryTitle?.toLowerCase().includes(query);
      return titleMatch || catMatch;
    });
  }, [allItems, searchQuery, selectedCategory]);

  const isFiltering = searchQuery.trim().length > 0 || selectedCategory !== 'all';
  const categoriesList = Object.entries(accessoriesData);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-slate-50 text-slate-600">
        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-blue-700" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Loading hardware accessories...
        </span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>IT, Telecom &amp; Security Accessories | Perfect System</title>
        <meta
          name="description"
          content="Find certified networking patch cords, server rack shelves, CCTV power supplies, connectors, and mounting hardware."
        />
        <meta
          name="keywords"
          content="networking accessories, server racks, CCTV cables, security hardware components, Udaipur telecom spares"
        />
      </Helmet>

      <div className="relative min-h-screen bg-slate-50/70 pb-20 select-none antialiased">
        {/* Soft Background Brand Glows */}
        <div className="pointer-events-none absolute top-16 left-1/4 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="pointer-events-none absolute top-40 right-10 h-80 w-80 rounded-full bg-emerald-600/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 flex flex-col gap-8">
          
          {/* ================= HEADER SECTION ================= */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/95 px-3.5 py-1.5 text-xs font-bold tracking-wide shadow-2xs backdrop-blur-md mb-3.5">
                <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="uppercase text-[11px] font-extrabold text-slate-800">
                  OEM <span className="text-blue-700">Components</span> &amp; Installation Hardware
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                System Accessories
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
                Certified patch cords, server rack shelves, surveillance connectors, and power components designed for continuous infrastructure uptime.
              </p>
            </div>

            {/* Quick Actions (Call Us CTA) */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+919414157713"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-2xs transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>Call For Spares</span>
              </a>
            </div>
          </div>

          {/* ================= CONTROLS: SEARCH & CATEGORY PILLS ================= */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Search Input Bar */}
              <div className="relative w-full sm:max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="h-4 w-4 text-blue-700" />
                </div>
                <input
                  type="text"
                  placeholder="Search cables, racks, connectors, adaptors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200/90 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Total Item Count Badge */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-slate-700">
                  <Layers className="w-3.5 h-3.5 text-blue-700" />
                  <span>{allItems.length} Total Components</span>
                </span>
              </div>
            </div>

            {/* Quick Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-blue-700 text-white shadow-sm shadow-blue-700/20'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                All Accessories
              </button>

              {categoriesList.map(([catKey, catObj]) => (
                <button
                  key={catKey}
                  type="button"
                  onClick={() => setSelectedCategory(catKey)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    selectedCategory === catKey
                      ? 'bg-blue-700 text-white shadow-sm shadow-blue-700/20'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {catObj.title}
                </button>
              ))}
            </div>
          </div>

          {/* ================= VIEW 1: FILTER/SEARCH ACTIVE GRID ================= */}
          {isFiltering ? (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                <span>
                  Showing <strong className="text-slate-900">{searchResults.length}</strong> matching items
                  {searchQuery && <> for "<span className="text-blue-700">{searchQuery}</span>"</>}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-blue-700 font-bold hover:underline cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">
                  <AnimatePresence>
                    {searchResults.map((item, index) => (
                      <motion.div
                        key={`${item.title}-${index}`}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="h-full flex"
                      >
                        <AccesseriesCard
                          title={item.title}
                          img={item.img}
                          {...item}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                /* Empty Search State */
                <div className="flex flex-col items-center justify-center py-16 text-center bg-white rounded-3xl border border-slate-200/80 p-8 shadow-xs">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center mb-4 shadow-2xs">
                    <PackageSearch className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-black text-slate-950">No accessories found</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm">
                    No hardware component matches your query. Try searching for generic keywords like "cable", "rack", or "connector".
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all active:scale-95 shadow-md shadow-blue-700/20"
                  >
                    <span>View All Accessories</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            /* ================= VIEW 2: DEFAULT CATEGORIZED CAROUSELS ================= */
            <div className="flex flex-col gap-12">
              {categoriesList.map(([key, category]) => {
                const items = category?.items || [];
                if (items.length === 0) return null;

                return (
                  <CategoryRow
                    key={key}
                    categoryKey={key}
                    title={category.title}
                    items={items}
                  />
                );
              })}
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default AccessoriesPage;