import Image from "next/image";

const PrintComments = () => {
  return (
    <div className="flex items-center py-8 text-blue-default flex-col gap-8 justify-center w-full max-w-[1700px]">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center mx-4 my-28 text-2xl lg:text-3xl font-semibold">
          Confira o que as nossas pacientes estão comentando sobre as suas transformações:
        </h2>

        <div className="w-full flex flex-col gap-8 items-center p-2 md:p-12 max-w-[90%] rounded-3xl">
          <div className="w-full grid grid-cols-1 gap-16 md:gap-8 md:grid-cols-3 h-full">
            <div className="w-full mx-auto relative h-auto">
              <Image
                layout="responsive"
                width={500}
                height={500}
                className="object-contain"
                src="/assets/print1.png"
                alt="Comentários do instagram"
              />
            </div>
            <div className="w-full mx-auto relative h-auto mt-0 md:-mt-12">
              <Image
                layout="responsive"
                width={500}
                height={500}
                className="object-contain"
                src="/assets/print3.png"
                alt="Comentários do instagram"
              />
            </div>
            <div className="w-full mx-auto relative h-auto">
              <Image
                layout="responsive"
                width={500}
                height={500}
                className="object-contain"
                src="/assets/print2.png"
                alt="Comentários do instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintComments;
