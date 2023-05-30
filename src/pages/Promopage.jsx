import { useNavigate } from 'react-router-dom';

export default function Promo() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };

  return (
    <>
      <div>This is promo page</div>
      <div className='flex flex-col items-center justify-center my-20'>
        <button
          onClick={toHome}
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Home Page
        </button>
      </div>
    </>
  );
}
