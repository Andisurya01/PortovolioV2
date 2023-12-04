/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
const H1Herro = ({ initial, animate , bgColor}) => {
    return (
        <motion.div
            initial={{
                opacity : 0,
                y : 100
            }}
            animate = {{
                opacity : 1,
                y : 0
            }}
            transition={{
                delay : 0.03,
                duration : 1.3
            }}
            className="flex flex-row whitespace-nowrap gap-5 text-Secondary-Color">
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
                style={{
                    background : bgColor
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