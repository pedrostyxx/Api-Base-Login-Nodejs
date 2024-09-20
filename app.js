const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

const SECRET = 'styxx';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];
  jwt.verify(token, SECRET, (err, decoded) => {
    if(err) return res.status(401).end();
    req.userId = decoded.userId;
    next()
  })
}

app.get('/clientes', verifyToken, (req, res) => {
  console.log(req.userId + ' fez esta chamada');
  res.json([{ id: 1, nome: 'luiz' }]);
});

app.post('/login', (req, res) => {
  const { user, password } = req.body;

  if (user === 'luiz' && password === '123') {
    const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 300 });
    return res.json({ auth: true, token });
  }

  res.status(401).json({ auth: false, message: 'Usuário ou senha incorretos' });
});

app.post('/logout', (req, res) => {
  res.json({ auth: false, token: null }); // Invalida o token no lado do cliente
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
