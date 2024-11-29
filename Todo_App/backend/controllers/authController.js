const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
require('dotenv').config;

const signup = async (req, res) =>{
    const {username, email, password} = req.body;
    try {
        const existinguser = await User.findOne({email});
        if (existinguser) {
            return res.status(400).json({
                message: 'user already exists'
            });
        }
        await User.create({
            username,
            email,
            password
        });
        res.status(201).json({
            message: 'User SignedUp Successfully'
        })
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};                    
const signin = async (req, res) =>{
    
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            res.status(400).json({
                message: 'Email does not exist'
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({
                message: 'Invalid Credentials'
            });
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({
            token
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error logging in: ', error
        })
    }
};

module.exports = {signup, signin};