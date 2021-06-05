const Checkout = require("../models/Checkout");

const phoneNumPattern =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const postCheckout = async (req, res) => {
  try {
    const data = req.body;
    if (data.shipDiff == undefined) data.shipDiff = false;
    else {
      data.shipDiff = data.shipDiff.length == 0 ? false : true;
    }

    if (!phoneNumPattern.test(data.phoneNumber))
      return res.json({
        error: "Phone number is not valid!",
      });

    const newCheckout = new Checkout(data);
    newCheckout.save((err) => {
      if (err) {
        return res.json({
          error: err.message,
        });
      } else
        return res.json({
          success: "Checkout successfully!",
        });
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
module.exports = {
  postCheckout,
};
