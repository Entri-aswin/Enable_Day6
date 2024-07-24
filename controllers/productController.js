const { Product } = require("../models/productModel");

const getProductList = async (req, res) => {
    try {
        const productList = await Product.find();

        return res.json({
            message: "successfully fetched product List",
            productList,
        });
    } catch (error) {
        res.status(400).json(error);
    }
};

const createProduct = async (req, res) => {
    try {
        const { title, description, price, image } = req.body;

        const product = new Product({ title, description, price, image });
        await product.save();

        return res.status(201).json(product);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json(error);
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, price, image } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, { title, description, price, image }, { new: true });

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(400).json({
                message: "product does not exist",
            });
        }

        res.status(200).json({
            product,
            message: "product deleted successfully",
        });
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { createProduct, getProduct, updateProduct, deleteProduct, getProductList };
