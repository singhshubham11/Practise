const express = require('express');
const router = express.Router();
const z = require('zod');
const jwt = require('jsonwebtoken');
const adminModel = require('../model/adminModel');
const courseModel = require('../model/courseModel');
const bcrypt = require('bcrypt');
const adminMiddelware = require('../middelware/adminMiddelware');
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

router.post('/course', adminMiddelware, async (req, res) => {
    try {
        const validateZod = z.object({
            title: z.string(),
            description: z.string(),
            imageUrl: z.string(),
            price: z.string(),
        });
        const {title, description, imageUrl, price} = validateZod.parse(req.body);
        const course = await courseModel.create({title, description, imageUrl, price, creatorId: req.adminId});
        res.json({message: 'course is created',
            course
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Error"
        });
    }
});

module.exports = router;