/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { useState } from "react"
const Project = ({ index, title, setModal, role }) => {
    const [hover, setHover] = useState(false)
    const project = {
        init: {
            x: 0
        },
        animateH1: {
            x: -10,
            opacity : 0.5
        },
        animateP: {
            x: 10,
            opacity : 0.5
        }
    }
    return (
        <section className=" mx-auto w-full px-10 bg-Primary-Color py-2" onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}}>
            <motion.div
                onHoverStart={() => setHover(true)}
                onHoverEnd={() => setHover(false)}
                className="cursor-pointer border-b-2 border-black py-10 flex justify-between">
                <motion.h1
                    variants={project}
                    animate={hover ? "animateH1" : "init"}
                    className="text-2xl"> | {title}</motion.h1>
                <motion.h1
                    variants={project}
                    animate={hover ? "animateP" : "init"}
                    className="text-2xl">
                    {role}
                </motion.h1>
            </motion.div>
        </section>
    )
}

export default Project