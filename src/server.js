const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express();
const port = 3000;

app.use(express.json());

// Rotas
app.use('/auth', authRoutes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
