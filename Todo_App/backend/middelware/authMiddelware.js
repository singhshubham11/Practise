const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: 'Token is not present in header'
        });
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userid = decode.id;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
};

module.exports = auth;

