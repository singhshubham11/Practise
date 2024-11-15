const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({
        message: 'list of products'
    })
})

router.get('/:id', (req,res) => {
    const data = req.params.id;
    res.json({
        message: `details of product ${data}`
    })
})

module.exports = router;