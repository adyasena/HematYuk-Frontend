// components
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='container w-screen mx-auto'>
        <Navbar />
        <div className='px-6 pt-24 main-section'>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
