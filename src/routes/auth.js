const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const { name, username, password, role } = req.body;

  // Check if the user already exists
  User.findByUsername(username, async (err, users) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (users.length) {
      return res.status(400).send('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = { name, username, password: hashedPassword, role };
    User.create(user, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).send('User registered');
    });
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  User.findByUsername(username, async (err, users) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!users.length) {
      return res.status(400).send('Invalid username or password');
    }

    const user = users[0];

    // Check if the password is correct
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(400).send('Invalid username or password');
    }

    // Create and assign a token
    const token = jwt.sign({ id: user.id_user, role: user.role }, process.env.TOKEN_SECRET);
    res.header('Authorization', token).send({ token });
  });
});

module.exports = router;
