const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductsByFilter = async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 8;
  const page = Number(req.query.pageNumber) || 1;
  const name = req.query.name || "";
  const category = req.query.category || "";
  const brand = req.query.brand || "";
  const color = req.query.color || "";
  const minPrice = Number(req.query.minPrice) || 0;
  const maxPrice = Number(req.query.maxPrice) || 0;
  req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
  const max =
    req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;
  const rating =
    req.query.rating && Number(req.query.rating) !== 0
      ? Number(req.query.rating)
      : 0;

  const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
  const brandFilter = brand ? { brand } : {};
  const categoryFilter = category ? { category } : {};
  const colorFilter = color ? { color } : {};
  const priceFilter =
    minPrice && maxPrice ? { price: { $gte: min, $lte: max } } : {};
  const ratingFilter = rating ? { rating: { $gte: rating } } : {};
  const sortOrder =
    order === "lowest"
      ? { price: 1 }
      : order === "highest"
      ? { price: -1 }
      : order === "toprated"
      ? { rating: -1 }
      : { _id: -1 };
  const count = await Product.count({
    ...brandFilter,
    ...nameFilter,
    ...categoryFilter,
    ...priceFilter,
    ...ratingFilter,
  });
  const products = await Product.find({
    ...brandFilter,
    ...nameFilter,
    ...categoryFilter,
    ...priceFilter,
    ...ratingFilter,
  })
    .populate("brand", "brand.name brand.logo")
    .sort(sortOrder)
    .skip(pageSize * (page - 1))
    .limit(pageSize);
  res.send({ products, page, pages: Math.ceil(count / pageSize) });
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(id);
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
