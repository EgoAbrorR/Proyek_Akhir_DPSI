const db = require('../config');

const User = {
  getAll: (callback) => {
    const query = 'SELECT * FROM users';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM users WHERE id_user = ?';
    db.query(query, [id], callback);
  },
  findByUsername: (username, callback) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], callback);
  },
  create: (user, callback) => {
    const query = 'INSERT INTO users (name, username, password, role) VALUES (?, ?, ?, ?)';
    db.query(query, [user.name, user.username, user.password, user.role], callback);
  },
  update: (id, user, callback) => {
    const query = 'UPDATE users SET name = ?, username = ?, password = ?, role = ? WHERE id_user = ?';
    db.query(query, [user.name, user.username, user.password, user.role, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM users WHERE id_user = ?';
    db.query(query, [id], callback);
  },
};

module.exports = User;
