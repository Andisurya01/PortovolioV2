/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
const H1Herro = ({ initial, animate}) => {
    console.log(initial);
    return (
        <motion.div
            className="flex flex-row whitespace-nowrap gap-5">

            <motion.h1
                initial={{ x: initial }}
                transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="text-9xl inline">
                ANDI SURYA PRIYADI
            </motion.h1>
            <motion.h1
                initial={{ x: initial }}
                animate={{ x: animate }}
                transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="text-9xl inline">
                ANDI SURYA PRIYADI
            </motion.h1>
            <motion.h1
                initial={{ x: initial }}
                animate={{ x: animate }}
                transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="text-9xl inline">
                ANDI SURYA PRIYADI
            </motion.h1>
        </motion.div>
    )
}

export default H1Herro