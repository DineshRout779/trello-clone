const { getTodoById } = require('../controllers/todo');
const { getUser, getAllUsers, getUserById } = require('../controllers/user');

const router = require('express').Router();

// route params
router.param('todoId', getTodoById);
router.param('userId', getUserById);

// get user
router.get('/:userId', getUser);

// get all users
router.get('/', getAllUsers);

module.exports = router;
