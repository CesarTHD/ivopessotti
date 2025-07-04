import Image from "next/image"
import procedures from "@/components/ProceduresSlider/procedures.json";

const Footer = () => {

    return (
        <footer className="w-full flex flex-col md:flex-row text-white bg-blue-default items-center justify-center">
            <div className="max-w-[1700px] w-full px-8 md:px-16 lg:px-32 text-center md:text-start">
                <div className="flex flex-col md:flex-row w-full py-6 items-center justify-between">
                    <div className="w-52 relative h-24">
                        <Image layout="fill" src={"/assets/logo.png"} className="object-contain" alt="logo dr ivo pessotti" />
                    </div>
                    <div className="flex text-3xl mt-8 md:mt-0 gap-2 items-end md:mr-28 lg:mr-44 xl:mr-80">
                        <a href="https://www.facebook.com/people/Dr-Ivo-Pessotti/61556168870191/" target="_blank" className="hover:scale-125 transition-all duration-200">
                            <i className="fa-brands fa-square-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/dr.ivopessotti/" target="_blank" className="hover:scale-125 transition-all duration-200">
                            <i className="fa-brands fa-square-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCQIEdTG8CKvFycU9csQXrvQ" target="_blank" className="hover:scale-125 transition-all duration-200">
                            <i className="fa-brands fa-square-youtube"></i>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                    <div className="md:max-w-[90%]">
                        <p className="mb-2 text-lg font-medium">CNPJ: <span className="font-normal">00.959.864/0001-35</span></p>
                        <p className="mb-0 text-md font-normal"><span className="font-medium text-lg">Endereço:</span> Instituto de Cirurgia do Lago - QI 09 do Lago Sul, Bloco E1,
                        Sala 301/307 - Centro Clínico do Lago.</p>

                    </div>
                    <div className="ml-0 md:ml-52 lg:ml-16">
                        <h3 className="mt-10 md:mt-0 mb-2 text-xl font-semibold">Links úteis:</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#about">Sobre</a></li>
                            <li><a href="#contact">Contato</a></li>
                            <li><a href="#FAQ">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="lg:ml-12">
                        <h3 className="mt-10 lg:mt-0 mb-2 text-xl font-semibold">Procedimentos:</h3>
                        <ul>
                            {procedures.procedures.map((procedure) => (
                                <li><h1 className="text-white">{procedure.name}</h1></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row text-center justify-center items-center text-lg pt-16 gap-4 pb-4">
                    <p>&copy; Copyright 2024. Todos os direitos reservados. Desenvolvido por:</p>
                    <div className="w-32 relative h-16">
                        <a href="https://wa.me/5561998555964?text=Ol%C3%A1,%20gostaria%20desenvolver%20um%20site!%20" target="_blank">
                            <Image layout="fill" src={"/assets/logo-xnove.webp"} className="object-contain" title="XNOVE" alt="logo xnove" />
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer