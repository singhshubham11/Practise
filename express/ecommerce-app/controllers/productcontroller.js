const productService = require('../services/productservice');

exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await productService.fetchAllProducts();
        res.status(200).json({success: true, data: products})
    } catch (error) {
        next(error);
    }
};

exports.getProductById = async (req, res, next) => {
    try {
        const product = await productService.fetchProductById();
        if (!product) {
            res.status(404).json({success: false, message: 'product not found'})
        }
        res.status(200).json({success: true, data: product})
    } catch (error) {
        next(error);
    }
}