import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../features/user/userActions';
import { resetError, setError } from '../features/user/userSlice';
import { isValidEmail } from '../helpers/emailValidation';

const Signup = () => {
  const [user, setUser] = useState({
    fullName: '',
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

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(resetError());

    if (!user.email) {
      dispatch(setError('Please provide name'));
    }

    if (!user.email) {
      dispatch(setError('Please provide an email'));
    }

    if (!user.password) {
      dispatch(setError('Please provide a password'));
    }

    if (!isValidEmail(user.email)) {
      dispatch(setError('Please provide an valid email'));
    }

    if (
      user.email &&
      isValidEmail(user.email) &&
      user.fullName &&
      user.password
    ) {
      dispatch(signUp(user));
    }
  };

  useEffect(() => {
    // redirect straight to dashboard if user exists!
    if (userInfo) navigate('/dashboard');

    if (success) {
      setUser({
        fullName: '',
        email: '',
        password: '',
      });

      if (JSON.parse(localStorage.getItem('user'))) {
        navigate('/dashboard');
      } else {
        navigate('/login');
      }
    }
  }, [navigate, userInfo, success]);

  useEffect(() => {
    dispatch(resetError());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

          <div className='mt-1' style={{ color: 'red', textAlign: 'center' }}>
            {error}
          </div>

          <form className='form' onSubmit={submitForm}>
            <input
              type='name'
              name='fullName'
              id='fullName'
              className='form-control'
              value={user.fullName}
              onChange={handleInputChange}
              placeholder='Full name'
            />
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
              {loading ? 'Signing up...' : 'Sign up'}
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
export default Signup;
