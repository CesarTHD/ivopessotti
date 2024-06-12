import Image from "next/image"

const Specialties = () => {
    return (
        <>
            <div className="backdrop-blur">
                <div className="bg-gold h-[3px] my-8 md:my-0 md:mt-[-70px] lg:mt-[-70px] xl:mt-[-130px] 2xl:mt-[-120px]"></div>
                <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 text-base leading-5 items-center py-4 text-blue-default font-medium">
                    <div className="flex items-center">
                        <div className="relative w-full max-w-24 h-24">
                            <Image layout="fill" className="object-contain" src={"/assets/icons/inovacao.png"} alt="ícone inovação" />
                        </div>
                        <p className="">Inovação em cada procedimento.</p>
                    </div>
                    <div className="flex items-center">
                        <div className="relative w-full max-w-24 h-24">
                            <Image layout="fill" className="object-contain" src={"/assets/icons/equipe-de-trabalho.png"} alt="ícone equipe" />
                        </div>
                        <p className="">Cirurgião especialista altamente qualificado e dedicado.</p>
                    </div>
                    <div className="flex items-center">
                        <div className="relative w-full max-w-24 h-24">
                            <Image layout="fill" className="object-contain" src={"/assets/icons/corpo-fino.png"} alt="ícone corpo" />
                        </div>
                        <p className="">Vasta experiência em diversos procedimentos estéticos.</p>
                    </div>
                    <div className="flex items-center">
                        <div className="relative w-full max-w-24 h-24">
                            <Image layout="fill" className="object-contain" src={"/assets/icons/medico.png"} alt="ícone médico" />
                        </div>
                        <p className="">Atendimento personalizado com abordagem centrada no paciente.</p>
                    </div>
                </div>
                <div className="bg-gold my-8 md:my-0 h-[3px]"></div>
            </div>
        </>
    )
}

export default Specialties