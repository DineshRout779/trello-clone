import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <div className='full-height home flex-center flex-col'>
      <img src='./images/todo.png' alt='todo' className='home-img' />
      <h1>Welcome to Todo App!</h1>
      {userInfo ? (
        <Link to='/dashboard/projects' className='btn mt-1'>
          Go to Dashboard
        </Link>
      ) : (
        <div className='btn-group flex flex-gap-1'>
          <Link to='login' className='btn'>
            Login
          </Link>
          <Link to='signup' className='btn btn-rev'>
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};
export default Home;
