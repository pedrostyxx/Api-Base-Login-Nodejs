const jwt = require('jsonwebtoken');
const SECRET = 'styxx';

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end();
    req.userId = decoded.userId;
    next();
  });
}

module.exports = { verifyToken };
