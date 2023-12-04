/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { useState } from "react"
const Project = ({ title }) => {
    const [onHover, setOnHover] = useState(false)
    const containerVariants = {
        init: {
            height: 2000,
            width: 2000,
            y: 130,
            
            transition : {
                duration: 1,
                ease : "easeInOut"
            }
        },
        hover: {
            y: 0,
            transition : {
                duration: 0.5,
                ease : "easeInOut"
            }
        }
    }
    return (
        <section className=" mx-auto w-full px-10 bg-Primary-Color py-2">
            <motion.div
                onHoverStart={() => setOnHover(true)}
                onHoverEnd={() => setOnHover(false)}
                className="cursor-pointer border-b-2  border-black relative py-10 overflow-hidden group-[.motion.div]:">
                <motion.div
                    variants={containerVariants}
                    initial="init"
                    animate = {onHover ? "hover" : "init"}
                    className="bg-black absolute inset-0 group-hover:bg-slate-400">isi</motion.div>
                <h1 className="text-2xl"> | {title}</h1>
            </motion.div>
        </section>
    )
}

export default Project