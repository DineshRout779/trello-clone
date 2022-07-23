const Todo = require('../models/Todo');

exports.getTodoById = async (req, res, next, id) => {
  try {
    let todo = await Todo.findById(id).populate('author', '_id fullName email');

    if (!todo) {
      return res.status(404).json({
        error: 'todo not found',
      });
    }

    req.todo = todo;
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.getTodo = (req, res) => {
  return res.json(req.todo);
};

exports.createTodo = async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    let savedTodo = await newTodo.save();
    savedTodo = await savedTodo.populate('author', '_id fullName email');
    return res.status(200).json(savedTodo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.todo._id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    ).populate('author', '_id fullName email');

    return res.status(200).json(updatedTodo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find()
      .populate('author', '_id fullName email')
      .sort('-createdAt');

    if (!todos) return res.status(404).json('No todo found!');
    return res.status(200).json(todos);
  } catch (err) {
    return res.status(500).json(error);
  }
};
