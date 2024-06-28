import Image from "next/image"
import { useState } from "react"
import ThankYou from "./ThankYou";

const CallToAction = () => {
    const [thankYou, setThankYou] = useState(false);

    return (
        <div className='flex justify-around items-center py-32 lg:my-48 px-2 lg:px-0'>
            {thankYou && <ThankYou />}
            <div className='hidden md:flex w-full h-[580px] max-w-[50%] xl:max-w-[35%] relative'>
                <Image src={'/assets/07.png'} layout="fill" className='absolute left-0 object-contain' alt="Modelo" />
            </div>
            <div className='w-full md:w-[45%]'>
                <div className="w-full text-gray-100 text-center md:text-start">
                    <div className="text-lg">
                        <h1 className="text-xl md:text-3xl font-semibold pl-1 text-blue-default">A Melhor Cirurgia Plástica de Brasília</h1>
                        <p className="text-lg font-normal  mt-14 pl-1"><span className="font-medium">Descubra a elegância da mudança:</span> procedimentos exclusivos que elevam sua confiança e beleza interior, moldados por um especialista em cirurgia plástica.</p>
                        <p className="text-sm md:text-base font-normal mt-8 pl-1">Após preenchimento do formulário, você será redirecionado ao nosso whatsapp.</p>
                    </div>

                    <button id="whatsappButton" onClick={() => {setThankYou(true)}} className="flex mx-auto md:mx-0 text-sm max-w-fit md:text-lg text-gray-900 bg-green-500 items-center mt-8 gap-1 md:gap-3 border-2 border-green-900 px-2 md:px-8 font-semibold py-2 rounded-xl hover:shadow-lg hover:shadow-blue-default hover:scale-105 transition-all duration-200">
                        <i className="fa-brands fa-whatsapp font-bold"></i><p className="text-sm lg:text-base xl:text-lg text-center">Agende Sua Consulta Agora Mesmo</p>
                    </button>

                    <p className="font-light  md:text-lg p-1 mt-8 pl-1">Não perca a oportunidade de alcançar a melhor versão de si mesma. Garanta sua consulta com um dos mais conceituados cirurgiões plásticos de Brasília!</p>
                </div>
            </div>
        </div>
    )
}

export default CallToAction

