const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'list of users'
    })
})

router.get('/:id', (req, res) => {
    const data = req.params.id;
    res.json({
        message: `Detail of user ${data}`
    })
})

module.exports = router;