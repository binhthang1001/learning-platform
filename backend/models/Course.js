const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }]
});
module.exports = mongoose.model('Course', courseSchema);