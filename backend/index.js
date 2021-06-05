require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 4000;

const app = express();
connectDB();

const productRouter = require("./routers/product");
const propertyRouter = require("./routers/property");
const checkoutRouter = require("./routers/checkout");
const subscriptionRouter = require("./routers/subscription");

app.use(require("cors")());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/properties", propertyRouter);
app.use("/api/checkout", checkoutRouter);
app.use("/api/subscription", subscriptionRouter);

app.listen(PORT, () =>
  console.log(`server is running: http://localhost:${PORT}`)
);
