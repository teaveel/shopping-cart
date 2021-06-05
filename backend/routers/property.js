const router = require("express").Router();

const { getCategories, getBrands } = require("../controllers/property");

router.get("/categories", getCategories);

router.get("/brands", getBrands);

module.exports = router;
