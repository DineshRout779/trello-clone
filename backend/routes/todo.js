const {
  getTodoById,
  getTodo,
  createTodo,
  updateTodo,
  getAllTodos,
} = require('../controllers/todo');
const { getUserById } = require('../controllers/user');

const router = require('express').Router();

// route params
router.param('todoId', getTodoById);
router.param('userId', getUserById);

// get all todos
router.get('/', getAllTodos);

//get a todo
router.get('/:todoId', getTodo);

// create a todo
router.post('/:userId', createTodo);

// update a todo
router.put('/:todoId/:userId', updateTodo);

module.exports = router;
