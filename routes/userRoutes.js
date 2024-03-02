const express = require('express');
const { loginController, registerController } = require('../controllers/userCtrl');

//router object
const router = express.Router();

//routes
//Login || posts 
router.post('/login',loginController);

//register || posts
router.post('/register',registerController);

module.exports = router;