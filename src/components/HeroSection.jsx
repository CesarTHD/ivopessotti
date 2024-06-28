import questions from "./questions.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HeroSection = () => {
    const [procedureName, setProcedureName] = useState(0);
    const [bodyPartState, setBodyPartState] = useState(0);
    const [home, setHome] = useState(true);
    const [answer, setAnswer] = useState("Qual parte do seu corpo te incomoda?");

    const router = useRouter();

    useEffect(() => {
        if (procedureName !== 0) {
            router.push(`/result/?procedimento=${procedureName}`);
        } else {
            router.push('/');
        }
    }, [procedureName]);

    const handleBackButton = () => {
        setHome(true);
        setBodyPartState(0);
        setProcedureName(0);
        setAnswer("Qual parte do seu corpo te incomoda?");
    }

    const handleBodyPartButton = (bodyPart) => {
        setBodyPartState(bodyPart.name);
        setAnswer("O que você deseja fazer?");
        setHome(false);
    }

    const handleAnswerButton = (question) => {
        setProcedureName(Object.values(question)[0]);
        if (typeof window !== 'undefined') {
            localStorage.setItem("procedureName", Object.values(question)[0]);
            localStorage.setItem("urlVideo", Object.values(question)[1]);
            localStorage.setItem("procedureDesc", Object.values(question)[2]);
        }
    }

    return (
        <>
            <section className="flex flex-col w-full text-blue-default lg:h-[1200px] xl:h-[1050px] pt-32">
                <div className="lg:hidden mt-[-60px]  h-[420px] md:h-[700px] relative">
                    <Image layout="fill" priority src="/assets/01.png" alt="Doutor Ivo Pessotti" 
                        className="object-contain" 
                    />
                    <div className="absolute inset-x-0 h-28 bottom-0 bg-gradient-to-b from-transparent to-white z-10"></div>
                </div>
                <div className="flex justify-between w-full mx-auto -mt-8 md:mt-0 2xl:mt-8 items-center">
                    <div className="z-20 flex flex-col relative w-full lg:w-[55%] px-4 md:px-0 items-center lg:items-start text-center lg:text-start">
                        <p className="text-base md:text-lg">Descubra a Confiança Renovada com o</p>
                        <h1 className="-mt-2 text-2xl md:text-3xl font-semibold">Dr. Ivo Pessotti - </h1>
                        <h2 className="text-lg md:text-xl font-normal z-20">Seu Cirurgião Plástico em Brasília.</h2>
                        <p className="text-base md:text-base max-w-[95%] md:max-w-[80%] mt-8">
                            Bem-vinda ao seu caminho para uma autoestima revitalizada! Aqui, no meu
                            consultório, oferecemos uma abordagem cuidadosa e personalizada para cada
                            paciente. Com uma equipe dedicada e anos de experiência, estamos comprometidos
                            em tornar sua jornada estética segura, confortável e satisfatória.
                        </p>
                        <p className="text-base md:text-base max-w-[95%] md:max-w-[80%] mt-8">
                            Você está pronta para descobrir a melhor versão de si mesma? Deixe-nos guiá-la para
                            sua melhor versão. Com apenas algumas respostas simples, nosso processo de
                            consulta cuidadosamente desenvolvido irá identificar o procedimento ideal para
                            atender às suas necessidades e desejos.

                        </p>
                        <div className="flex flex-col p-4 border mt-8 lg:mx-0 lg:w-[72%] rounded-lg bg-[#3e6181] bg-opacity-20 border-blue-default z-40">
                            <p className="text-lg font-semibold pl-2">{answer}</p>
                            {!home &&
                                <button className="flex gap-2 text-start my-3 w-min px-2"
                                    onClick={() => { handleBackButton() }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    Voltar
                                </button>
                            }
                            <div className="inline">
                                {bodyPartState === 0 &&
                                    questions.partesDoCorpo.map((bodyPart, i) =>
                                    (
                                        <button key={i} className="border bg-white m-1 px-4 py-1 rounded-lg hover:shadow-lg hover:shadow-gray-500 hover:text-white transition hover:border-blue-400 hover:bg-blue-default border-blue-default"
                                            onClick={() => { handleBodyPartButton(bodyPart) }}
                                        >
                                            {bodyPart.name}
                                        </button>
                                    )
                                    )
                                }
                                {bodyPartState !== 0 && procedureName === 0 &&
                                    questions.partesDoCorpo.map((bodyPart) =>
                                        bodyPart.name === bodyPartState && (
                                            bodyPart.options.map((question, i) => (
                                                <button key={i * 10} className="border bg-white m-1 px-4 py-1 rounded-lg hover:shadow-lg hover:shadow-gray-500 hover:text-white transition hover:border-blue-400 hover:bg-blue-default border-blue-default"
                                                    onClick={() => { handleAnswerButton(question) }}
                                                >
                                                    {Object.keys(question)[0]}
                                                </button>
                                            ))
                                        )

                                    )
                                }
                            </div>
                        </div>
                        <h3 className="md:text-lg font-medium max-w-[80%] mt-8">Não deixe que as inseguranças atrapalhem sua vida.</h3>
                        {/* <a href="#" target="_blank" className="flex text-sm md:text-lg text-gray-900 bg-linear-green items-center mt-8 gap-1 md:gap-3 border-2 border-green-900 px-8 font-semibold py-2 rounded-xl hover:shadow-lg hover:shadow-blue-default hover:scale-105 transition-all duration-200">
                            <i className="fa-brands fa-whatsapp font-bold"></i><p className="">Agende Sua Consulta Agora</p>
                        </a> */}
                    </div>
                    <div className="w-[60%] top-16 right-40 absolute hidden lg:block">
                        <div className="h-[900px] relative hidden lg:block">
                            <Image layout="fill" priority src="/assets/01.png" className="ml-28 rounded-xl object-contain" alt="Dr. Ivo Pessotti" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
