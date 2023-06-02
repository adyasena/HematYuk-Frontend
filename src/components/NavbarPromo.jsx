import { useNavigate } from 'react-router-dom';
import { ReactLogo } from '../assets';

const Navbar = () => {
  const navigate = useNavigate();

  const toRegister = () => {
    navigate('/register');
  };

  return (
    <div className='navbar'>
      <div className={'navbar bg-green-primary opacity-100'}></div>
      <div
        className={
          'z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-black ' +
          'justify-between transform duration-300 ease overflow-hidden h-16'
        }
      >
        <a
          href='/'
          className='flex flex-row justify-start items-center h-full text-white'
        >
          <img
            src={ReactLogo}
            alt='logo hematyuk'
            className={'m-2 transform duration-300 ease w-8'}
          />
          <p className='transform'>HematYuk</p>
        </a>
        {/* <button className="text-base transform duration-300 ease"
          onClick={toRegister}>
            <img src={User} className="w-10 outline-yellow-primary" />
        </button> */}
        <button
          className={
            'text-base border-2 font-normal py-2 lg:px-6 px-4 rounded-md transform duration-300 ease bg-white text-blue-light border-white hover:bg-opacity-0 hover:text-white'
          }
          onClick={toRegister}
        >
          Masuk / Daftar
        </button>
      </div>
    </div>
  );
};

export default Navbar;
