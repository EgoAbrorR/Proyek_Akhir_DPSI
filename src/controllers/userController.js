const User = require('../models/user');

const getAllUsers = (req, res) => {
  User.getAll((err, users) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(users);
  });
};

const getUserById = (req, res) => {
  const userId = req.params.id;
  User.getById(userId, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!user.length) {
      return res.status(404).send('User not found');
    }
    res.send(user[0]);
  });
};

const createUser = (req, res) => {
  const { name, username, password, role } = req.body;
  const user = { name, username, password, role };
  User.create(user, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send('User created');
  });
};

const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, username, password, role } = req.body;
  const user = { name, username, password, role };
  User.update(userId, user, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('User updated');
  });
};

const deleteUser = (req, res) => {
  const userId = req.params.id;
  User.delete(userId, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('User deleted');
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
