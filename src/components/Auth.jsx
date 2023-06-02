import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { User } from '../assets';

export default function Auth() {
  const navigate = useNavigate();
  const toast = useToast();

  const [isLoginUser, setIsLoginUser] = useState(false);
  const [isLoginAdmin, setIsLoginAdmin] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    console.log(token);
    if (token) {
      const payload = jwtDecode(token);
      if (payload.isAdmin === false) {
        setIsLoginUser(true);
      } else if (payload.isAdmin === true) {
        setIsLoginAdmin(true);
      } else {
        // nothing to do
      }
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoginAdmin(false);
    setIsLoginUser(false);
    toast({
      title: 'Logout Success',
      status: 'success',
      isClosable: true,
      position: 'top',
      duration: 5000,
    });
    navigate('/');
  };

  const toRegister = () => {
    navigate('/register');
  };

  if (isLoginUser || isLoginAdmin) {
    return (
      <button
        className='text-base duration-300 transform ease'
        onClick={onLogout}
      >
        <img src={User} className='w-10 outline-yellow-primary' />
      </button>
    );
  }

  const changeClass = () => {
    if (window.scrollY >= 180) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener('scroll', changeClass);

  return (
    <button
      className={
        'text-base border-2 font-normal py-2 lg:px-6 px-4 rounded-md transform duration-300 ease ' +
        (scroll
          ? 'bg-white text-blue-light border-white hover:bg-opacity-0 hover:text-white'
          : 'text-white border-green-primary hover:bg-green-primary')
      }
      onClick={toRegister}
    >
      Masuk / Daftar
    </button>
  );
}
