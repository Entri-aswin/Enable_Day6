const data = {};



const getProductList =(req, res) => {
    res.send("Product list accessed");
}


const createProduct = (req, res) => {
    const { title, desc, price } = req.body;
    data.title = title;
    data.desc = desc;
    data.price = price;
    res.send({
        message: "product data created",
    });
};

const getProduct = (req, res) => {
    res.send(data);
};

const updateProduct =(req, res) => {
    const { title, desc, price } = req.body;

    if (title) {
        data.title = title;
    }
    if (desc) {
        data.desc = desc;
    }
    if (price) {
        data.price = price;
    }

    res.send({
        data,
        message: "data updated",
    });
}

const deleteProduct =(req, res) => {
    delete data.title;
    delete data.price;
    delete data.desc;

    res.send({
        message: "product deleted",
    });
}

module.exports = { createProduct, getProduct, updateProduct, deleteProduct, getProductList };
