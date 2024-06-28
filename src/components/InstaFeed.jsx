import Image from "next/image";

const InstaFeed = () => {
    return (
        <div className="flex items-center py-16 bg-background-insta bg-fixed text-blue-default flex-col justify-center w-full">
            <div className="flex flex-col items-center mt-4">
                <h2 className="text-2xl lg:text-3xl text-gold font-semibold">Siga no Instagram</h2>
            </div>

            <div className="flex justify-center w-full max-w-[1500px]">
                <div className="flex flex-col gap-12 items-center p-4 md:p-12 w-full max-w-[90%] rounded-3xl">
                    <a href="#" 
                        target="_blank" className="flex w-32 gap-2 m-4 md:m-0 text-lg bg-gold justify-center items-center text-blue-default rounded-md py-1 hover:shadow-lg hover:shadow-blue-default hover:scale-105 transition-all duration-200"
                    >
                        <i className="fa-brands fa-instagram"></i> Seguir
                    </a>

                    <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4 w-full">
                        <div className="relative h-64 w-full"
                        >
                            <Image layout="fill" className="object-cover rounded-lg border-2 border-gold" src="/assets/instaFeed/pub1.jpg" alt="Comentários instagram Ivo Pessotti" />
                            <div className="absolute flex items-center gap-2 justify-center text-white inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-70 rounded-lg">
                                <i className="fa-solid fa-heart"></i>200
                                <i className="fa-solid fa-comment ml-4"></i>51
                            </div>
                        </div>
                        <div className="relative h-64 w-full"
                        >
                            <Image layout="fill" className="object-cover rounded-lg border-2 border-gold" src="/assets/instaFeed/pub2.jpg" alt="Comentários instagram Ivo Pessotti" />
                            <div className="absolute flex items-center gap-2 justify-center text-white inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-70 rounded-lg">
                                <i className="fa-solid fa-heart"></i>19
                                <i className="fa-solid fa-comment ml-4"></i>3
                            </div>
                        </div>
                        <div className="relative h-64 w-full"
                        >
                            <Image layout="fill" className="object-cover rounded-lg border-2 border-gold" src="/assets/instaFeed/pub3.jpg" alt="Comentários instagram Ivo Pessotti" />
                            <div className="absolute flex items-center gap-2 justify-center text-white inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-70 rounded-lg">
                                <i className="fa-solid fa-heart"></i>31
                                <i className="fa-solid fa-comment ml-4"></i>3
                            </div>
                        </div>
                        <div className="relative h-64 w-full"
                        >
                            <Image layout="fill" className="object-cover rounded-lg border-2 border-gold" src="/assets/instaFeed/pub4.jpg" alt="Comentários instagram Ivo Pessotti" />
                            <div className="absolute flex items-center gap-2 justify-center text-white inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-70 rounded-lg">
                                <i className="fa-solid fa-heart"></i>88
                                <i className="fa-solid fa-comment ml-4"></i>3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstaFeed;
