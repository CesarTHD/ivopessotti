import { useState, useEffect } from "react";

const ExitIntentModal = ({ open, setOpen }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (open % 3 === 1) {
            setShow(true);
        } else if (open % 3 === 1 && show) {
            setTimeout(() => setShow(false), 1000);
        }
    }, [open, show]);

    return (
        <>
            {open !== 0 && (
                <div
                    className={`w-full z-50 top-28 fixed transition-opacity duration-1000 ${
                        open % 3 === 1 ? "opacity-100" : "opacity-0 hidden"
                    }`}
                >
                    <div className="max-w-[700px] mx-auto">
                        <div className="relative p-6 md:p-12 bg-gray-100 bg-opacity-90 text-center flex flex-col items-center rounded-xl border-4 shadow-2xl shadow-gray-600 border-green-500">
                            <button
                                className="absolute right-4 top-3"
                                onClick={() => {setOpen(2);}}
                            >
                                <i className="fa-solid fa-xmark text-2xl text-red-600"></i>
                            </button>
                            <div>
                                <h2 className="text-green-700 text-2xl md:text-3xl font-semibold leading-8">
                                    Não Vá Embora Ainda!
                                </h2>
                                <h2 className="text-green-700 text-lg md:text-xl mt-4 font-semibold leading-8">
                                    Com o Dr. Ivo Pessotti sua autoestima será elevada e vamos tornar seu sonho realidade.
                                </h2>
                            </div>
                            <hr className="m-4 md:m-8 border-gray-500 border-dotted border-t-4 p-2 w-full" />
                            <p className="text-lg md:text-xl font-semibold">
                                Não perca a oportunidade de alcançar a melhor versão de si mesma. Clique abaixo e garanta sua consulta com um dos mais conceituados cirurgiões plásticos de Brasília!
                            </p>
                            <hr className="m-4 md:m-8 border-gray-500 border-dotted border-t-4 p-2 w-full" />
                            <p>
                                <a id="whatsappButton" target="_blank" href="#"
                                    className=" bg-blue-default py-2 md:px-20 text-lg md:text-xl rounded-2xl text-white flex gap-4 hover:scale-110 transition-all duration-300">
                                    <i className="fa-brands fa-whatsapp mt-1 font-bold hidden md:block"></i>
                                    AGENDE SUA CONSUTA AGORA!
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ExitIntentModal;
