const express = require('express');
const{getAllProducts, getAllProductsById} = require('../controllers/productcontroller')
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getAllProductsById);

module.exports = router;