import { useNavigate } from 'react-router-dom';
import { BgHome } from "../assets";

const Hero = () => {
  const navigate = useNavigate();

  const toPromo = () => {
    navigate('/promo');
  };
  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BgHome})`}}>
      <div className="w-full h-screen bg-black bg-opacity-60">
        <div className="flex flex-col lg:gap-10 gap-14 h-full container mx-auto lg:py-10 py-2 items-center font-poppins text-white">
          <div className="flex flex-col justify-center items-center mt-32 h-24 font-semibold lg:text-4xl text-2xl text-center leading-normal">
            HematYuk
            <div className="text-xl pt-5 font-normal">
              Temukan rekomendasi restoran di sekitarmu<br/>
              dengan berbagai pilihan promo yang menarik!
            </div>
          </div>
          
          <div className="lg:mt-16">
            <button className="bg-blue-light text-white font-normal py-2 px-6 rounded-md transform duration-300 ease bg-green-primary hover:bg-white hover:text-black" 
              onClick={toPromo}>
                Telusuri Promo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;