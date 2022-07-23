import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import Todo from './Todo';
import { Droppable } from 'react-beautiful-dnd';

const TodoList = ({ title, list, type }) => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleShowForm = () => setShowForm(!showForm);

  return (
    <Droppable droppableId={type}>
      {(provided, snapshot) => {
        return (
          <div
            className='todo-list'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className='flex space-between items-center'>
              <h4 className='todo-list-title'>{title}</h4>
              <p className='todo-list-length'>{list.length}</p>
            </div>
            <button
              className='btn todo-list-btn mt-1 mb-1'
              onClick={handleToggleShowForm}
            >
              +
            </button>

            {showForm && (
              <AddTodoForm type={type} setShowForm={handleToggleShowForm} />
            )}

            {list.map((todo, index) => (
              <Todo todo={todo} index={index} key={todo._id} />
            ))}

            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
export default TodoList;
