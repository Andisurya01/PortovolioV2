import FooterButton from "./footerButton";
const Footer = () => {
    const event = new Date();

    const localTime = event.toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta' })
    return (
        <section className="bg-Primary-Color pb-24">
            <div className="">
                <div className="text-center max-w-screen-xl mx-auto px-10">
                    <h1
                        className="md:text-9xl shadow-xl text-6xl bg-[url('/index/gradienabstrack.jpg')] bg-cover bg-center text-white border-black md:py-10 py-20 md:px-96 rounded-3xl ">
                        ANDI SURYA PRIYADI
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto py-10 px-10">
                    <div>
                        <h1>Referensed By MATTHIS GARNIER</h1>
                        <p className="text-4xl">Created By ANDI SURYA PRIYADI - Indonesia</p>
                        <p className="text-xl"><span className="text-gray-500">Local time</span> : {localTime}</p>
                    </div>
                    <div className="grid grid-cols-2 pt-10 md:pt-0 gap-5">
                        <FooterButton title={"Instagram"} link={"https://www.instagram.com/andiiiii.sp/"}/>
                        <FooterButton title={"LinkedIn"} link={"https://www.linkedin.com/in/andisurya1/"}/>
                        <FooterButton title={"GitHub"} link={"https://github.com/Andisurya01"}/>
                        <FooterButton title={""}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer