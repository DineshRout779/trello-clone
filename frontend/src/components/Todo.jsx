const Todo = ({ todo }) => {
  return (
    <div className='todo'>
      <h4 className='todo-title'>{todo.title}</h4>
      <p className='todo-desc'>{todo.description}</p>

      <div className='todo-img mt-1'>
        <img src='./images/avatar-1.png' alt='' />
      </div>

      {/* <button className='btn todo-btn mt-1 mb-1'>+</button> */}
    </div>
  );
};
export default Todo;
