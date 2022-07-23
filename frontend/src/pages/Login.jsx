import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../features/user/userActions';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const { loading, error, success, userInfo } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (user.email && user.password) {
      dispatch(login(user));
    }
  };

  useEffect(() => {
    // redirect straight to dashboard if user exists!
    if (userInfo) navigate('/dashboard');

    if (success) {
      setUser({
        email: '',
        password: '',
      });
      navigate('/dashboard');
    }
  }, [navigate, userInfo, success, user.remember]);

  return (
    <div className='full-height flex-center'>
      <div className='container grid-2'>
        <div className='login-img'>
          <img src='./images/todo.png' alt='todo app' />
        </div>
        <div className='login-form'>
          <div className='flex pb-1'>
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

          <div className='line'></div>

          <div style={{ margin: '1em auto', maxWidth: '360px' }}>
            <h3 style={{ fontWeight: 500, fontSize: '18px' }}>To Continue</h3>
            <p>We need your Name & Email </p>
          </div>

          <form className='form' onSubmit={submitForm}>
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
              checked={user.remember}
              name='remember'
              id='remember'
              onChange={() =>
                setUser({
                  ...user,
                  remember: !user.remember,
                })
              }
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
