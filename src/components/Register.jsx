import { useNavigate } from 'react-router-dom';
import { BgHome } from "../assets";

const Register = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-row w-screen h-screen font-poppins">
      <div className="w-1/2 h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BgHome})`}}>
        <div className="w-full h-screen text-white bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <div className="font-semibold lg:text-4xl text-2xl">
            HematYuk
          </div>
          <button className="font-normal py-2 px-6 mt-16 rounded-md transform duration-300 ease bg-green-primary hover:bg-green-dark" 
            onClick={toHome}>
              Kembali
          </button>
        </div>
      </div>
      <div className="flex flex-col w-1/2 text-center justify-center items-center text-black gap-5">
        <div className="font-semibold text-2xl mb-4">
          Daftarkan akunmu sekarang!
        </div>
        <div className="flex flex-col text-start w-3/5 font-roboto gap-1">
          Username
          <input type="text" placeholder="Masukkan username" className="h-10 p-2 border-2 border-black rounded-lg focus:outline-green-dark"/>
        </div>
        <div className="flex flex-col text-start w-3/5 font-roboto gap-1">
          Email
          <input type="email" placeholder="Masukkan email" className="h-10 p-2 border-2 border-black rounded-lg focus:outline-green-dark"/>
        </div>
        <div className="flex flex-col text-start w-3/5 font-roboto gap-1">
          Password
          <input type="password" placeholder="Masukkan password" className="h-10 p-2 border-2 border-black rounded-lg focus:outline-green-dark"/>
        </div>
        <div className="flex flex-col text-start w-3/5 font-roboto gap-1">
          Konfirmasi Password
          <input type="password" placeholder="Konfirmasi password anda" className="h-10 p-2 border-2 border-black rounded-lg focus:outline-green-dark"/>
        </div>
        <button className="font-normal py-2 px-6 mt-6 text-white rounded-md transform duration-300 ease bg-green-primary hover:bg-green-dark" 
          onClick={toHome}>
            Daftar
        </button>
      </div>
    </div>
  )
}

export default Register;