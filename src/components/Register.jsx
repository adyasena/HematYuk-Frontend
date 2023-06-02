import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BgHome } from '../assets';
import { fetcher } from '../helpers/fetcher';
import { useToast } from '@chakra-ui/react';

const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUpHandler = async () => {
    try {
      const res = await fetcher.post('auth/signup', {
        username: username,
        email: email,
        password: password,
      });
      if (!res.status) throw new Error(res.error);

      toast({
        title: 'Register Success',
        status: 'success',
        isClosable: true,
        position: 'top',
        duration: 5000,
      });
      navigate('/login');
    } catch (error) {
      if (error?.response?.status === 409) {
        toast({
          title: 'Another user with that email already registered.',
          status: 'error',
          isClosable: true,
          position: 'top',
          duration: 5000,
        });
      }
    }
  };

  const toHome = () => {
    navigate('/');
  };

  const toLogin = () => {
    navigate('/login');
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
          Daftarkan akunmu sekarang!
        </div>
        <div className='flex flex-col w-3/5 gap-1 text-start font-roboto'>
          Username
          <input
            type='text'
            placeholder='Masukkan username'
            className='h-10 p-2 border-2 border-black rounded-lg focus:outline-green-dark'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className='flex flex-col w-3/5 gap-1 text-start font-roboto'>
          Email
          <input
            type='email'
            placeholder='Masukkan email'
            className='h-10 p-2 border-2 border-black rounded-lg focus:outline-green-dark'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className='flex flex-col w-3/5 gap-1 text-start font-roboto'>
          Password
          <input
            type='password'
            placeholder='Masukkan password'
            className='h-10 p-2 border-2 border-black rounded-lg focus:outline-green-dark'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className='flex flex-col w-3/5 gap-1 text-start font-roboto'>
          Konfirmasi Password
          <input
            type='password'
            placeholder='Konfirmasi password anda'
            className='h-10 p-2 border-2 border-black rounded-lg focus:outline-green-dark'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>
        <button
          className='w-32 px-6 py-2 mt-4 font-normal text-white duration-300 transform rounded-md ease bg-green-primary hover:bg-green-dark'
          onClick={() => {
            if (
              username === '' ||
              email === '' ||
              password === '' ||
              confirmPassword === ''
            ) {
              toast({
                title: 'Please fill out all field.',
                status: 'error',
                isClosable: true,
                position: 'top',
                duration: 5000,
              });
            } else {
              if (confirmPassword === password) {
                signUpHandler();
              } else {
                toast({
                  title: "Password doesn't match.",
                  status: 'error',
                  isClosable: true,
                  position: 'top',
                  duration: 5000,
                });
              }
            }
          }}
        >
          Daftar
        </button>
        <div className='flex flex-row gap-1 text-sm font-roboto'>
          Sudah punya akun?
          <button
            className='text-green-primary hover:text-green-dark hover:underline'
            onClick={toLogin}
          >
            Masuk sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
