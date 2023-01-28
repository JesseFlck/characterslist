// Import des éléments nécessaires à la mise en place des routes

const express = require('express');
const router = express.Router();
//const auth = require('../middleware/auth_middleware');
const adminController = require('../controllers/admin_controller');


// Mise en place des routes

router.post ('/signup', adminController.signup);
router.post ('/login', adminController.login);
router.get('/logout', adminController.logout);

//router.get('/allusers', auth, userController.getAllUsers);
//router.get('/user/:id', auth, userController.getOneUser);
//router.put('/update/:id', auth, multer, userController.modifyUser);
//router.put('/update/:id/:imageUrl', auth, multer, userController.deleteUserImage);
//router.delete('/delete/:id', auth, multer, userController.deleteUser);

module.exports = router;
