const express = require('express');
const Lesson = require('../models/Lesson');
const router = express.Router();

router.post('/', async (req, res) => {
  const { title, content, course } = req.body;
  try {
    const lesson = await Lesson.create({ title, content, course });
    res.json(lesson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:courseId', async (req, res) => {
  const lessons = await Lesson.find({ course: req.params.courseId });
  res.json(lessons);
});

module.exports = router;