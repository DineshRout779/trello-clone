import { Outlet } from 'react-router';

const Content = () => {
  return (
    <div className='content grow'>
      <Outlet />
    </div>
  );
};
export default Content;
