const express = require("express");
const {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    getProductList,
} = require("../controllers/productController");

const router = express.Router();

router.get("/productList", getProductList);

const authenticateUser = (req, res, next) => {
    const isUserAuth = false;
    // kjldfjdlkf

    if (isUserAuth) {
        // kjkfskfslkfjfj
        return next();
    }
    return res.status(400).send("user not authenticated");
};

router.post("/", authenticateUser, createProduct);
router.get("/", getProduct);
router.put("/", authenticateUser, updateProduct);
router.delete("/", authenticateUser, deleteProduct);

module.exports = { productRouter: router };
