import Image from "next/image"

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
                        <p className="mb-6 text-lg font-medium">CNPJ: <span className="font-normal">00.959.864/0001-35</span></p>
                        <p className="mb-0 text-md font-normal"><span className="font-medium text-lg">Endereço:</span> Instituto de Cirurgia do Lago - QI 09 do Lago Sul, Bloco E1,
                        Sala 301/307 - Centro Clínico do Lago.</p>

                    </div>
                    <div className="ml-0 md:ml-52 lg:ml-16">
                        <h3 className="mb-6 text-xl font-semibold">Links úteis:</h3>

                        <ul>
                            <a href="/"><li>Home</li></a>
                            <a href="#about"><li>Sobre</li></a>
                            <a href="#contact"><li>Contato</li></a>
                            <a href="#FAQ"><li>FAQ</li></a>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="mb-6 text-xl font-semibold">Procedimentos:</h3>

                        <ul>
                            <li><h1 className="text-white">Abdominoplastia</h1></li>
                            <li><h1 className="text-white">Blefaroplastia</h1></li>
                            <li><h1 className="text-white">Cirurgia para Pós Bariátricos</h1></li>
                            <li><h1 className="text-white">Deep Plane Facelift ou Deep Neck</h1></li>
                            <li><h1 className="text-white">Ginecomastia</h1></li>
                            <li><h1 className="text-white">Lifting de Coxas ou Braços</h1></li>
                            <li><h1 className="text-white">Lipoaspiração, Lipoescultura ou Lipo HD</h1></li>
                            <li><h1 className="text-white">Mamoplastia de Aumento</h1></li>
                            <li><h1 className="text-white">Mamoplastia Redutora</h1></li>
                            <li><h1 className="text-white">Ninfoplastia</h1></li>
                            <li><h1 className="text-white">Otoplastia</h1></li>
                            <li><h1 className="text-white">Rinoplastia</h1></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full text-center text-lg pt-16 pb-8">
                    <p>&copy; 2024 Dr. Ivo Pessotti. Todos os direitos reservados.</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer