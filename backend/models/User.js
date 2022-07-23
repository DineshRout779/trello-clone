const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      data: Buffer,
      contentType: String,
    },
    desc: {
      type: String,
      maxlength: 1000,
    },
    picture: {
      type: String,
      default: './images/default.png',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
