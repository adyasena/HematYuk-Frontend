// components

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='bg-white'>
      <div className=''>
        <div className=''>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
