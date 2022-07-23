import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    pasword: '',
  });
  const [remember, setRemember] = useState(false);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = () => {
    setRemember(!remember);
  };

  return (
    <div className='full-height flex-center'>
      <div className='container grid-2'>
        <div className='login-img'>
          <img src='./images/todo.png' alt='todo app' />
        </div>
        <div className='login-form'>
          <div className='flex'>
            <NavLink
              to='/login'
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Login
            </NavLink>
            <NavLink
              to='/signup'
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Sign up
            </NavLink>
          </div>

          <form className='form'>
            <input
              type='email'
              name='email'
              id='email'
              className='form-control'
              value={user.email}
              onChange={handleInputChange}
              placeholder='Email'
            />
            <input
              type='password'
              name='password'
              id='password'
              className='form-control'
              value={user.password}
              onChange={handleInputChange}
              placeholder='Password'
            />

            <button type='submit' className='form-control btn btn-submit'>
              Log In
            </button>

            <input
              type='checkbox'
              checked={remember}
              name='remember'
              id='remember'
              onChange={handleCheck}
            />
            <label
              style={{ marginLeft: '8px', userSelect: 'none' }}
              htmlFor='remember'
            >
              Remember me
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
