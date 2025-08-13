const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  progress: [{
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    lessonsCompleted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }]
  }]
});
module.exports = mongoose.model('User', userSchema);