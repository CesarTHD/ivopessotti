import React from "react";
import Accordion from "./Accordion";
import JsonFAQ from "./FAQ.json";
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import formatTel from '../../functions/formatTel'
import getUTMs from '../../functions/getUtms'
import ThankYou from "../ThankYou";
import gtag_report_conversion from "../../functions/gtag_report_conversion"

const FAQ = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const format = formatTel;
  const [thankYou, setThankYou] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const urlPost = "https://n8n.atlascorp.com.br/webhook/c80b40a4-5576-486b-be9b-e985edec5003";

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
      console.log("ok", e);
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
    <div className="flex flex-col items-center w-full max-w-[1246px]">
      {thankYou && <ThankYou />}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-12">
        <div className="w-[100%] lg:w-[55%] flex flex-col items-center">
          <h2 className="font-semibold text-3xl text-blue-default">Dúvidas Frequentes</h2>
          <div className="py-4 bg-blue-default text-white rounded-lg mt-10 max-w-[700px] mx-3">
            {JsonFAQ.FAQ.map((faq, i) => (
              <Accordion
                key={i}
                title={`${i + 1}. ${faq.title}`}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>

        <div className="bg-gold w-[85%] lg:w-[40%] flex flex-col items-center text-center py-20 px-2 rounded-lg text-blue-default">
          <div className="text-lg">
            <h1 className="text-2xl md:text-3xl font-semibold pl-1">Agende sua Consulta</h1>
            <p className="text-lg font-medium mt-3 ">Tire suas dúvidas diretamente com um especialista</p>
            <p className="text-sm md:text-base font-medium pl-1">Após preenchimento do formulário, você será redirecionado ao nosso whatsapp.</p>
          </div>
          <form onSubmit={customHandleSubmit} className="flex flex-col mt-4 w-full text-blue-default">
            <input {...register("name", { required: "* Insira seu nome" })}
              type="text"
              placeholder="Seu Nome"
              className="border-2 rounded-3xl w-full border-blue-default p-2 text-base mt-4"
            />
            {errors.name && <span className="pl-2 text-left w-full flex text-red-900 italic text-sm">{errors.name.message}</span>}
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
                {errors.procedure && <span className="pl-2 text-left w-full flex text-red-900 italic text-sm">{errors.procedure.message}</span>}
              </div>
              <div className="block w-[50%]">
                <input {...register("age", { required: "* Insira sua idade" })} type="number" placeholder="Idade" className="border-2 rounded-3xl w-full border-blue-default p-2 text-base mt-4" />
                {errors.age && <span className="pl-2 text-left w-full flex text-red-900 italic text-sm">{errors.age.message}</span>}
              </div>
            </div>
            <div className="flex w-full gap-4">
              <div className="block  w-[50%]">
                <input {...register("email", { required: "* Insira seu e-mail" })} type="email" placeholder="E-mail" className="border-2 rounded-3xl w-full border-blue-default p-2 text-base mt-4 mr-4" />
                {errors.email && <span className="pl-2 text-left w-full flex text-red-900 italic text-sm">{errors.email.message}</span>}
              </div>
              <div className="block  w-[50%]">
                <input {...register("whatsapp", { required: "* Insira seu celular" })}
                  type="text"
                  placeholder="Celular"
                  className="border-2 rounded-3xl w-full border-blue-default p-2 text-base mt-4"
                  value={whatsapp}
                  onChange={(e) => { handleFormatTel(e) }}
                />
                {errors.whatsapp && <span className="pl-2 text-left w-full flex text-red-900 italic text-sm">{errors.whatsapp.message}</span>}
              </div>
            </div>
            <input id="formButton" type='submit' value="Quero fazer minha cirurgia plástica" className="uppercase bg-blue-default text-white rounded-3xl w-[90%] mx-auto p-3 text-xs md:text-base hover:cursor-pointer mt-8 hover:shadow-md hover:shadow-cyan-700 hover:scale-105 transition-all duration-200" />
          </form>

          <p className="font-medium text-lg p-1 mt-4 pl-1">Não perca a oportunidade de alcançar a melhor versão de si mesma. Garanta sua consulta com um dos mais conceituados cirurgiões plásticos de Brasília!</p>
        </div>
      </div>
    </div>

  );
};

export default FAQ;
