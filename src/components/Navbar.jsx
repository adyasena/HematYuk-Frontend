import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactLogo } from "../assets";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();

  const changeClass = () => {
    if (window.scrollY >= 180) {
      setScroll(true)
    }
    else {
      setScroll(false)
    }
  };

  const toRegister = () => {
    navigate('/register');
  };

  window.addEventListener("scroll", changeClass);

  return (
    <div className="navbar">
      <div className={"navbar bg-gradient-to-l from-green-light to-green-primary "
        + (scroll ? "opacity-100" : "h-24 opacity-0")}>
      </div>
      <div className={"z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-black " +
        "justify-between transform duration-300 ease overflow-hidden " + (scroll ? "h-16" : "h-24")}>
        <a href="/" className="flex flex-row justify-start items-center h-full text-white">
          <img src={ReactLogo} alt="logo kominfo" className={"m-2 transform duration-300 ease " + (scroll ? "w-8" : "w-0 mr-[-4px]")}/>
          <p className="transform">HematYuk</p> 
        </a>
        <button className={"text-base border-2 font-normal py-2 lg:px-6 px-4 rounded-md transform duration-300 ease "
          + (scroll ? "bg-white text-blue-light border-white hover:bg-opacity-0 hover:text-white" : "text-white border-green-primary hover:bg-green-primary")}
          onClick={toRegister}>
            Masuk / Daftar
        </button> 
      </div>
    </div>
  )
};

export default Navbar;