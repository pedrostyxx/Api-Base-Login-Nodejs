const { hashPassword } = require('../utils/hash');
const { createUser, findUserByUsername } = require('../models/userModel');

const register = async (req, res) => {
  const { username, password } = req.body;

  // Verifica se o usuário já existe
  const userExists = await findUserByUsername(username);
  if (userExists) {
    return res.status(400).json({ message: 'Usuário já existe' });
  }

  // Criptografa a senha
  const hashedPassword = await hashPassword(password);

  // Cria o usuário no banco de dados
  const newUser = await createUser(username, hashedPassword);
  res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
};

module.exports = { register };
