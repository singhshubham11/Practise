const express = require('express');
const router = express.Router();
const z = require('zod');
const jwt = require('jsonwebtoken');
const adminModel = require('../model/adminModel');
const {JWT_ADMIN_PASSWORD} = require('../config');
const bcrypt = require('bcrypt');
require('dotenv').config();

const validate = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string(),
    lastName: z.string()
});

router.post('/signup', async (req, res) => {
    try {
        const {email, password, firstName, lastName} = validate.parse(req.body);
        await adminModel.create({email, password, firstName, lastName});
        res.json({
            message: 'signup successful'
        });
    } catch (error) {
        res.json({
            message: 'signup is failed'
        });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const {email, password} = validate.pick({ email: true, password: true }).parse(req.body);
        const admin = await adminModel.findOne({email});
        if (!admin) {
            return res.json({message: 'admin not found'});
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.json({message: 'Invalid credentials'});
        }
        //keep token logic in try catch if not token is not geb=nerating
        try {
            const token = await jwt.sign({ id: admin._id }, process.env.JWT_ADMIN_PASSWORD, { expiresIn: '1h' });
            res.json({ message: 'Signin successful', token });
        } catch (error) {
            res.status(500).json({ message: 'Token generation failed', error: error.message });
        }
    } catch (error) {
        res.json({message: 'signin failed', error: error.message})
    }
});

module.exports = router;