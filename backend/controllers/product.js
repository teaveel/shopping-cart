const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 8;
  const page = Number(req.query.page) || 1;
  const categories = req.query.categories || "";
  const brands = req.query.brands || "";
  const color = req.query.color || "";
  const minPrice = Number(req.query.min) || 0;
  const maxPrice = Number(req.query.max) || 0;

  const brandFilter = brands
    ? {
        brand: { $in: brands.split(",") },
      }
    : {};

  const categoryFilter = categories
    ? { category: { $in: categories.split(",") } }
    : {};

  const priceFilter = {
    price: maxPrice ? { $gte: minPrice, $lte: maxPrice } : { $gte: minPrice },
  };
  const colorFilter = color
    ? {
        color: color,
      }
    : {};

  const filters = {
    ...brandFilter,
    ...categoryFilter,
    ...priceFilter,
    ...colorFilter,
  };

  try {
    const products = await Product.aggregate([
      {
        $match: filters,
      },
      { $skip: (page - 1) * pageSize },
      {
        $limit: pageSize,
      },
    ]);
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log(typeof req.params.id);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProducts,
  getProductById,
};
