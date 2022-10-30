const express = require('express');
const router = express.Router();

// @route   GET api/writings
// @desc    Get all users writings
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all users writings');
});

// @route   POST api/writings
// @desc    Add new writing
// @access  Private
router.post('/', (req, res) => {
  res.send('add new writing');
});

// @route   PUT api/writings/id
// @desc    Wpdate writing
// @access  Private
router.put('/:id', (req, res) => {
  res.send('update a writing');
});

// @route   DELETE api/writings/id
// @desc    Delete a rwiting
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete a writing');
});

module.exports = router;
