const AddTodoForm = () => {
  return (
    <form className='form todo-form'>
      <input
        type='text'
        className='form-control'
        placeholder='Give your task a title '
      />
      <textarea
        name='description'
        id='description'
        placeholder='Description..'
        className='form-control'
      ></textarea>
    </form>
  );
};
export default AddTodoForm;
