/* eslint-disable react/prop-types */
import gsap from "gsap"
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}
const Modal = ({ modal, projects }) => {
    const { active, index } = modal;
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    useEffect(() => {
        //Move Container
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
        //Move cursor
        let xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
        let yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
        //Move cursor label
        let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
        let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })

        window.addEventListener('mousemove', (e) => {
            const { pageX, pageY } = e;
            xMoveContainer(pageX)
            yMoveContainer(pageY)
            xMoveCursor(pageX)
            yMoveCursor(pageY)
            xMoveCursorLabel(pageX)
            yMoveCursorLabel(pageY)
        })
    }, [])

    return (
        <>
            {/* transition-[transition: top 0.5s cubic-bezier(0.76, 0, 0.24, 1)] */}
            <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className="w-[500px] h-[450px] absolute bg-black overflow-hidden pointer-events-none flex items-center justify-center">
                <motion.div 
                style={{ top: index * -100 + "%" }}
                transition={{
                    top : 0.5,
                    ease : [0.76, 0, 0.24, 1]
                }}
                className="h-full w-full absolute">
                    {
                        projects.map((project, index) => {
                            const { src, color } = project
                            return <div className="h-full w-full flex items-center justify-center" style={{ backgroundColor: color }} key={`modal_${index}`}>
                                <img
                                    src={`images/${src}`}
                                    width={300}
                                    height={0}
                                    alt="image"
                                    className="h-auto"
                                />
                            </div>
                        })
                    }
                </motion.div>
            </motion.div>
            <motion.div ref={cursor} className="w-20 h-20 bg-eva02 text-white absolute rounded-full flex items-center justify-center text-sm font-light pointer-events-none" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
            <motion.div ref={cursorLabel} className="w-20 h-20 bg-transparent text-white absolute flex items-center justify-center text-sm font-light pointer-events-none" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
        </>
    )
}

export default Modal