const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const adminId = decodedToken.adminId;
        req.adminId = adminId;
        if (req.body.adminId && req.body.adminId !== adminId) {
            throw new Error('Invalid admin ID');
        } else {
            next();
        }
    } catch {
        res.status(401).json({error: 'Requête invalide, non autorisé !'});
    }
};
