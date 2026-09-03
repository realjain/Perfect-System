// import React, { useState, useEffect, useMemo, useRef } from 'react';
// import { NavLink, useLocation, useNavigate, Link } from 'react-router-dom';
// import { Menu, X, Search, Phone, ArrowRight, Layers } from 'lucide-react';
// import logo from "../../assets/logo2.png";
// import { getProducts } from "../../api/products";

// const Navbar = ({ onGetQuoteClick }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [productsData, setProductsData] = useState({});
//   const searchInputRef = useRef(null);

//   const isHomePage = location.pathname === "/";

//   // Fetch products once for instant searching across the navbar
//   useEffect(() => {
//     getProducts()
//       .then((data) => setProductsData(data || {}))
//       .catch((err) => console.error("Failed to load products in navbar:", err));
//   }, []);

//   // Lock scroll when search modal or mobile drawer is open
//   useEffect(() => {
//     if (isSearchOpen || isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isSearchOpen, isMobileMenuOpen]);

//   // Focus input on search modal open & allow ESC key to close
//   useEffect(() => {
//     if (isSearchOpen) {
//       setTimeout(() => searchInputRef.current?.focus(), 100);
//       const handleKeyDown = (e) => {
//         if (e.key === 'Escape') setIsSearchOpen(false);
//       };
//       window.addEventListener('keydown', handleKeyDown);
//       return () => window.removeEventListener('keydown', handleKeyDown);
//     }
//   }, [isSearchOpen]);

//   // Global '/' keyboard shortcut to trigger search
//   useEffect(() => {
//     const handleGlobalSlash = (e) => {
//       if (
//         e.key === '/' && 
//         !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)
//       ) {
//         e.preventDefault();
//         setIsSearchOpen(true);
//       }
//     };

//     window.addEventListener('keydown', handleGlobalSlash);
//     return () => window.removeEventListener('keydown', handleGlobalSlash);
//   }, []);

//   // Real-time search filter
//   const searchResults = useMemo(() => {
//     const query = searchQuery.trim().toLowerCase();
//     if (!query) return [];

//     return Object.entries(productsData).filter(([_, product]) => {
//       const titleMatch = product.title?.toLowerCase().includes(query);
//       const descMatch = product.description?.toLowerCase().includes(query);
//       const brandMatch = Array.isArray(product.brands) && product.brands.some((b) =>
//         b.toLowerCase().includes(query)
//       );
//       return titleMatch || descMatch || brandMatch;
//     });
//   }, [productsData, searchQuery]);

//   const handleScrollAnchor = (e, targetId) => {
//     e.preventDefault();
//     setIsMobileMenuOpen(false);

//     if (isHomePage) {
//       const element = document.querySelector(targetId);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else {
//       navigate(`/${targetId}`);
//     }
//   };

//   // Fixed weight (font-semibold) across normal, hover, and active states
//   const linkStyles = ({ isActive }) => 
//     `px-3.5 py-1.5 rounded-full transition-all duration-200 uppercase tracking-wider text-xs font-semibold border ${
//       isActive && location.hash === ""
//         ? "bg-white/90 text-blue-700 border-white/80 shadow-2xs backdrop-blur-md" 
//         : "text-slate-600 border-transparent hover:text-slate-900 hover:bg-white/50"
//     }`;

//   const anchorStyles = (hashId) =>
//     `px-3.5 py-1.5 rounded-full transition-all duration-200 uppercase tracking-wider text-xs font-semibold border ${
//       isHomePage && location.hash === hashId
//         ? "bg-white/90 text-blue-700 border-white/80 shadow-2xs backdrop-blur-md"
//         : "text-slate-600 border-transparent hover:text-slate-900 hover:bg-white/50"
//     }`;

//   return (
//     <>
//       {/* Glassmorphic Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-xl saturate-150 border-b border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3 select-none">
//         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
          
//           {/* Logo */}
//           <Link to="/" className="flex gap-2.5 items-center cursor-pointer transition-transform duration-200 hover:scale-[1.01] shrink-0">
//             <img src={logo} alt="Perfect System Logo" className="h-9 md:h-10 w-auto object-contain" />
//             <span className="text-base md:text-xl text-slate-950 font-black tracking-tight uppercase">
//               Perfect System
//             </span>
//           </Link>

