const express = require('express');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

// Exemplo de rota protegida
router.get('/me', verifyToken, (req, res) => {
  res.json({ message: `Bem-vindo, usuário ${req.userId}!` });
});

module.exports = router;
