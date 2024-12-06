const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const z = require('zod');
const JWT_ADMIN_PASSWORD = require('../congif/config');
const adminAuth = require('../middelwares/adminMiddelware');
const {adminModel, courseModel} = require('../models');

const router = express.Router();

const validateAdminSignup = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string(),
    lastName: z.string()
});

router.post('/signup', async (req, res) => {
    const {email, password, firstName, lastName} = validateAdminSignup.parse(req.body);
    try {
        await adminModel.create({
            email,
            password,
            firstName,
            lastName
        });
        res.json({message: 'Signup succeeded'});
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.post('/signin', async (req, res) => {
    const {email, password} = validateAdminSignup.parse(req.body);
    try {
        const admin = await adminModel.findOne({email});
        if (!admin) {
            return res.status(401).json({message: 'Invalid email or Password'});
        }
        const isMatch = bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({message: 'Password is wrong'});
        }
        const token = jwt.sign({id: admin._id}, JWT_ADMIN_PASSWORD);
        return res.status(200).json({token});
    } catch (error) {
        return res.status(400).json({message: 'signin failed: ', error: error.message});
    }
});

router.post('/course', adminAuth, async (req, res) => {
    
});

router.put('/course', adminAuth, async (req, res) => {
    
});

router.get('/course/bulk', adminAuth, async (req, res) => {
    
});



module.exports = router;