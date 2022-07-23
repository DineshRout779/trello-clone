const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 100,
      required: true,
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    description: {
      type: String,
      maxlength: 1000,
      required: true,
    },
    status: {
      type: String,
      enum: ['todo', 'progress', 'completed'],
      default: 'todo',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', TodoSchema);
