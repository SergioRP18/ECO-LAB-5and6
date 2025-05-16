const express = require("express");
const { getProducts, getPrice, getUserEmail, getUsers, getOrderCreateAt, getProductsMulti, getPostWord, getFirstProducts, getProductsUser} = require("../controllers/users.controller");
const router = express.Router();

router.get("/products", getProducts);
router.get("/products/price", getPrice);
router.get("/users", getUsers);
router.get("/users/email-username", getUserEmail);
router.get("/orders", getOrderCreateAt);
router.get("/product/price-category", getProductsMulti);
router.get("/post/tutorial", getPostWord);
router.get("/products/first10products", getFirstProducts);
router.get("/products/by-user", getProductsUser);


module.exports = router;