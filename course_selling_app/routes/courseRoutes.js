const express = require('express');
const router = express.Router();
const {userMiddelware} = require('../middelwares/userMiddelware');
const {purchaseModel, courseModel} = require('../models');
const z = require('zod');

const purchaseValidation = z.object({
    courseId: z.string()
});

router.post('/purchase', userMiddelware, async (req, res) => {
   try {
    
   } catch (error) {
    res.status(400).json({ message: error.message });
   } 
});

router.get('/preview', async (req, res) => {
    try {
        
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
});