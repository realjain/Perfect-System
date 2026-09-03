const express = require("express");
const accessoriesData = require("../data/accessoriesData");
const cloudinary = require("../config/cloudinary");

const router = express.Router();

const getImageUrl = (publicId) => {
  if (!publicId) return null;

  return cloudinary.url(publicId, {
    secure: true,
  });
};

router.get("/", (req, res) => {
  const accessories = accessoriesData.accessoriesData;

  const accessoriesWithImages = {};

  Object.entries(accessories).forEach(([id, category]) => {
    accessoriesWithImages[id] = {
      ...category,

      items: (category.items || []).map((item) => ({
        ...item,
        img: getImageUrl(item.img),
      })),
    };
  });

  res.json(accessoriesWithImages);
});

module.exports = router;