//           {/* Desktop Navigation Glass Capsule */}
//           <div className="hidden lg:flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-slate-200/40 backdrop-blur-lg border border-white/80 shadow-inner">
//             <NavLink className={linkStyles} to="/">Home</NavLink>
//             <a className={anchorStyles('#services')} href="/#services" onClick={(e) => handleScrollAnchor(e, '#services')}>Services</a>
//             <NavLink className={linkStyles} to="/ProductCatelog">Catalog</NavLink>
//             <a className={anchorStyles('#about')} href="/#about" onClick={(e) => handleScrollAnchor(e, '#about')}>About Us</a>
//             <NavLink className={linkStyles} to="/contact">Contact</NavLink>
//             <NavLink className={linkStyles} to="/accessories">Accessories</NavLink>
//           </div>

//           {/* Right Controls: Glass Search Pill + Call CTA */}
//           <div className="hidden md:flex items-center gap-2.5 shrink-0">
            
//             {/* Search Pill */}
//             <button
//               type="button"
//               onClick={() => setIsSearchOpen(true)}
//               className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/70 hover:bg-white/95 text-slate-600 hover:text-slate-900 border border-white/90 shadow-2xs backdrop-blur-md transition-all duration-200 text-xs font-semibold cursor-pointer active:scale-95"
//               aria-label="Search Catalog"
//             >
//               <Search className="w-3.5 h-3.5 text-blue-700" />
//               <span>Search</span>
//               <kbd className="text-[10px] font-bold text-slate-400 border border-slate-200 bg-white/80 px-1.5 py-0.2 rounded-md shadow-2xs">
//                 /
//               </kbd>
//             </button>

//             {/* Call CTA */}
//             <a 
//               href="tel:+919414157713"
//               className="inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-700 hover:bg-blue-800 px-4.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-700/20 backdrop-blur-sm transition-all active:scale-95 cursor-pointer"
//             >
//               <Phone className="w-3.5 h-3.5" />
//               <span>Call Us</span>
//             </a>
//           </div>

//           {/* Mobile Right Action Bar */}
//           <div className="flex items-center gap-2 md:hidden">
//             <button
//               type="button"
//               onClick={() => setIsSearchOpen(true)}
//               className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-white/90 text-slate-700 text-xs font-semibold backdrop-blur-md shadow-2xs"
//               aria-label="Search"
//             >
//               <Search size={14} className="text-blue-700" />
//               <span>Search</span>
//             </button>

//             <button 
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
//               className="text-slate-800 p-1.5 rounded-xl hover:bg-white/60 transition-colors"
//               aria-label="Toggle Navigation Menu"
//             >
//               {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
          
//         </div>
//       </nav>

//       {/* ================= SEARCH MODAL POPUP ================= */}
//       {isSearchOpen && (
//         <div 
//           className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-150"
//           onClick={() => setIsSearchOpen(false)}
//         >
//           <div 
//             className="bg-white/95 backdrop-blur-2xl w-full max-w-2xl rounded-3xl shadow-2xl border border-white/80 overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Search Input Header */}
//             <div className="p-4 border-b border-slate-100/80 flex items-center gap-3 bg-slate-50/50">
//               <Search className="w-5 h-5 text-blue-700 shrink-0 ml-1" />
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 placeholder="Search EPBAX, CCTV cameras, inverters, UPS, servers..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
//               />
//               {searchQuery ? (
//                 <button 
//                   type="button" 
//                   onClick={() => setSearchQuery('')}
//                   className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               ) : (
//                 <span className="text-[10px] uppercase font-bold text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded-md hidden sm:inline bg-white">
//                   ESC
//                 </span>
//               )}
//             </div>

