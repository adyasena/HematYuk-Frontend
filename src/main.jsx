import React from 'react';
import ReactDOM from 'react-dom/client';

// pages and assets
import App from './App.jsx';
import Homepage from './pages/Homepage.jsx';
import Adminpage from "./pages/Adminpage.jsx";
import Registerpage from './pages/Registerpage.jsx';
import Loginpage from "./pages/Loginpage.jsx";
import Promopage from './pages/Promopage.jsx';
import './index.css';

// router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path='/' element={<App />}>
      <Route path='/' element={<Homepage />} />
      <Route path='/admin' element={<Adminpage />} />
      <Route path='/register' element={<Registerpage />} />
      <Route path='/login' element={<Loginpage />} />
      <Route path='/promo' element={<Promopage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
  </React.StrictMode>
);
