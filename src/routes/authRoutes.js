const express = require('express');
const { login, logout } = require('../controllers/authController');
const { register } = require('../controllers/userController');
const router = express.Router();

// Rota para registrar novo usuário
router.post('/register', register);

// Rota para login de usuário
router.post('/login', login);

// Rota para logout de usuário
router.post('/logout', logout);

module.exports = router;
