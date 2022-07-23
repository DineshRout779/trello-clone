const {
  getTodoById,
  getALlTodos,
  getTodo,
  createTodo,
  updateTodo,
} = require('../controllers/todo');
const { getUserById } = require('../controllers/user');

const router = require('express').Router();

// route params
router.param('todoId', getTodoById);
router.param('userId', getUserById);

// get all todos
router.get('/', getALlTodos);

//get a todo
router.get('/:todoId', getTodo);

// create a todo
router.post('/', createTodo);

// update a todo
router.put('/:todoId', updateTodo);

module.exports = router;
