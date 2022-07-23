const User = require('../models/User');

exports.getUserById = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.getUser = (req, res) => {
  req.profile.password = undefined;
  return res.json(req.profile);
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('_id fullName email');
    if (!users) return res.status(404).json('No user found!');
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};
