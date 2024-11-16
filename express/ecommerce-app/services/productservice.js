const product = require('../models/product');

exports.fetchAllProducts = async () => {
    return await product.find({});
}

exports.fetchProductById = async (id) => {
    return await product.findById({});
}