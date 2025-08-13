const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

router.post('/', async (req, res) => {
  const { title, description, creator } = req.body;
  try {
    const course = await Course.create({ title, description, creator });
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const courses = await Course.find().populate('creator');
  res.json(courses);
});

module.exports = router;