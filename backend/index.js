require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const connectDB = require("./config/db")

const PORT = process.env.PORT || 4000;

const app = express();

const productRouter = require("./routers/product.js")


app.use(require("cors")());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "api is running!" });
});

app.use("/api/products", productRouter)


app.listen(PORT, () => console.log(`server is running: http://localhost:${PORT}`))