import { useDispatch } from 'react-redux';
import { showTodo } from '../features/todo/todoSlice';
import { Draggable } from 'react-beautiful-dnd';

const Todo = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <Draggable draggableId={todo._id.toString()} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className={`todo ${snapshot.isDragging ? 'onDrag' : ''}`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <h4
              className='todo-title'
              onClick={() => dispatch(showTodo(todo._id))}
            >
              {todo.title}
            </h4>
            <p className='todo-desc'>{todo.description}</p>

            <div className='todo-img mt-1'>
              <img src='/images/avatar-1.png' alt='' />
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};
export default Todo;
