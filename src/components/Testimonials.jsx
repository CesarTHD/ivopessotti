import React from 'react';

const Testimonials = () => {
  return (
    <div className="min-h-[600px] bg-woman bg-cover bg-center bg-no-repeat bg-fixed mx-auto">
      <div className='min-h-[600px] bg-blue-default bg-opacity-80 px-4 py-20 md:p-20 '>
        <h2 className="text-3xl font-semibold text-gold text-center">Avaliações de Clientes</h2>
        <div className="flex flex-col text-white text-sm gap-8 lg:flex-row items-center justify-around mt-14 md:mt-24 max-w-[1246px] mx-auto">
          
          <div className="flex flex-col justify-between backdrop-blur-md border border-gold rounded-lg shadow-lg px-6 py-5 max-w-96 h-60">
            <p className="">
              Excelente profissional, acompanhamento impecável do pré ao pós operatório.
              Sempre muito sincero e ético, desde o primeiro contato entendeu qual era o meu objetivo e buscou alternativas para chegar o mais próximo do resultado esperado.
              Sem dúvidas recomendo e farei novos procedimentos.
            </p>
            <div className='flex items-center'>
              <p className="font-semibold">- Lorrany Lucena</p>
            </div>
            
          </div>
          
          <div className="flex flex-col  justify-between backdrop-blur-md border border-gold rounded-lg shadow-lg px-6 py-5 max-w-96 h-60">
            <p className="">
              Não tenho nem palavras para descrever as inúmeras qualidades do Dr. Ivo. Consulta de 1:20 me explicando absolutamente tudo que seria feito, sanando todas as minhas dúvidas, extremamente criterioso e sincero.
              Só tenho a agradecer estou com quase 2 meses de cirurgia e sigo tendo todo auxílio e atenção que preciso.
              Muito obrigada Dr. Ivo, que Deus continue abençoando sua vida
            </p>
            <div className='flex items-center'>
              <p className="font-semibold">- Cecilia Resende</p>
            </div>
            
          </div>
          
          <div className="flex flex-col  justify-between backdrop-blur-md border border-gold rounded-lg shadow-lg px-6 py-5 max-w-96 h-60">
            <p className="">
              Recomendo fortemente o Dr. Ivo Pessoti para quem busca um cirurgião plástico de alta qualidade, que coloca o bem-estar e a satisfação dos pacientes em primeiro lugar. Ele é, sem dúvida, um profissional altamente qualificado, um destauqe em sua área.
            </p>
            <div className='flex items-center'>
              <p className="font-semibold">- Rogerio Werneck</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;