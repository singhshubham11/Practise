const jwt = require('jsonwebtoken');
require('dotenv').config();

const userMiddelware = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.json({message: 'Token is required' });
        }
        const decode = await jwt.verify(token, process.env.JWT_USER_PASSWORD);
        if (!decode) {
            return res.json({message: 'Invalid token'})
        }
        req.userId = decode.id;
        next();
    } catch (error) {
        res.json({message: 'Internal Server Error'});
    }
};

module.exports = userMiddelware;