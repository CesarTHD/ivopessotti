const ThankYou = () => {
    
    setTimeout(()=> {
        location.replace("https://wa.me/5561998892688?text=Ol%C3%A1%2C+por+favor%2C+gostaria+de+agendar+uma+consulta.");
    }, 2000)

    return (
        <>
            <div className="fixed top-0 w-screen h-screen flex justify-center items-center bg-black opacity-80 z-50">
                <p className="text-5xl tracking-wide text-center font-semibold text-white">Agradeço seu contato!</p>
            </div>
        </>
    )
}

export default ThankYou