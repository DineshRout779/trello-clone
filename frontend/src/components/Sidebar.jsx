import { MdLogout } from 'react-icons/md';
import { BiHome } from 'react-icons/bi';
import { IoIosStats } from 'react-icons/io';
import {
  IoFolderOutline,
  IoChatbubbleEllipsesOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { BsCalendarDate } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/user/userSlice';

const Sidebar = () => {
  // const { userInfo, userToken } = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  let activeClassName = 'active';
  return (
    <div className='sidebar'>
      <div className='logo'>
        <h3>.taskez</h3>
      </div>
      <nav className='nav-primary'>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <BiHome /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/#'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <IoIosStats /> Stats
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/dashboard/projects'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <IoFolderOutline /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/#'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <IoChatbubbleEllipsesOutline /> Chat
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/#'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <BsCalendarDate /> Calender
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className='nav-secondary'>
        <ul>
          <li>
            <NavLink
              to='/#'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <IoSettingsOutline /> Settings
            </NavLink>
          </li>
          <li>
            <button className='btn-link' onClick={handleLogout}>
              <MdLogout /> Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
