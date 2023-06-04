import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { User } from '../assets';
import { useFetch } from '../helpers/useFetch';

export default function Auth() {
  const navigate = useNavigate();
  const toast = useToast();

  const [isLoginUser, setIsLoginUser] = useState(false);
  const [isLoginAdmin, setIsLoginAdmin] = useState(false);
  const [userPoints, setUserPoints] = useState(0);
  const [scroll, setScroll] = useState(false);

  const token = localStorage.getItem('accessToken');
  const decodedToken = token ? jwtDecode(token) : null;
  const userId = decodedToken?.id;

  const { data: userData } = useFetch(`/users/${userId}`);

  useEffect(() => {
    if (token && decodedToken && userId) {
      const payload = decodedToken;
      if (payload.isAdmin === false) {
        setIsLoginUser(true);
      } else if (payload.isAdmin === true) {
        setIsLoginAdmin(true);
      } else {
        // nothing to do
      }
    }

    if (userData?.data?.user) {
      const points = userData.data.user.point;
      setUserPoints(points);
    }
  }, [token, decodedToken, userId, userData]);

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
      <div className="flex flex-row items-center gap-5 text-base text-white">
        <div className="">
          Poin Anda: {userPoints}
        </div>
        <button
          className='duration-300 transform ease'
          onClick={onLogout}
        >
          <img src={User} className='w-10 outline-yellow-primary' />
        </button>
      </div>
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
          ? 'bg-white text-black border-white hover:bg-opacity-0 hover:text-white'
          : 'text-white border-green-primary hover:bg-green-primary')
      }
      onClick={toRegister}
    >
      Masuk / Daftar
    </button>
  );
}