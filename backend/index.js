require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 4000;

const router = require("./router")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use("/shop", router)

mongoose
  .connect(process.env.MONGO_URI, { useUnifiedTopology: true,  useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`server is running: http://localhost:${PORT}`))