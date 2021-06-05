const Product = require("../models/Product");

const getCategories = async (req, res) => {
  try {
    const categories = await Product.aggregate([
      {
        $group: {
          _id: "$category",
        },
      },
    ]);
    res.json(categories.map((c) => c._id).sort());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getBrands = async (req, res) => {
  try {
    const brands = await Product.aggregate([
      {
        $group: {
          _id: "$brand",
        },
      },
    ]);
    res.json(brands.map((c) => c._id).sort());
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getCategories,
  getBrands,
};
