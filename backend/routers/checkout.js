const router = require("express").Router();

const { postCheckout } = require("../controllers/checkout");

router.post("/", postCheckout);

module.exports = router;
