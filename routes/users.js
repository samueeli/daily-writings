const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const User = require('../models/userModel');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  body('name', 'Please add your name').not().isEmpty(),
  body('email', 'Please add your email').isEmail(),
  body(
    'password',
    'Please enter a password with at least 6 characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSaltSync(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.send('User Registered');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
