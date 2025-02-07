const { signup, login } = require('../Controllers/AuthController');
const { sigupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const express = require('express');
const router = express.Router();

router.post('/login',loginValidation,login);
router.post('/signup',sigupValidation,signup);


module.exports = router;