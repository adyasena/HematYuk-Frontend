import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { fetcher } from '../helpers/fetcher';
import { BgHome } from '../assets';

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toHome = () => {
    navigate('/');
  };

  const toRegister = () => {
    navigate('/register');
  };

  const signInHandler = async () => {
    try {
      const res = await fetcher.post('/auth/signin', {
        email: email,
        password: password,
      });

      if (!res.status) throw new Error(res.error);

      const user = res.data.data.user;

      localStorage.setItem('accessToken', res.data.data.accessToken);

      toast({
        title: 'Login Success',
        status: 'success',
        isClosable: true,
        position: 'top',
        duration: 5000,
      });

      navigate(user.role === 'USER' ? '/' : '/admin');
    } catch (error) {
      if (error.response.status === 401) {
        toast({
          title: 'Wrong email or password',
          status: 'error',
          isClosable: true,
          position: 'top',
          duration: 5000,
        });
      }
    }
  };

  return (
    <div className='flex flex-row w-screen h-screen font-poppins'>
      <div
        className='w-1/2 h-screen bg-center bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${BgHome})` }}
      >
        <div className='flex flex-col items-center justify-center w-full h-screen text-white bg-black bg-opacity-60'>
          <div className='text-2xl font-semibold lg:text-4xl'>HematYuk</div>
          <button
            className='px-6 py-2 mt-16 font-normal duration-300 transform rounded-md ease bg-green-primary hover:bg-green-dark'
            onClick={toHome}
          >
            Kembali
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-1/2 gap-5 text-center text-black'>
        <div className='mb-4 text-2xl font-semibold'>
          Selamat datang kembali!
        </div>
        <div className='flex flex-col w-3/5 gap-1 text-start font-roboto'>
          Email
          <input
            type='text'
            placeholder='Masukkan email anda'
            className='h-10 p-2 border-2 border-black rounded-lg focus:outline-green-dark'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col w-3/5 gap-1 text-start font-roboto'>
          Password
          <input
            type='password'
            placeholder='Masukkan password anda'
            className='h-10 p-2 border-2 border-black rounded-lg focus:outline-green-dark'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className='w-32 px-6 py-2 mt-4 font-normal text-white duration-300 transform rounded-md ease bg-green-primary hover:bg-green-dark'
          onClick={signInHandler}
        >
          Masuk
        </button>
        <div className='flex flex-row gap-1 text-sm font-roboto'>
          Belum punya akun?
          <button
            className='text-green-primary hover:text-green-dark hover:underline'
            onClick={toRegister}
          >
            Daftar sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
