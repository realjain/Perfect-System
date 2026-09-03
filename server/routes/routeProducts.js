const express=require('express')
const catalogData=require('../data/ProductModelData')

const router=express.Router();
const cloudinary = require("../config/cloudinary");
const getImageUrl = (publicId) => {
  if (!publicId) return null;

  return cloudinary.url(publicId, {
    secure: true,
  });
};

router.get("/", (req, res) => {
  const products = catalogData.catalogData;

  const productsWithImages = {};

  Object.entries(products).forEach(([id, product]) => {
    productsWithImages[id] = {
      ...product,

      img: getImageUrl(product.img),

      cardImageHome: getImageUrl(product.cardImageHome),

      cardImageCatalog: getImageUrl(product.cardImageCatalog),

      gallery: (product.gallery || []).map(getImageUrl),
    };
  });

  res.json(productsWithImages);
});
module.exports=router