const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const rateLimit = require("express-rate-limit");

const port = process.env.PORT || 5000;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
      message: "Too many requests from this IP, please try again after 15 minutes",
    },
  });

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(limiter);

const connectWithRetry = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('Connected to database'))
        .catch(err => {
            console.error('Database connection failed. Retrying in 5 seconds...', err);
            setTimeout(connectWithRetry, 5000);
        });
};
connectWithRetry();

app.use('/admin');
app.use('/user');
app.use('/course')

app.use((err, req, res, next) => {
    console.log('Error occured: ', err);
    res.status(500).json({
        message: 'Something went wrong. Please again try later'
    })
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);    
});


// project-root/
// │
// ├── config/
// │   └── config.js
// │
// ├── controllers/
// │   ├── adminController.js
// │   ├── courseController.js
// │   └── userController.js
// │
// ├── middlewares/
// │   ├── adminMiddleware.js
// │   └── userMiddleware.js
// │
// ├── models/
// │   ├── adminModel.js
// │   ├── courseModel.js
// │   ├── purchaseModel.js
// │   └── userModel.js
// │
// ├── routes/
// │   ├── adminRouter.js
// │   ├── courseRouter.js
// │   └── userRouter.js
// │
// ├── utils/
// │   └── utilityFunctions.js
// │
// ├── .env
// │
// ├── db.js
// │
// ├── index.js
// │
// ├── package.json
// │
// └── README.md