//             {/* Results List */}
//             <div className="max-h-[380px] overflow-y-auto divide-y divide-slate-100/80">
//               {searchQuery.trim().length > 0 ? (
//                 searchResults.length > 0 ? (
//                   searchResults.map(([key, item]) => (
//                     <div
//                       key={key}
//                       onClick={() => {
//                         setIsSearchOpen(false);
//                         setSearchQuery('');
//                         navigate(`/ProductDetails/${key}`);
//                       }}
//                       className="p-3.5 hover:bg-blue-50/50 flex items-center justify-between gap-3 cursor-pointer transition-colors group"
//                     >
//                       <div className="flex items-center gap-3 min-w-0">
//                         <div className="w-11 h-11 rounded-xl bg-white/80 border border-slate-200/80 overflow-hidden shrink-0 flex items-center justify-center">
//                           {item.cardImageCatalog || item.cardImageHome || item.img ? (
//                             <img
//                               src={item.cardImageCatalog || item.cardImageHome || item.img}
//                               alt={item.title}
//                               className="w-full h-full object-cover"
//                             />
//                           ) : (
//                             <Layers className="w-4 h-4 text-slate-400" />
//                           )}
//                         </div>
//                         <div className="truncate">
//                           <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors truncate">
//                             {item.title}
//                           </h4>
//                           <p className="text-xs text-slate-500 truncate mt-0.5">
//                             {item.description}
//                           </p>
//                         </div>
//                       </div>
//                       <ArrowRight className="w-4 h-4 text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
//                     </div>
//                   ))
//                 ) : (
//                   <div className="p-8 text-center">
//                     <p className="text-sm text-slate-500">
//                       No products found for "<strong className="text-slate-800">{searchQuery}</strong>"
//                     </p>
//                   </div>
//                 )
//               ) : (
//                 <div className="p-6 text-center text-xs text-slate-400">
//                   Type a product category, brand, or component to quickly browse the catalog.
//                 </div>
//               )}
//             </div>

//             {/* Modal Footer */}
//             <div className="bg-slate-50/80 px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
//               <Link 
//                 to="/ProductCatelog" 
//                 onClick={() => setIsSearchOpen(false)}
//                 className="text-blue-700 hover:underline font-semibold"
//               >
//                 View Full Catalog →
//               </Link>
//               <span className="text-[11px] text-slate-400">Perfect System Hardware</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ================= MOBILE GLASS DRAWER ================= */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-40 bg-white/80 backdrop-blur-2xl pt-24 px-6 flex flex-col gap-3 md:hidden border-b border-white/60">
//           <NavLink 
//             className={({ isActive }) => `text-base font-semibold uppercase py-2.5 border-b border-slate-200/50 ${isActive && location.hash === "" ? "text-blue-700" : "text-slate-700"}`} 
//             to="/" 
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Home
//           </NavLink>
//           <a 
//             className={`text-base font-semibold uppercase py-2.5 border-b border-slate-200/50 ${isHomePage && location.hash === "#services" ? "text-blue-700" : "text-slate-700"}`} 
//             href="/#services" 
//             onClick={(e) => handleScrollAnchor(e, '#services')}
//           >
//             Services
//           </a>
//           <NavLink 
//             className={({ isActive }) => `text-base font-semibold uppercase py-2.5 border-b border-slate-200/50 ${isActive ? "text-blue-700" : "text-slate-700"}`} 
//             to="/ProductCatelog" 
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Product Catalog
//           </NavLink>
//           <a 
//             className={`text-base font-semibold uppercase py-2.5 border-b border-slate-200/50 ${isHomePage && location.hash === "#about" ? "text-blue-700" : "text-slate-700"}`} 
//             href="/#about" 
//             onClick={(e) => handleScrollAnchor(e, '#about')}
//           >
//             About Us
//           </a>
//           <NavLink 
//             className={({ isActive }) => `text-base font-semibold uppercase py-2.5 border-b border-slate-200/50 ${isActive ? "text-blue-700" : "text-slate-700"}`} 
//             to="/contact" 
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Contact
//           </NavLink>
//           <NavLink 
//             className={({ isActive }) => `text-base font-semibold uppercase py-2.5 border-b border-slate-200/50 ${isActive ? "text-blue-700" : "text-slate-700"}`} 
//             to="/accessories" 
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Accessories
//           </NavLink>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { NavLink, useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, Search, Phone, ArrowRight, Layers, Wrench, Package } from 'lucide-react';
import logo from "../../assets/logo2.png";
import { getProducts } from "../../api/products";
import { getAccessories } from "../../api/accessories";

