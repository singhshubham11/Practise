const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = require('../congif/config');

const userAuth = ((req, res, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({
            message: 'Token is incorrect'
        });
    }
    try {
        const decode = jwt.verify(token, JWT_USER_PASSWORD);
        req.userId = decode.id;
        next();
    } catch (error) {
        return res.status(500).json({
            message: 'You are not signed in', error
        });
    }
});

module.exports = userAuth;