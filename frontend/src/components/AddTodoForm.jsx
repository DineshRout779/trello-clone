import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../features/todo/todoActions';

const AddTodoForm = ({ type, setShowForm }) => {
  const { userInfo } = useSelector((state) => state.user);

  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    status: type,
    author: userInfo._id,
  });
  const { title, description } = newTodo;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description) {
      dispatch(createTodo({ newTodo, userInfo }));
      setNewTodo({
        title: '',
        description: '',
      });
      setShowForm();
    }
  };

  return (
    <form className='form todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        className='form-control'
        placeholder='Give your task a title '
        value={title}
        onChange={handleChange}
      />
      <textarea
        name='description'
        id='description'
        placeholder='Description..'
        className='form-control textarea'
        value={description}
        onChange={handleChange}
      ></textarea>

      <div className='flex space-between items-centers'>
        <img
          src='./images/form-user.png'
          alt=''
          style={{ maxWidth: '40px', height: '40px', borderRadius: '50%' }}
          title={userInfo.fullName}
        />
        <button
          className='btn'
          type='submit'
          style={{ marginLeft: 'auto', maxWidth: 'fit-content' }}
        >
          Add
        </button>
      </div>
    </form>
  );
};
export default AddTodoForm;
