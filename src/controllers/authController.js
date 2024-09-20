const jwt = require('jsonwebtoken');
const { comparePassword } = require('../utils/hash');
const { findUserByUsername } = require('../models/userModel');
const SECRET = 'styxx';

// Login de usuário
const login = async (req, res) => {
  const { username, password } = req.body;

  // Verifica se o usuário existe
  const user = await findUserByUsername(username);
  if (!user) {
    return res.status(401).json({ message: 'Usuário ou senha incorretos' });
  }

  // Compara a senha
  const validPassword = await comparePassword(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'Usuário ou senha incorretos' });
  }

  // Gera o token JWT
  const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '1h' });
  res.json({ auth: true, token });
};

// Logout do usuário
const logout = (req, res) => {
  res.json({ auth: false, token: null }); // Invalida o token no lado do cliente
};

module.exports = { login, logout };
