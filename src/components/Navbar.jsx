import { useState } from "react";
import { LogoWhite } from "../assets";
import Auth from './Auth';

const Navbar = () => {
  // const [scroll, setScroll] = useState(false);

  // const changeClass = () => {
  //   if (window.scrollY >= 180) {
  //     setScroll(true);
  //   } else {
  //     setScroll(false);
  //   }
  // };

  // window.addEventListener('scroll', changeClass);

  return (
    <div className="navbar">
      <div className={"z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-black " +
        "justify-between transform duration-300 ease overflow-hidden "}>
        <a href="/" className="flex flex-row justify-start items-center h-full text-white">
          <img src={LogoWhite} className={"m-2 transform duration-300 ease "}/>
          <p className="transform">HematYuk</p> 
        </a>
        <Auth />
      </div>
    </div>
  );
};

export default Navbar;
