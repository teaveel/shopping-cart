const router = require("express").Router();

const Product = require("../model/Product")

router.get("/",  (req, res) => {
    const {page, amount, sortBy} = req.query;
    const products = Product.find({});
    console.log(products)
    res.json({
        "data" : "data"
    })
})

router.post("/",async (req, res) => {
    console.log(req.body)
    Product.create(req.body)
    res.json({
        "result" : "success"
    })
})

module.exports = router;