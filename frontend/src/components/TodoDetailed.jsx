import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../features/todo/todoActions';
import { removeTodo } from '../features/todo/todoSlice';

const TodoDetailed = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { todos, showDetailed, currentTodo } = useSelector(
    (state) => state.todos
  );
  const [isediting, setIsediting] = useState(false);
  const [todo, setTodo] = useState(
    currentTodo ? todos.find((t) => t._id === currentTodo) : null
  );

  const dispatch = useDispatch();

  let todoActiveClass = showDetailed
    ? 'todo-update-container active'
    : 'todo-update-container';

  useEffect(() => {
    setIsediting(false);
    setTodo(currentTodo ? todos.find((t) => t._id === currentTodo) : null);
  }, [currentTodo, todos]);

  if (!todo) {
    return null;
  }

  return (
    <div className={todoActiveClass}>
      <div className='flex items-center space-between pb-1'>
        {isediting ? (
          <input
            type='text'
            className='form-control'
            value={todo.title}
            onChange={(e) =>
              setTodo({
                ...todo,
                title: e.target.value,
              })
            }
            placeholder='Enter updated title'
          />
        ) : (
          <h2>{todo.title}</h2>
        )}
        <button className='btn-close' onClick={() => dispatch(removeTodo())}>
          <IoMdClose id='modal-close-btn' />
        </button>
      </div>

      <div className='flex items-center pt-1 pb-1'>
        <p className='mr-1'>Created by</p>
        <div className='flex items-center'>
          <img src='./images/avatar-5.png' alt='' />
          <div className='author'>{todo.author.fullName}</div>
        </div>
      </div>

      <div className='flex items-center pt-1 pb-1'>
        <p className='mr-1'>Description</p>
        {isediting ? (
          <textarea
            name='description'
            id='description'
            className='form-control'
            value={todo.description}
            onChange={(e) =>
              setTodo({
                ...todo,
                description: e.target.value,
              })
            }
          ></textarea>
        ) : (
          <div>{todo.description}</div>
        )}
      </div>

      <div className='flex btn-group flex-gap-1 items-center pt-1 pb-1'>
        <div className='btn btn-rev' onClick={() => dispatch(removeTodo())}>
          Cancel
        </div>
        {isediting ? (
          <div
            className='btn'
            onClick={() => {
              dispatch(
                updateTodo({
                  todo,
                  userInfo,
                })
              );
              setIsediting(false);
            }}
          >
            Save
          </div>
        ) : (
          <div className='btn' onClick={() => setIsediting(true)}>
            Edit
          </div>
        )}
      </div>
    </div>
  );
};
export default TodoDetailed;
