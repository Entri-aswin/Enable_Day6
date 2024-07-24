const express = require("express");
const { createProduct, getProduct, updateProduct, deleteProduct, getProductList } = require("../controllers/productController");

const router = express.Router();

router.get("/productList", getProductList);
router.post("/", createProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = { productRouter: router };