const Navbar = ({ onGetQuoteClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [productsData, setProductsData] = useState({});
  const [accessoriesData, setAccessoriesData] = useState({});
  const searchInputRef = useRef(null);

  const isHomePage = location.pathname === "/";

  // Fetch both products and accessories in parallel
  useEffect(() => {
    Promise.all([
      getProducts().catch((err) => {
        console.error("Failed to load products in navbar:", err);
        return {};
      }),
      getAccessories().catch((err) => {
        console.error("Failed to load accessories in navbar:", err);
        return {};
      })
    ]).then(([products, accessories]) => {
      setProductsData(products || {});
      setAccessoriesData(accessories || {});
    });
  }, []);

  // Lock scroll when search modal or mobile drawer is open
  useEffect(() => {
    if (isSearchOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen, isMobileMenuOpen]);

  // Focus input on search modal open & ESC key to close
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsSearchOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isSearchOpen]);

  // Global '/' keyboard shortcut to trigger search
  useEffect(() => {
    const handleGlobalSlash = (e) => {
      if (
        e.key === '/' && 
        !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleGlobalSlash);
    return () => window.removeEventListener('keydown', handleGlobalSlash);
  }, []);

  // Combined real-time search across both Products & Accessories
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return { products: [], accessories: [], total: 0 };

    // 1. Filter Catalog Products
    const matchedProducts = Object.entries(productsData)
      .filter(([_, product]) => {
        const titleMatch = product.title?.toLowerCase().includes(query);
        const descMatch = product.description?.toLowerCase().includes(query);
        const brandMatch = Array.isArray(product.brands) && product.brands.some((b) =>
          b.toLowerCase().includes(query)
        );
        return titleMatch || descMatch || brandMatch;
      })
      .map(([key, product]) => ({
        id: key,
        type: 'product',
        title: product.title,
        subtitle: product.description || 'Enterprise Solution',
        image: product.cardImageCatalog || product.cardImageHome || product.img,
        targetUrl: `/ProductDetails/${key}`
      }));

    // 2. Filter System Accessories (passes #categoryKey for automatic anchor scroll)
    const matchedAccessories = Object.entries(accessoriesData).flatMap(([categoryKey, category]) => {
      const items = category.items || [];
      return items
        .filter((item) => {
          const titleMatch = item.title?.toLowerCase().includes(query);
          const catMatch = category.title?.toLowerCase().includes(query) || categoryKey.toLowerCase().includes(query);
          return titleMatch || catMatch;
        })
        .map((item) => ({
          id: `${categoryKey}-${item.title}`,
          type: 'accessory',
          title: item.title,
          subtitle: `Accessory • ${category.title || categoryKey}`,
          image: item.img,
          targetUrl: `/accessories#${categoryKey}`,
          categoryKey
        }));
    });

    return {
      products: matchedProducts,
      accessories: matchedAccessories,
      total: matchedProducts.length + matchedAccessories.length
    };
  }, [productsData, accessoriesData, searchQuery]);

  const handleResultClick = (targetUrl, categoryKey = null) => {
    setIsSearchOpen(false);
    setSearchQuery('');

    // If user is already on /accessories, scroll directly to element
    if (location.pathname === '/accessories' && categoryKey) {
      window.location.hash = categoryKey;
      const element = document.getElementById(categoryKey);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(targetUrl);
    }
  };

  const handleScrollAnchor = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (isHomePage) {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/${targetId}`);
    }
  };

  const linkStyles = ({ isActive }) => 
    `px-3.5 py-1.5 rounded-full transition-all duration-200 uppercase tracking-wider text-xs font-semibold border ${
      isActive && location.hash === ""
        ? "bg-white/90 text-blue-700 border-white/80 shadow-2xs backdrop-blur-md" 
        : "text-slate-600 border-transparent hover:text-slate-900 hover:bg-white/50"
    }`;

  const anchorStyles = (hashId) =>
    `px-3.5 py-1.5 rounded-full transition-all duration-200 uppercase tracking-wider text-xs font-semibold border ${
      isHomePage && location.hash === hashId
        ? "bg-white/90 text-blue-700 border-white/80 shadow-2xs backdrop-blur-md"
        : "text-slate-600 border-transparent hover:text-slate-900 hover:bg-white/50"
    }`;

  return (
    <>
      {/* Glassmorphic Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-xl saturate-150 border-b border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3 select-none">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex gap-2.5 items-center cursor-pointer transition-transform duration-200 hover:scale-[1.01] shrink-0">
            <img src={logo} alt="Perfect System Logo" className="h-9 md:h-10 w-auto object-contain" />
            <span className="text-base md:text-xl text-slate-950 font-black tracking-tight uppercase">
              Perfect System
            </span>
          </Link>

          {/* Desktop Navigation Glass Capsule */}
          <div className="hidden lg:flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-slate-200/40 backdrop-blur-lg border border-white/80 shadow-inner">
            <NavLink className={linkStyles} to="/">Home</NavLink>
            <a className={anchorStyles('#services')} href="/#services" onClick={(e) => handleScrollAnchor(e, '#services')}>Services</a>
            <NavLink className={linkStyles} to="/ProductCatelog">Catalog</NavLink>
            <a className={anchorStyles('#about')} href="/#about" onClick={(e) => handleScrollAnchor(e, '#about')}>About Us</a>
            <NavLink className={linkStyles} to="/contact">Contact</NavLink>
            <NavLink className={linkStyles} to="/accessories">Accessories</NavLink>
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/70 hover:bg-white/95 text-slate-600 hover:text-slate-900 border border-white/90 shadow-2xs backdrop-blur-md transition-all duration-200 text-xs font-semibold cursor-pointer active:scale-95"
              aria-label="Search Catalog & Accessories"
            >
              <Search className="w-3.5 h-3.5 text-blue-700" />
              <span>Search</span>
              <kbd className="text-[10px] font-bold text-slate-400 border border-slate-200 bg-white/80 px-1.5 py-0.2 rounded-md shadow-2xs">
                /
              </kbd>
            </button>

            <a 
              href="tel:+919414157713"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-700 hover:bg-blue-800 px-4.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-700/20 backdrop-blur-sm transition-all active:scale-95 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Action Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-white/90 text-slate-700 text-xs font-semibold backdrop-blur-md shadow-2xs"
              aria-label="Search"
            >
              <Search size={14} className="text-blue-700" />
              <span>Search</span>
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-slate-800 p-1.5 rounded-xl hover:bg-white/60 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          
        </div>
      </nav>

      {/* ================= GLOBAL SEARCH MODAL ================= */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setIsSearchOpen(false)}
        >
          <div 
            className="bg-white/95 backdrop-blur-2xl w-full max-w-2xl rounded-3xl shadow-2xl border border-white/80 overflow-hidden flex flex-col max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="p-4 border-b border-slate-100/80 flex items-center gap-3 bg-slate-50/50 shrink-0">
              <Search className="w-5 h-5 text-blue-700 shrink-0 ml-1" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search products, cameras, inverters, cables, racks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none font-medium"
              />
              {searchQuery ? (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                  aria-label="Clear Search"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <span className="text-[10px] uppercase font-bold text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded-md hidden sm:inline bg-white">
                  ESC
                </span>
              )}
            </div>

            {/* Combined Results Feed */}
            <div className="overflow-y-auto divide-y divide-slate-100/80 flex-1">
              {searchQuery.trim().length > 0 ? (
                searchResults.total > 0 ? (
                  <>
                    {/* Products Section */}
                    {searchResults.products.length > 0 && (
                      <div className="p-2">
                        <div className="px-3 py-1.5 text-[11px] font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                          <Package className="w-3.5 h-3.5" />
                          <span>Product Catalog ({searchResults.products.length})</span>
                        </div>
                        {searchResults.products.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleResultClick(item.targetUrl)}
                            className="p-3 hover:bg-blue-50/50 rounded-2xl flex items-center justify-between gap-3 cursor-pointer transition-colors group"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 overflow-hidden shrink-0 flex items-center justify-center p-1 shadow-2xs">
                                {item.image ? (
                                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                                ) : (
                                  <Layers className="w-4 h-4 text-slate-400" />
                                )}
                              </div>
                              <div className="truncate">
                                <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors truncate">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-slate-500 truncate mt-0.5 font-normal">
                                  {item.subtitle}
                                </p>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60 uppercase tracking-wider shrink-0">
                              Product
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Accessories Section */}
                    {searchResults.accessories.length > 0 && (
                      <div className="p-2">
                        <div className="px-3 py-1.5 text-[11px] font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                          <Wrench className="w-3.5 h-3.5" />
                          <span>Hardware &amp; Accessories ({searchResults.accessories.length})</span>
                        </div>
                        {searchResults.accessories.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleResultClick(item.targetUrl, item.categoryKey)}
                            className="p-3 hover:bg-emerald-50/50 rounded-2xl flex items-center justify-between gap-3 cursor-pointer transition-colors group"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 overflow-hidden shrink-0 flex items-center justify-center p-1 shadow-2xs">
                                {item.image ? (
                                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                                ) : (
                                  <Wrench className="w-4 h-4 text-slate-400" />
                                )}
                              </div>
                              <div className="truncate">
                                <h4 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-slate-500 truncate mt-0.5 font-normal">
                                  {item.subtitle}
                                </p>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 uppercase tracking-wider shrink-0">
                              Accessory
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-sm text-slate-500">
                      No catalog products or accessories found for "<strong className="text-slate-800">{searchQuery}</strong>"
                    </p>
                  </div>
                )
              ) : (
                <div className="p-6 text-center text-xs text-slate-400">
                  Search across complete product categories, camera models, inverters, cables, and installation spares.
                </div>
              )}
            </div>

            {/* Modal Quick Links Footer */}
            <div className="bg-slate-50/80 px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 shrink-0">
              <div className="flex items-center gap-4">
                <Link 
                  to="/ProductCatelog" 
                  onClick={() => setIsSearchOpen(false)}
                  className="text-blue-700 hover:underline font-semibold"
                >
                  All Products →
                </Link>
                <Link 
                  to="/accessories" 
                  onClick={() => setIsSearchOpen(false)}
                  className="text-emerald-700 hover:underline font-semibold"
                >
                  All Accessories →
                </Link>
              </div>
              <span className="text-[11px] text-slate-400">Perfect System Hardware</span>
            </div>
          </div>
        </div>
      )}

      {/* ================= MOBILE DRAWER ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/80 backdrop-blur-2xl pt-24 px-6 flex flex-col gap-3 md:hidden border-b border-white/60">
          <NavLink 
            className={({ isActive }) => `text-base font-semibold uppercase py-2.5 border-b border-slate-200/50 ${isActive && location.hash === "" ? "text-blue-700" : "text-slate-700"}`} 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <a 
            className={`text-base font-semibold uppercase py-2.5 border-b border-slate-200/50 ${isHomePage && location.hash === "#services" ? "text-blue-700" : "text-slate-700"}`} 
            href="/#services" 
            onClick={(e) => handleScrollAnchor(e, '#services')}
          >
            Services
          </a>
          <NavLink 
            className={({ isActive }) => `text-base font-semibold uppercase py-2.5 border-b border-slate-200/50 ${isActive ? "text-blue-700" : "text-slate-700"}`} 
            to="/ProductCatelog" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Product Catalog
          </NavLink>
          <a 
            className={`text-base font-semibold uppercase py-2.5 border-b border-slate-200/50 ${isHomePage && location.hash === "#about" ? "text-blue-700" : "text-slate-700"}`} 
            href="/#about" 
            onClick={(e) => handleScrollAnchor(e, '#about')}
          >
            About Us
          </a>
          <NavLink 
            className={({ isActive }) => `text-base font-semibold uppercase py-2.5 border-b border-slate-200/50 ${isActive ? "text-blue-700" : "text-slate-700"}`} 
            to="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink 
            className={({ isActive }) => `text-base font-semibold uppercase py-2.5 border-b border-slate-200/50 ${isActive ? "text-blue-700" : "text-slate-700"}`} 
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