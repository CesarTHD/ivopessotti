"use client";
import Footer from '../../components/Footer'
import FAQ from '../../components/FAQ/FAQ'
import ExitIntentModal from '../../components/ExitIntentModal'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { Typewriter, Cursor } from "react-simple-typewriter";
import InstaFeed from '../../components/InstaFeed'
import { useForm } from 'react-hook-form'
import ThankYou from '../../components/ThankYou'
import formatTel from '../../functions/formatTel'
import getUTMs from '../../functions/getUtms'
import About from '../../components/About'
import gtag_report_conversion from "../../functions/gtag_report_conversion"


const Result = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const format = formatTel;
  const [thankYou, setThankYou] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [open, setOpen] = useState(false);
  const urlPost = "https://n8n.atlascorp.com.br/webhook/{}";

  let urlVideo;
  let procedureName;
  let procedureDesc;
  let iframeVideo;

  if (typeof window !== 'undefined') {
    urlVideo = localStorage.getItem("urlVideo");
    procedureName = localStorage.getItem("procedureName")
    procedureDesc = localStorage.getItem("procedureDesc")
    iframeVideo = <iframe id="videoIframe" width="100%" height="100%" src={urlVideo} title={procedureName} className='rounded-2xl' allow="autoplay;" referrerPolicy="strict-origin-when-cross-origin"></iframe>
  }


  const onSubmit = (data) => {
    const dateHour = new Date();
    const date = dateHour.toISOString().slice(0, 10);
    const [year, month, day] = date.split('-');
    const formattedDate = `${day}/${month}/${year}`;
    const hour = dateHour.toTimeString().slice(0, 8);

    const utms = getUTMs();

    const lead = {
      "Nome": data.name,
      "Whatsapp": data.whatsapp,
      "Idade": data.age,
      "Email": data.email,
      "Procedimento": data.procedure,
      "Data": formattedDate,
      "Hora": hour,
      "UTM_Source": utms.utm_source,
      "UTM_Medium": utms.utm_medium,
      "UTM_Campaign": utms.utm_campaign,
      "UTM_Content": utms.utm_content
    }

    fetch(urlPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead)
    }).then((e) => {
      setThankYou(true);
    }).catch((e) => {
      console.log("erro", e)
    });
  };

  const customHandleSubmit = (event) => {
    event.preventDefault();
    handleSubmit(onSubmit)(event);
  };

  const handleFormatTel = (e) => {
    setWhatsapp(format(e));
  }

  return (
    <>
      {thankYou && <ThankYou />}
      <div className='bg-gray-100'>
        <Header />
        <div className='flex max-w-[1700px] justify-center px-8 lg:px-32 mx-auto text-blue-default text-center md:text-start'>
          <div className=''>
            <div className='flex justify-center w-full mt-32'>
              <h1 className='text-xl sm:text-2xl lg:text-3xl pt-8'>Transforme a sua {'  '}<span className='text-gold text-xl lg:text-3xl font-semibold bg-blue-default px-2 rounded-md'><Typewriter words={['Autoestima!', 'Saúde!', 'Vida!']} loop={true} /><Cursor cursorStyle="♥" /></span></h1>
            </div>

            <div className='flex flex-col mt-20 md:flex-row items-center justify-around'>
              <div className='w-[95%] md:w-[45%] h-[400px] md:h-[550px] flex justify-center'>
                {iframeVideo}
              </div>

              <div className='w-full md:w-[40%]'>
                <div className="w-full">
                  <div className="text-lg">
                    <h1 className="text-2xl lg:text-3xl font-semibold pl-1 pt-10 md:pt-24 lg:pt-8">{procedureName}</h1>
                    <p className="text-sm leading-5 mt-1 pl-1 font-semibold">De acordo com suas respostas, este é o procedimento <span className=''>mais indicado para você!</span></p>
                    <p className="text-base leading-5 mt-1 pl-1 font-medium ">{procedureDesc}</p>
                    <p className="font-normal text-base leading-5 pl-1 mt-2">Preencha nosso formulário e escolha a opção com o nome do procedimento, após isso, nossa equipe irá preparar um atendimento exclusivo para você <span className='bg-blue-default whitespace-nowrap text-gold px-1 rounded-md'>via Whatsapp.</span></p>
                  </div>
                  <form onSubmit={customHandleSubmit} className="flex flex-col mt-4 w-full text-blue-default">
                    <input {...register("name", { required: "* Insira seu nome" })}
                      type="text"
                      placeholder="Seu Nome"
                      className="border-2 rounded-3xl w-full border-blue-default p-2 text-base mt-4"
                    />
                    {errors.name && <span className="pl-2 text-left w-full flex text-red-500 italic text-sm">{errors.name.message}</span>}
                    <div className="flex w-full gap-4">
                      <div className="block w-[50%]">
                        <select {...register("procedure", { required: "* Selecione um procedimento" })} className="border-2 rounded-3xl w-full border-blue-default p-2 text-base mt-4 mr-4">
                          <option value="">Escolha uma opção</option>
                          <option value="Rinoplastia">Rinoplastia</option>
                          <option value="Mamosplatia de aumento">Mamosplatia de aumento</option>
                          <option value="Lipoaspiração/ Lipoescultura">Lipoaspiração/ Lipoescultura</option>
                          <option value="Abdominoplastia">Abdominoplastia</option>
                          <option value="Blefaroplastia">Blefaroplastia</option>
                          <option value="Lifting facial/ cervical (Deep Plane e Deep Neck)">Lifting facial/ cervical (Deep Plane e Deep Neck)</option>
                          <option value="Otoplastia">Otoplastia</option>
                          <option value="Cirurgia de contorno corporal">Cirurgia de contorno corporal</option>
                          <option value="Mamoplastia redutora">Mamoplastia redutora</option>
                          <option value="Cirurgia plástica íntima feminina">Cirurgia plástica íntima feminina</option>
                          <option value="Lifting de coxas e braços">Lifting de coxas e braços</option>
                          <option value="Cirurgia plástica masculina (ginecomastia, lipo HD)">Cirurgia plástica masculina (ginecomastia, lipo HD)</option>
                        </select>
                        {errors.procedure && <span className="pl-2 text-left w-full flex text-red-500 italic text-sm">{errors.procedure.message}</span>}
                      </div>
                      <div className="block w-[50%]">
                        <input {...register("age", { required: "* Insira sua idade" })} type="number" placeholder="Idade" className="border-2 rounded-3xl w-full border-blue-default p-2 text-base mt-4" />
                        {errors.age && <span className="pl-2 text-left w-full flex text-red-500 italic text-sm">{errors.age.message}</span>}
                      </div>
                    </div>
                    <div className="flex w-full gap-4">
                      <div className="block  w-[50%]">
                        <input {...register("email", { required: "* Insira seu e-mail" })} type="email" placeholder="E-mail" className="border-2 rounded-3xl w-full border-blue-default p-2 text-base mt-4 mr-4" />
                        {errors.email && <span className="pl-2 text-left w-full flex text-red-500 italic text-sm">{errors.email.message}</span>}
                      </div>
                      <div className="block  w-[50%]">
                        <input {...register("whatsapp", { required: "* Insira seu celular" })}
                          type="text"
                          placeholder="Celular"
                          className="border-2 rounded-3xl w-full border-blue-default p-2 text-base mt-4"
                          value={whatsapp}
                          onChange={(e) => { handleFormatTel(e) }}
                        />
                        {errors.whatsapp && <span className="pl-2 text-left w-full flex text-red-500 italic text-sm">{errors.whatsapp.message}</span>}
                      </div>
                    </div>
                    <input id="formButton" type='submit' value="Quero fazer minha cirurgia plástica" className="uppercase bg-blue-default text-white rounded-3xl w-full p-2 text-base hover:cursor-pointer mt-8 hover:shadow-md hover:shadow-cyan-700 hover:scale-105 transition-all duration-200" />
                  </form>

                  <p className="text-base p-1 mt-4 pl-1">Não perca a oportunidade de alcançar a melhor versão de si mesma. Garanta sua consulta com um dos mais conceituados cirurgiões plásticos de Brasília!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='my-32 flex items-center w-full justify-center'>
          <InstaFeed />
        </div>


        <div id='about'></div>
        <div className="my-52">
          <About />
        </div>

        <div id='contact'></div>
        <div className='flex my-32 justify-center'>
          <FAQ />
        </div>



        <div className="my-16">
          <ExitIntentModal open={open} setOpen={setOpen} />
        </div>
        <Footer />

      </div>
    </>
  )
}

export default Result
