const express = require('express');
const router = express.Router();
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
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('regitered user');
  }
);

module.exports = router;
