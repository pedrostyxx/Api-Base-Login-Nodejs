const pool = require('../config/db');

const createUser = async (username, password) => {
  const result = await pool.query(
    'INSERT INTO auth.users (username, password) VALUES ($1, $2) RETURNING *',
    [username, password]
  );
  return result.rows[0];
};

const findUserByUsername = async (username) => {
  const result = await pool.query('SELECT * FROM auth.users WHERE username = $1', [username]);
  return result.rows[0];
};

module.exports = { createUser, findUserByUsername };
