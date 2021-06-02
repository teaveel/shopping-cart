const router = require("express").Router();

const Product = require("../models/Product");

const {
  getProducts,
  getProductById,
} = require("../controllers/productController");
//GET all products
//route GET /api/products
router.get("/hello", (req, res) => {
  console.log("test GET");
  res.send("hello");
});
router.get("/", (req, res) => {
  getProducts(req, res);

  // let {page, perPage, amount, sortBy, categories, brands, color, price} = req.query;
  // page = page || 1;
  // const products = Product.find({});
  // if(sortBy) {

  // }
  // if(categories) {

  // }
  // if(brands) {

  // }
  // if(color) {

  // }
  // if(price) {

  // }
  // return res.json({
  //     "data" : "data"
  // })
});

router.get("/:id", (req, res) => {
  getProductById(req, res);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  Product.create(req.body);
  res.json({
    result: "success",
  });
});

module.exports = router;
