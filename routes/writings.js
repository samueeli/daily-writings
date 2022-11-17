const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Writing = require('../models/writingModel');

// @route   GET api/writings
// @desc    Get all users writings
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const writings = await Writing.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(writings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/writings
// @desc    Add new writing
// @access  Private
router.post(
  '/',
  [
    auth,
    check('title', 'Title is required').notEmpty(),
    check('text', 'Writing is required').notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, text } = req.body;

    try {
      const newWriting = new Writing({
        title,
        text,
        user: req.user.id,
      });

      const writing = await newWriting.save();

      res.json(writing);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Srever error');
    }
  }
);

// @route   PUT api/writings/id
// @desc    Update writing
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { title, text } = req.body;

  // writing object
  const writingFields = {};
  if (title) writingFields.title = title;
  if (text) writingFields.text = text;

  try {
    let writing = await Writing.findById(req.params.id);

    if (!writing) return res.status(404).json({ msg: 'Writing not found' });

    // Allow only users own writings
    if (writing.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    writing = await Writing.findByIdAndUpdate(
      req.params.id,
      { $set: writingFields },
      { new: true }
    );

    res.json(writing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/writings/id
// @desc    Delete a rwiting
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let writing = await Writing.findById(req.params.id);

    if (!writing) return res.status(404).json({ msg: 'Writing not found' });

    // Allow only users own writings
    if (writing.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Writing.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Writing removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
