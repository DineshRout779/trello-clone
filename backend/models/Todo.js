const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 100,
      required: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    description: {
      type: String,
      maxlength: 1000,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', TodoSchema);
