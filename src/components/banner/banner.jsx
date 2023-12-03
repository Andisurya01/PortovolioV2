import { motion } from "framer-motion"

const Banner = () => {
    return (
        <section className="bg-Primary-Color py-10 pl-20 ">
            <motion.div
                className="rounded-l-xl  text-white overflow-hidden relative">
                <motion.div
                    initial={{
                        height: 0,
                        width: 0,
                        y : 0
                    }}
                    transition={{
                        duration: 1.5,
                        delay : 0.5,
                        ease : "easeInOut"
                    }}
                    whileInView={{
                        height: 2000,
                        width: 3000
                    }}
                    className="rounded-r-full bg-black absolute"></motion.div>
                <h1 className="text-9xl px-20 py-40 pr-96 text-white absolute">Ayo kenali saya lebih jauh</h1>
                <h1 className="text-9xl px-20 py-40 pr-96 text-Primary-Color">Ayo kenali saya lebih jauh</h1>
            </motion.div>
        </section>
    )
}

export default Banner