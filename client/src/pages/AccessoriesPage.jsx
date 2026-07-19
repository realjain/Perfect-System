import React from 'react';
import AccesseriesCard from '../components/Accessories/AccesseriesCard';
import { accessoriesData } from '../components/Accessories/accessoriesData';
import { Helmet } from 'react-helmet-async';

const AccessoriesPage = () => {
  const accessoriesKeys = Object.keys(accessoriesData);

  return (
    /* 1. Clears your fixed header perfectly using pt-28.
       2. Uniform spacing between sections using gap-12.
    */
   <>
   <Helmet>
    <title>IT & Security Accessories | Perfect System</title>
    <meta name="description" content="Find premium networking cables, server rack modules, auxiliary power supplies, and essential installation accessories." />
    <meta name="keywords" content="networking accessories, server racks, CCTV cables, security hardware components" />
  </Helmet>
 
    <div className='max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col gap-12 bg-transparent'>
      
      {/* Intro Header */}
      <div className="border-b border-slate-100 pb-4">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          System Accessories
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Browse compatible components, cables, and installation essentials.
        </p>
      </div>

      {accessoriesKeys.map((key) => {
        const category = accessoriesData[key];
        
        // Grab the pre-structured array of objects from accessoriesData
        const individualItems = category.items || [];

        return (
          <div key={key} className="flex flex-col gap-4">
            
            {/* Minimalist Professional Header */}
            <div className="flex items-baseline justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  {category.title}
                </h2>
                <span className="text-[11px] font-medium text-blue-600 bg-blue-50/60 px-2.5 py-0.5 rounded-full border border-blue-100/50">
                  {individualItems.length} items available
                </span>
              </div>
            </div>

            {/* Premium Horizontal Scroll Track */}
            <div className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x scroll-smooth 
                            scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
              {individualItems.map((item, index) => (
                <div 
                  key={index} 
                  className="snap-start shrink-0 w-[220px] md:w-[250px]"
                >
                  <AccesseriesCard 
                    title={item.title}  
                    img={item.img}       
                  />
                </div>
              ))}
            </div>

          </div>
        );
      })}
    </div>
     </>
  )
}

export default AccessoriesPage;