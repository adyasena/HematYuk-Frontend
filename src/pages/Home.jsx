import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const toPromo = () => {
    navigate('/promo');
  };

  return (
    <>
      <div>This is home page</div>
      <div className='flex flex-col items-center justify-center my-20'>
        <button
          onClick={toPromo}
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Promo Page
        </button>
      </div>
    </>
  );
}
