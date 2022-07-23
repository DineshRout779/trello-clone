import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const TodoDetailed = () => {
  //   const { userInfo } = useSelector((state) => state.user);
  const { todos, showDetailed, currentTodo } = useSelector(
    (state) => state.todos
  );
  const dispatch = useDispatch();

  let todoActiveClass = showDetailed
    ? 'todo-update-container active'
    : 'todo-update-container';

  const todo = currentTodo && todos.find((t) => t._id === currentTodo);

  if (!todo) {
    return null;
  }

  return (
    <div className={todoActiveClass}>
      <div className='flex items-center space-between pb-1'>
        <h2>{todo.title}</h2>
        <button className='btn-close' onClick={() => dispatch(removeTodo())}>
          <IoMdClose id='modal-close-btn' />
        </button>
      </div>

      <div className='flex items-center'>
        <img
          style={{
            marginRight: '1em',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
          }}
          src='./images/avatar-5.png'
          alt=''
        />
        <div className='author'>{todo.author.fullName}</div>
      </div>
    </div>
  );
};
export default TodoDetailed;
