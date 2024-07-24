const { Category } = require("../models/categoryModel");

const getCategoryList = async (req, res) => {
    try {
        const categoryList = await Category.find();

        return res.json({
            message: "successfully fetched category List",
            categoryList,
        });
    } catch (error) {
        res.status(400).json(error);
    }
};

const createCategory = async (req, res) => {
    try {
        const { title, image, product } = req.body;

        const category = new Category({ title, image, product });
        await category.save();

        return res.status(201).json(category);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Category.findById(id);

        res.status(200).json(category);
    } catch (error) {
        res.status(400).json(error);
    }
};


const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, image, product } = req.body;

        const updatedCategory = await Category.findByIdAndUpdate(id, { title, image, $push: { product } }, { new: true });

        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(400).json(error);
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Category.findByIdAndDelete(id);

        if (!category) {
            return res.status(400).json({
                message: "category does not exist",
            });
        }

        res.status(200).json({
            category,
            message: "category deleted successfully",
        });
    } catch (error) {
        res.status(400).json(error);
    }
};


const getCategoryWithProductList = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Category.findById(id).populate('product')

        res.status(200).json(category);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { createCategory, getCategory, updateCategory, deleteCategory, getCategoryList , getCategoryWithProductList};
