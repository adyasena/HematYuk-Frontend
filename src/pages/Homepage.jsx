import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/home';
import Promo from '../components/Promo';

export default function Homepage() {
  const navigate = useNavigate();

  const toPromo = () => {
    navigate('/promo');
  };

  return (
    <>
      <Navbar />
      <Home />
      <Promo />
    </>
  );
}
