const Subscription = require("../models/Subscription");

const postSubscription = async (req, res) => {
  try {
    const data = req.body;

    const newSubscription = new Subscription(data);
    newSubscription.save((err) => {
      if (err) {
        return res.json({
          error: err.message,
        });
      } else
        return res.json({
          success: "Subscription successfully!",
        });
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
module.exports = {
  postSubscription,
};
