const jwt = require('jsonwebtoken');
const {JWT_ADMIN_PASSWORD} = require('../congif/config');

const adminAuth = ((req, res, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({
            message: 'Token is incorrect'
        });
    }
    try {
        const decode = jwt.verify(token, JWT_ADMIN_PASSWORD);
        req.adminId = decode.id;
        next();
    } catch (error) {
        return res.status(500).json({
            message: 'Error while verifying jwt', error
        });
    }
});

module.exports = adminAuth;
