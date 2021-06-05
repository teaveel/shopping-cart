const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 8;
  const page = Number(req.query.page) || 1;
  const sortBy = req.query.sortBy || "Newest";
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
  let sortFilter;
  if (sortBy == "Newest") sortFilter = { $sort: { createdAt: -1 } };
  else sortFilter = { $sort: { rate: -1 } };
  const filters = {
    ...brandFilter,
    ...categoryFilter,
    ...priceFilter,
    ...colorFilter,
  };
  try {
    const products = await Product.aggregate([
      sortFilter,
      {
        $match: filters,
      },
      { $skip: (page - 1) * pageSize },
      {
        $limit: pageSize,
      },
    ]);
    const totalProducts = await Product.countDocuments({});
    res.json({ totalProducts, products });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProducts,
  getProductById,
};
