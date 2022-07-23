import { useState } from 'react';
import Avatar from './Avatar';
import Modal from './Modal';
import Searchbar from './Searchbar';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='flex space-between header'>
      <Searchbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Avatar />
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};
export default Header;
