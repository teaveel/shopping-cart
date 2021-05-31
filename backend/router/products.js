const router = require("express").Router();

const Product = require("../model/Product")

router.get("/",  (req, res) => {
    const id = req.query.id;
    if(id) {
        return res.json({
            type : "lay 1"
        })
    }
    let {page, perPage, amount, sortBy, categories, brands, color, price} = req.query;
    page = page || 1;
    const products = Product.find({});
    if(sortBy) {

    }
    if(categories) {

    }
    if(brands) {

    }
    if(color) {

    }
    if(price) {

    }
    return res.json({
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