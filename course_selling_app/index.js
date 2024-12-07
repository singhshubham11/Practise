const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const adminRoute = require('./routes/adminRoute');
const userRoute = require('./routes/userRoute');
dotenv.config();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

async function connectMe() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};
connectMe();

app.use('/admin', adminRoute);
app.use('/user', userRoute);

app.use((err, req, res, next) => {
    console.log('Error: ', err);
    res.json({
        message: 'something went wrong try again later'
    })
});

app.listen(port, () => {console.log(`server running on ${port}`);});