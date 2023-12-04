import { motion } from "framer-motion"
import FooterButton from "./footerButton";
const Footer = () => {
    const event = new Date();

    const localTime = event.toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta' })
    return (
        <section className="bg-Primary-Color pb-24">
            <div className="">
                <div className="text-center max-w-screen-xl mx-auto">
                    <motion.h1
                        className="text-9xl border border-black py-10 px-96 rounded-3xl ">
                        ANDI SURYA PRIYADI
                    </motion.h1>
                </div>
                <div className="grid grid-cols-2 max-w-screen-xl mx-auto py-10">
                    <div>
                        <h1>Referensed By MATTHIS GARNIER</h1>
                        <p className="text-4xl">Created By ANDI SURYA PRIYADI - Indonesia</p>
                        <p className="text-xl"><span className="text-gray-500">Local time</span> : {localTime}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <FooterButton title={"Instagram"}/>
                        <FooterButton title={"LinkedIn"}/>
                        <FooterButton title={"GitHub"}/>
                        <FooterButton title={""}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer