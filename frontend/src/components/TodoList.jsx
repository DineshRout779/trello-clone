import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import Todo from './Todo';

const TodoList = ({ title, list }) => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleShowForm = () => setShowForm(!showForm);
  return (
    <div className='todo-list'>
      <div className='flex space-between items-center'>
        <h4 className='todo-list-title'>{title}</h4>
        <p className='todo-list-length'>2</p>
      </div>
      <button
        className='btn todo-list-btn mt-1 mb-1'
        onClick={handleToggleShowForm}
      >
        +
      </button>

      {showForm && <AddTodoForm />}

      {list.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
export default TodoList;
