import { LogoWhite } from '../assets';
import Auth from './Auth';

const Navbar = () => {
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
          className='flex flex-row items-center justify-start h-full text-white'
        >
          <img
            src={LogoWhite}
            alt='logo hematyuk'
            className={'m-2 transform duration-300 ease w-8'}
          />
          <p className='transform'>HematYuk</p>
        </a>
        <Auth />
      </div>
    </div>
  );
};

export default Navbar;
