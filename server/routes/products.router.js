const express = require("express");
const { getAllProducts, getProductsByPrice } = require("../db/products.db");
const router = express.Router();

router.get("/products", async (req, res) => {
  const products = await getAllProducts();
  res.send(products);
});

router.get("/products/price", async (req, res) => {
  const { price } = req.query;
  const products = await getProductsByPrice(price);
  res.send(products);
});

module.exports = router;