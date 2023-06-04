import { LogoWhite } from "../assets";
import Auth from './Auth';

const NavbarAdmin = () => {
  return (
    <div className="navbar">
      <div className="navbar bg-green-dark">
      </div>
      <div className="z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-black 
        justify-between transform duration-300 ease overflow-hidden h-16">
        <a href="/" className="flex flex-row justify-start items-center h-full text-white">
          <img src={LogoWhite} className={"m-2 transform duration-300 ease " + (scroll ? "w-8" : "w-0 mr-[-4px]")}/>
          <p className="transform">HematYuk</p> 
        </a>
        <Auth />
      </div>
    </div>
  );
};

export default NavbarAdmin;
