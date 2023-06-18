import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import Adminpage from "./pages/Adminpage.jsx";
import Registerpage from './pages/Registerpage.jsx';
import Loginpage from "./pages/Loginpage.jsx";
import Promopage from './pages/Promopage.jsx';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/admin' element={<Adminpage />} />
      <Route path='/register' element={<Registerpage />} />
      <Route path='/login' element={<Loginpage />} />
      <Route path='/promo' element={<Promopage />} />
    </Routes>
  );
}

export default App;
