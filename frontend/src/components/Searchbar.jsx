import { BiSearch } from 'react-icons/bi';

const Searchbar = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div className='flex search-bar'>
      <div className='flex items-center grow'>
        <BiSearch />
        <input
          type='text'
          className='form-control search grow'
          placeholder='Search'
        />
      </div>

      <div className='flex image-group' onClick={() => setIsModalOpen(true)}>
        <img src='/images/avatar-1.png' alt='' className='img-slide-left' />
        <img src='/images/avatar-3.png' alt='' className='img-slide-left' />
        <img src='/images/avatar-2.png' alt='' className='img-slide-left' />
        <img src='/images/avatar-4.png' alt='' className='img-slide-left' />
        <img src='/images/avatar-5.png' alt='' className='img-slide-left' />
        <img src='/images/avatar-7.png' alt='' className='img-slide-left' />
      </div>
    </div>
  );
};
export default Searchbar;
