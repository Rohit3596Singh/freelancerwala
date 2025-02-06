const { signup, login } = require('../Controllers/AuthController');
const { sigupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const express = require('express');
const router = express.Router();

router.post('/signup',sigupValidation,signup);
router.post('/login',loginValidation,login);

module.exports = router;