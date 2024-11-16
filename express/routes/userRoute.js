const express = require('express');
const User = require('../models/userSchema');
const router = express.Router();

//cretae a new user
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({
                error: 'User not found'
            })
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            error: error.message
    })
    }
});

router.put('/:id', async (req, res) => {
   try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!user) {
        res.status(404).json({
            error: 'User not found'
        })
        res.status(200).json(user);
    }
   } catch (error) {
    res.status(400).json({
        error: error.message
    })
   }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).json({
                error: 'User not found'
            })
        }
        res.status(200).json({
            message: 'User deleted successfully'
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

module.exports = router;