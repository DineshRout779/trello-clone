import { useSelector } from 'react-redux';

const Avatar = () => {
  const { userInfo } = useSelector((state) => state.user);
  let name = userInfo.fullName.split(' ')[0] || 'user';

  return (
    <div className='flex items-center avatar'>
      <p>Hi {name ? name : 'User'}</p>
      <img src='/images/avatar-6.png' alt='profile' className='avatar-img' />
    </div>
  );
};
export default Avatar;
