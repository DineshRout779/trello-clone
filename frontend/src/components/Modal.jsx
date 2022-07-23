import { IoMdClose } from 'react-icons/io';

const Modal = ({ setIsModalOpen }) => {
  const handleClick = (e) => {
    if (
      e.target.id === 'modal-close' ||
      e.target.id === 'modal-close-btn' ||
      e.target.id === 'modal-container'
    ) {
      setIsModalOpen(false);
    }
  };
  return (
    <div className='modal-container' id='modal-container' onClick={handleClick}>
      <div className='modal'>
        <div className='flex space-between items-center'>
          <p className='modal-title'>Project members</p>
          <button className='btn-close' id='modal-close' onClick={handleClick}>
            <IoMdClose id='modal-close-btn' />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
