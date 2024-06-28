const ThankYou = () => {
    const redirectWhatsapp = "https://wa.me/1234567890"

    setTimeout(()=> {
        gtag_report_conversion(redirectWhatsapp);
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