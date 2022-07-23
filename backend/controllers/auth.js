const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { fullName, email, password, remember } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({
      message: 'Please provide username, email and password!',
    });
  }

  const user = await User.findOne({ email });
  if (user)
    return res.status(403).json({
      message: 'User already exists',
    });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    const { password, ...others } = newUser._doc;

    const token = jwt.sign({ _id: others._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    if (remember) {
      return res.status(200).json({
        user: {
          _id: others._id,
          username: others.username,
          email: others.email,
          fullName: others.fullName,
          token,
        },
      });
    }

    return res.status(201).json('User signed up successfully!');
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password: clientPassword } = req.body;

  if (!email || !clientPassword) {
    return res.status(400).json({
      message: 'Please provide email and password!',
    });
  }
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: 'User not registered!',
      });
    }

    const validPassword = await bcrypt.compare(clientPassword, user.password);
    if (!validPassword) {
      return res.status(403).json({
        message: 'Invalid credentials!',
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    const { password, ...others } = user._doc;

    return res.status(200).json({
      user: {
        _id: others._id,
        username: others.username,
        email: others.email,
        fullName: others.fullName,
        token,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
