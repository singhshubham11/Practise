const jwt = require('jsonwebtoken');
require('dotenv').config();

const adminMiddelware = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.json({message: 'Token is required' });
        }
        console.log("Token:", token);
        console.log("Secret:", process.env.JWT_ADMIN_PASSWORD);

        try {
            const decode = await jwt.verify(token, process.env.JWT_ADMIN_PASSWORD);
            console.log("decode", decode);
            if (!decode) {
                return res.json({message: 'Invalid token'})
            }
            req.adminId = decode.id;
            next();
        } catch (error) {
            res.json({message: 'token cannot be decoded'});
        }
    } catch (error) {
        res.json({message: 'Internal Server Error'});
    }
};

module.exports = adminMiddelware;