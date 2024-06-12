import React from 'react';

const Testimonials = () => {
  return (
    <div className="min-h-[600px] bg-woman bg-cover bg-center bg-no-repeat bg-fixed mx-auto">
      <div className='min-h-[600px] bg-blue-default bg-opacity-80 px-4 py-20 md:p-20 '>
        <h2 className="text-3xl font-semibold text-gold text-center">Avaliações de Clientes</h2>
        <div className="flex flex-col gap-8 lg:flex-row items-center justify-around mt-14 md:mt-24 max-w-[1246px] mx-auto">
          
          <div className="flex flex-col  justify-around backdrop-blur-md border border-gold rounded-lg shadow-lg px-6 py-4 max-w-96 h-60">
            <p className="text-lg text-white">
              `${`'Excelente cirurgião! Fiquei muito satisfeita com os resultados do meu procedimento de rinoplastia.'`}`
            </p>
            <div className='flex items-center'>
              <p className="font-semibold text-white">- Maura Silva</p>
            </div>
            
          </div>
          
          <div className="flex flex-col  justify-around backdrop-blur-md border border-gold rounded-lg shadow-lg px-6 py-4 max-w-96 h-60">
            <p className="text-lg text-white">
              `${`O Dr. Pessotti 'é altamente profissional e atencioso. Recomendo-o para qualquer procedimento de cirurgia plástica.'`}`
            </p>
            <div className='flex items-center'>
              <p className="font-semibold text-white">- Cristina Oliveira</p>
            </div>
            
          </div>
          
          <div className="flex flex-col  justify-around backdrop-blur-md border border-gold rounded-lg shadow-lg px-6 py-4 max-w-96 h-60">
            <p className="text-lg text-white">
              `${`Estou muito feliz com minha 'abdominoplastia. O Dr. Pessotti e sua equipe foram incríveis durante todo o processo.'`}`
            </p>
            <div className='flex items-center'>
              <p className="font-semibold text-white">- Amanda Santos</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;