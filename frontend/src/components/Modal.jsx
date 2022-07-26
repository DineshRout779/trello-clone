import { IoMdClose } from 'react-icons/io';

const members = [
  {
    id: 1,
    pic: 'avatar-6.png',
    name: 'Saundarya ',
    email: 'saundarya@idc.com',
  },
  {
    id: 2,
    pic: 'avatar-1.png',
    name: 'Vaibhav',
    email: 'vaibhav@idc.com',
  },
  {
    id: 3,
    pic: 'avatar-2.png',
    name: 'sudhanshu',
    email: 'sudhanshu@idc.com',
  },
  {
    id: 4,
    pic: 'avatar-3.png',
    name: 'Shruti',
    email: 'shruti@idc.com',
  },
  {
    id: 5,
    pic: 'avatar-4.png',
    name: 'Himanshu',
    email: 'himanshu@idc.com',
  },
  {
    id: 6,
    pic: 'avatar-2.png',
    name: 'sudhanshu',
    email: 'sudhanshu@idc.com',
  },
  {
    id: 7,
    pic: 'avatar-3.png',
    name: 'Shruti',
    email: 'shruti@idc.com',
  },
  {
    id: 8,
    pic: 'avatar-4.png',
    name: 'Himanshu',
    email: 'himanshu@idc.com',
  },
];

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
          <h2 className='modal-title'>Project members</h2>
          <button className='btn-close' id='modal-close' onClick={handleClick}>
            <IoMdClose id='modal-close-btn' />
          </button>
        </div>

        <ul>
          {members.map((member) => {
            return (
              <li className='flex' key={member.id}>
                <img src={`/images/${member.pic}`} alt='' />
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.email}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Modal;
