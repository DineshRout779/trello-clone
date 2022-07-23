const router = require('express').Router();
const { signup, login } = require('../controllers/auth');

// register
router.post('/signup', signup);

// login
router.post('/login', login);

module.exports = router;
