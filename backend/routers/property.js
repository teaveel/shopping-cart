const router = require("express").Router();

const Product = require("../models/Product");

const {
  getColors,
  getCategories,
  getBrands,
} = require("../controllers/property");

router.get("/categories", getCategories);

router.get("/brands", getBrands);

router.get("/colors", getColors);

module.exports = router;
