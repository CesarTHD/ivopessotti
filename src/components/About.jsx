import Image from "next/image"

const About = () => {
    return (
        <div className="max-w-[1200px] md:h-[60rem] lg:h-[45rem] flex mx-auto shadow-2xl relative rounded-lg overflow-hidden">
            <div className="relative w-[60%] md:flex hidden">
                <Image 
                    src="/assets/02.png" 
                    alt="Doutor Ivo Pessotti"
                    layout="fill"
                    className="absolute left-0 object-contain"
                />
            </div>
            <div className="w-[100%] md:w-[80%] text-blue-default py-16 px-6 md:px-10 text-center md:text-left">
                <h2 className="text-2xl">Sobre o Dr. Ivo Pessotti: <br /><span className="font-semibold">Excelência em Cirurgia Plástica</span></h2>
                <p className="mt-6">
                    O Dr. Ivo Pessotti é um renomado cirurgião plástico, com vasta experiência em <span className="font-semibold">Cirurgia Plástica Reconstrutiva</span> e <span className="font-semibold">Estética</span>, registrado no <span className="font-semibold">CRM DF</span> pelo número <span className="font-semibold">31041</span>. 
                </p>
                <p className="mt-4">
                    Graduado em Medicina pela <span className="font-semibold">Universidade de Vila Velha</span>, ele é <span className="font-semibold">especialista em Cirurgia Geral</span> pelo <span className="font-semibold">Hospital Naval Marcílio Dias (RQE: 22.261)</span> e em <span className="font-semibold">Cirurgia Plástica</span> pelo mesmo hospital <span className="font-semibold">(RQE: 22.262)</span>.
                </p>
                <p className="mt-4">
                    Como membro <span className="font-semibold">especialista da Sociedade Brasileira de Cirurgia Plástica</span>, o Dr. Ivo Pessotti continua comprometido com os mais <span className="font-semibold">altos padrões de qualidade e segurança</span> em cada procedimento.
                </p>
                <p className="mt-4">
                    Com uma abordagem centrada no paciente e um compromisso com a <span className="font-semibold">excelência</span>, o Dr. Ivo Pessotti está pronto para ajudá-lo a alcançar suas metas estéticas com <span className="font-semibold">segurança</span> e <span className="font-semibold">confiança</span>. Agende sua consulta <span className="font-semibold">hoje mesmo</span> e dê o primeiro passo em direção a uma transformação verdadeiramente gratificante.
                </p>
                <div className="flex justify-around items-center mt-8">
                    <div className="w-52 relative h-24">
                        <Image 
                            src="/assets/certifications/sociedade-brasileira.png" 
                            alt="Certificação Sociedade Brasileira"
                            layout="fill"
                            className="object-contain"
                        />
                    </div>
                    <div className="w-20 relative h-20">
                        <Image 
                            src="/assets/certifications/marcilio-dias-2.png" 
                            alt="Certificação Marcilio Dias"
                            layout="fill"
                            className="object-contain"
                        />
                    </div>
                    <div className="w-32 relative h-32">
                        <Image 
                            src="/assets/certifications/vila-velha.jpg" 
                            alt="Certificação Vila Velha"
                            layout="fill"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
