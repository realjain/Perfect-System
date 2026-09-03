// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
// import Footer from '../../client/src/components/home/Footer'
import Footer from './components/home/Footer';
import Home from './pages/Home'; // Your current homepage component

import ScrollToTop from './ScrollToTop';
// import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductCatelog from './pages/ProductCatelog';
import ProductModel from './components/Catelog/ProductModel';
import AccesseriesCard from './components/Accessories/AccesseriesCard';
import AccessoriesPage from './pages/AccessoriesPage';
import { getProducts } from './api/products';

function App() {

   useEffect(() => {
    getProducts()
      .then((data) => {
        console.log("PRODUCT DATA FROM BACKEND:", data);
      })
      .catch((error) => {
        console.error("API ERROR:", error);
      });
  }, []);
  return (
    
    
    <Router>
      <ScrollToTop/>
      
      <div className='min-h-screen flex flex-col'>

      <Navbar />
      <main className='flex-grow'>

      <Routes>
        <Route path="/" element={<Home />} />
      

        <Route path="/productCatelog" element={<ProductCatelog />} />
        <Route path="/productDetails/:category" element={<ProductModel/>}/>
        <Route path="/accessories" element={<AccessoriesPage/>}/>
        
        {/* <Route path="/product" element={<Products/>} /> */}
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </main>
      </div>
      <Footer />
    </Router>
   
  );
}

export default App;