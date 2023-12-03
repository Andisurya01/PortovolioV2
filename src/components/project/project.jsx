/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
const Project = ({ title }) => {
    return (
        <section className=" mx-auto w-full px-10 bg-Primary-Color py-2">
            <motion.div className="cursor-pointer border-b-2 border-black relative py-10 overflow-hidden group">
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
                    whileHover={{
                        height: 2000,
                        width: 3000
                    }}
                    className="bg-black absolute"></motion.div>
                <h1 className="text-2xl"> | {title}</h1>
            </motion.div>
        </section>
    )
}

export default Project