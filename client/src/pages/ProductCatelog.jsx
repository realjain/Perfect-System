import { Phone } from "lucide-react"; // Make sure your Phone icon import is active at the top
import CategoryCard from "../components/Catelog/CategoryCard";
import { catalogData } from "../components/Catelog/ProductModelData";
import { Helmet } from "react-helmet-async";

const ProductCatelog = () => {
  const catelogDataKeys = Object.keys(catalogData);

  return (
    /* FIX 1: Changed 'py-8' to 'pt-28 pb-8' (or pt-32) 
       This pushes the entire content down so it doesn't get hidden under your fixed header.
      
    */
   <>
   <Helmet>
    <title>Product Catalog | Perfect System</title>
    <meta name="description" content="Explore our technical inventory of enterprise communication hardware, power backup systems, security setups, and IT infrastructure tools." />
    <meta name="keywords" content="electronics catalog, enterprise hardware, telecom products, power backup inventory" />
  </Helmet>
    <div className='max-w-7xl mx-auto px-4 pt-28 pb-8 flex flex-col gap-8'>
      
      {/* HEADER ROW: Groups the actions together on the top right */}
      <div className='flex justify-between items-center w-full flex-wrap gap-4'>
        {/* Optional: Title can go here on the left side later */}
        <div /> 
        
        {/* Action Buttons Container */}
        <div className='flex items-center gap-3 ml-auto'>
          <a
            href="tel:+919414157713"
            className="flex items-center justify-center gap-2 border border-slate-200 hover:border-emerald-500/40 hover:bg-emerald-50/30 transition-all duration-300 px-6 py-3 rounded-xl bg-white shadow-sm text-slate-700 font-semibold text-xs uppercase tracking-wider"
          >
            <Phone size={16} className="text-amber-500" />
            Call Us
          </a>

          <a 
            className='inline-flex items-center gap-2 px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-md transition-all duration-200 hover:scale-105 cursor-pointer' 
            href='/catelogPageImages/Brochure.pdf' 
            target='_blank' 
            rel="noopener noreferrer" 
          >
            Our Catalog PDF
          </a>
        </div>
      </div>

      {/* FIX 2: Replaced 'gap-4' with explicit 'gap-x-6 gap-y-6' 
         This tightens the vertical distance between rows of cards.
      */}
      <div className='flex gap-x-6 gap-y-6 flex-wrap justify-start items-stretch'>
        {catelogDataKeys.map((key) => {
          const productCard = catalogData[key];
          return (
            <CategoryCard
              key={key}
              id={key}
              img={productCard.img}
              title={productCard.title}
              description={productCard.description}
              brands={productCard.brands}
            />
          );
        })}
      </div>

      {/* BROCHURE SPLASH SECTION */}
      {/* ... keeping the rest of your commented out code clean ... */}

    </div>
    </>
  );
};

export default ProductCatelog;
