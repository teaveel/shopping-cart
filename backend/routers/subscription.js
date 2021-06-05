const router = require("express").Router();

const { postSubscription } = require("../controllers/subscription");

router.post("/", postSubscription);

module.exports = router;
