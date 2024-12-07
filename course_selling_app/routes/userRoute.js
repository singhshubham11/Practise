const express = require('express');
const z = require('zod');
const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_USER_PASSWORD} = require('../config');
require('dotenv').config();
const router = express.Router();

const validate = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string(),
    lastName: z.string()
});

router.post('/signup', async (req, res) => {
    try {
        const {email, password, firstName, lastName} = validate.parse(req.body);
        await userModel.create({email, password, firstName, lastName});
        res.json({
            message: 'signup successfully'
        });
    } catch (error) {
        res.json({
            message: 'signup failed',
            error: error.message
        });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const {email, password} = validate.pick({email: true, password: true}).parse(req.body);
        const user = await userModel.findOne({email});
        console.log(user);
        if (!user) {
            return res.json({
                message: 'no longer user'
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);
        if (!isMatch) {
            return res.json({
                message: 'login credentials failed'
            });
        }
        try {
            const token = await jwt.sign({id: user._id}, process.env.JWT_USER_PASSWORD, { expiresIn: '1h' });
            res.json({
                message: 'signin successfully',
                token
            });
        } catch (error) {
            res.json({
                message: 'Token generation failed',
                error: error.message
            });
        }
    } catch (error) {
        res.json({message: 'signin failed', error: error.message})
    }
});

module.exports = router;