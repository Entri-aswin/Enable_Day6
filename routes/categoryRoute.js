const express = require("express");
const { createCategory, getCategory, updateCategory, deleteCategory, getCategoryList, getCategoryWithProductList } = require("../controllers/categoryController");

const router = express.Router();

router.get("/categoryList", getCategoryList);
router.post("/", createCategory);
router.get("/:id", getCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

router.get('/productList/:id', getCategoryWithProductList)

module.exports = { categoryRouter: router };
