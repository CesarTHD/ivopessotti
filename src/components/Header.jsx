import Image from "next/image"
import { useState } from "react"
import ThankYou from "./ThankYou";

const Header = () => {
    const [thankYou, setThankYou] = useState(false);

    return (
        <header className="w-full h-24 justify-center flex items-end fixed top-0 bg-transparent-blue text-gold backdrop-blur shadow-gray-400 shadow-2xl z-50">
            {thankYou && <ThankYou />}
            <div className="flex flex-col w-full max-w-[1600px]">
                <div className="flex justify-center items-center md:justify-between w-full">
                    <a href={"/"} className="text-2xl font-bold">
                        <Image
                            src={"/assets/logo.png"}
                            alt="Ivo Pessotti"
                            width={170}
                            height={60}
                        />
                    </a>
                    <div className="hidden md:flex">
                        <nav className="hidden lg:flex list-none items-center font-semibold gap-10">
                            <a href={"/"}>
                                <li>
                                    <span></span>
                                    <p>Início</p>
                                </li>
                            </a>
                            <a href="#about">
                                <li>
                                    <span></span>
                                    <p>Sobre</p>
                                </li>
                            </a>
                            <a href="#contact">
                                <li>
                                    <span></span>
                                    <p>Contato</p>
                                </li>
                            </a>
                        </nav>
                        <button id="whatsappButton" onClick={() => {setThankYou(true)}} className="hidden text-blue-default md:flex bg-green-500 items-center gap-3 border-2 border-green-900 px-8 font-semibold py-1 ml-10 rounded-xl hover:shadow-lg hover:shadow-blue-default hover:scale-105 transition-all duration-200">
                            <i className="fa-brands fa-whatsapp font-bold"></i><p className="">Agendar Consulta</p>
                        </button>
                    </div>
                </div>
                <div className="w-full h-1 bg-linear-blue bottom-0 mt-4"></div>
            </div>
        </header >
    )
}

export default Header