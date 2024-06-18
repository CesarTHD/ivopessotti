import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import procedures from "./procedures.json";
import Image from "next/image";

const ProceduresSlider = () => {
  const [screenW, setScreenbW] = useState();

  useEffect(() => {
    setScreenbW(window?.innerWidth);
  }, [])

  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: screenW > 900 ? 3 : screenW > 500 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container max-w-[1246px] mx-auto">
      <Slider ref={sliderRef} {...settings} className="">
        {
          procedures.procedures.map((procedure, i) => (
            <div key={i} className="md:p-12 w-full max-w-[380px] text-center md:text-start mx-auto ">
              <div className="relative w-28 h-28 mx-auto md:mx-0">
                <Image layout="fill" className="mx-auto md:mx-0 object-contain" src={procedure.icon} alt="Ícone estética" />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-lg md:text-xl pl-3 font-medium text-gold">{procedure.name}:</h2>
                <p className="pl-3 text-white">{procedure.description}</p>
              </div>
            </div>
          ))
        }
      </Slider>
      <p className="md:max-w-[80%] mt-24 text-center mx-auto text-gold text-lg">Cada procedimento é conduzido por um profissional experiente, dedicado a proporcionar resultados excepcionais e uma experiência de transformação única para cada paciente. Estamos aqui para tornar seus desejos uma realidade.</p>
    </div>

  );
}
export default ProceduresSlider